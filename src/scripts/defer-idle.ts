export function deferIdle(callback: () => void | Promise<void>): void {
  const run = () => {
    const schedule =
      window.requestIdleCallback ??
      ((cb: IdleRequestCallback) =>
        window.setTimeout(
          () => cb({ didTimeout: true, timeRemaining: () => 0 }),
          200,
        ));

    schedule(() => {
      void callback();
    }, { timeout: 2000 });
  };

  if (document.readyState === "complete") {
    run();
  } else {
    window.addEventListener("load", run, { once: true });
  }
}
