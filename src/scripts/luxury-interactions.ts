const CURSOR_LERP_DOT = 0.38;
const CURSOR_LERP_RING = 0.14;
const PARALLAX_MAX = 48;

const HOVER_SELECTORS = [
  "a",
  "button",
  "[role='button']",
  "input",
  "textarea",
  "select",
  "label",
  ".region-card",
  ".dive-card",
  ".bio-card",
  ".itin-medium",
  ".yacht-card",
  ".dest-card",
  ".faq-item",
  ".link-toggle",
  ".cta-banner__button",
  ".modal__close",
  ".form__submit",
].join(", ");

const REVEAL_SELECTORS = [
  ".overview__text",
  ".overview__visual",
  ".featured-quote__inner",
  ".two-col-with-image",
  ".beyond-section__content",
  ".beyond-section__image",
  ".expertise-hero__content",
  ".section-header",
  ".region-card",
  ".dive-card",
  ".bio-card",
  ".stats-showcase",
  ".season-wrapper",
  ".logistics-two-col",
  ".insider-card",
  ".itin-medium",
  ".yacht-card",
  ".dest-card",
  ".faq-item",
  ".cta-banner__inner",
];

const       STAGGER_PARENTS = [
  ".region-grid",
  ".dive-grid",
  ".bio-grid",
  ".insider-grid",
  ".itin-grid",
  ".yacht-grid",
  ".dest-grid",
  ".faq-grid",
  ".overview__stats",
];

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isFinePointer(): boolean {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function lerp(current: number, target: number, factor: number): number {
  return current + (target - current) * factor;
}

function initCursor(root: HTMLElement): (() => void) | null {
  const dot = root.querySelector<HTMLElement>(".lux-cursor__dot");
  const ring = root.querySelector<HTMLElement>(".lux-cursor__ring");
  if (!dot || !ring) return null;

  document.documentElement.classList.add("has-lux-cursor");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let dotX = mouseX;
  let dotY = mouseY;
  let ringX = mouseX;
  let ringY = mouseY;
  let hovering = false;
  let rafId = 0;
  let visible = false;

  const setVisible = (next: boolean) => {
    if (visible === next) return;
    visible = next;
    root.classList.toggle("is-visible", next);
  };

  const onMove = (event: MouseEvent) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    setVisible(true);
  };

  const onLeave = () => setVisible(false);

  const onOver = (event: MouseEvent) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    hovering = Boolean(target.closest(HOVER_SELECTORS));
    root.classList.toggle("is-hovering", hovering);
  };

  const tick = () => {
    dotX = lerp(dotX, mouseX, CURSOR_LERP_DOT);
    dotY = lerp(dotY, mouseY, CURSOR_LERP_DOT);
    ringX = lerp(ringX, mouseX, CURSOR_LERP_RING);
    ringY = lerp(ringY, mouseY, CURSOR_LERP_RING);

    dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

    rafId = window.requestAnimationFrame(tick);
  };

  window.addEventListener("mousemove", onMove, { passive: true });
  document.addEventListener("mouseleave", onLeave);
  document.addEventListener("mouseover", onOver, { passive: true });
  rafId = window.requestAnimationFrame(tick);

  return () => {
    window.cancelAnimationFrame(rafId);
    window.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseleave", onLeave);
    document.removeEventListener("mouseover", onOver);
    document.documentElement.classList.remove("has-lux-cursor");
  };
}

function initScrollReveal(): (() => void) | null {
  const elements = REVEAL_SELECTORS.flatMap((selector) =>
    Array.from(document.querySelectorAll<HTMLElement>(selector)),
  );

  if (!elements.length) return null;

  elements.forEach((element) => element.classList.add("lux-reveal"));

  STAGGER_PARENTS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((parent) => {
      parent
        .querySelectorAll<HTMLElement>(":scope > .lux-reveal")
        .forEach((child, index) => {
          child.style.setProperty("--lux-reveal-delay", `${index * 0.07}s`);
        });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -6% 0px",
    },
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}

function initHeroParallax(): (() => void) | null {
  const heroFrame = document.querySelector<HTMLElement>(".hero__frame");
  const heroImage = document.querySelector<HTMLElement>(".hero__image");
  const heroContent = document.querySelector<HTMLElement>(".hero__content");

  if (!heroFrame || !heroImage) return null;

  const update = () => {
    const scrollY = window.lenis?.scroll ?? window.scrollY;
    const height = heroFrame.offsetHeight || window.innerHeight;
    const progress = Math.min(Math.max(scrollY / height, 0), 1);

    heroImage.style.transform = `translate3d(0, ${progress * PARALLAX_MAX}px, 0) scale(${1 + progress * 0.04})`;
    if (heroContent) {
      heroContent.style.opacity = String(1 - progress * 0.55);
      heroContent.style.transform = `translate3d(0, ${progress * 20}px, 0)`;
    }
  };

  const lenis = window.lenis;
  if (lenis) {
    lenis.on("scroll", update);
    update();
    return () => lenis.off("scroll", update);
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
  return () => window.removeEventListener("scroll", update);
}

export function initLuxuryInteractions(): void {
  if (prefersReducedMotion()) return;

  const cleanups: Array<(() => void) | null> = [];

  const cursorRoot = document.querySelector<HTMLElement>(".lux-cursor");
  if (cursorRoot && isFinePointer()) {
    cleanups.push(initCursor(cursorRoot));
  }

  cleanups.push(initScrollReveal());

  if (document.querySelector(".hero__frame")) {
    cleanups.push(initHeroParallax());
  }

  document.addEventListener(
    "astro:before-swap",
    () => {
      cleanups.forEach((cleanup) => cleanup?.());
    },
    { once: true },
  );
}
