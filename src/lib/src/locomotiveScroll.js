import { writable } from "svelte/store";

export const locomotiveScroll = writable(null);

export async function initLocomotiveScroll(options = {}) {
  if (typeof window !== "undefined") {
    const LocomotiveScroll = (await import("locomotive-scroll")).default;
    const instance = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      lenisOptions: {
        ...options,
      },
    });
    locomotiveScroll.set(instance);
    return instance;
  }
}
