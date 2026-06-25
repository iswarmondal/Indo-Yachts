import Lenis from "lenis";

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

const MAX_WHEEL_DELTA = 55;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function initSmoothScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.68,
    touchMultiplier: 1.1,
    syncTouch: true,
    syncTouchLerp: 0.08,
    smoothWheel: true,
    autoRaf: true,
    virtualScroll: (data) => {
      const sign = Math.sign(data.deltaY) || 1;
      data.deltaY = sign * Math.min(Math.abs(data.deltaY), MAX_WHEEL_DELTA);
      return true;
    },
    anchors: {
      offset: 96,
      duration: 1.35,
      easing: easeInOutCubic,
    },
  });

  window.lenis = lenis;

  lenis.on("scroll", () => {
    window.dispatchEvent(new Event("scroll"));
  });

  return lenis;
}
