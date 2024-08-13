import { writable } from "svelte/store";

export const locomotiveScroll = writable(null);

export async function initLocomotiveScroll(options = {}) {
  if (typeof window !== "undefined") {
    const LocomotiveScroll = (await import("locomotive-scroll")).default;
    const instance = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      lenisOptions: {
        lerp: 0.1,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        ...options,
      },
    });
    locomotiveScroll.set(instance);
    return instance;
  }
}
