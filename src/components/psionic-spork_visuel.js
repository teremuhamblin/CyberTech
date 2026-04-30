import gsap from "gsap";

export function animatePsionicSpork(selector) {
  gsap.fromTo(
    selector,
    { scale: 0.9, opacity: 0.5, filter: "drop-shadow(0 0 0px #00eaff)" },
    {
      scale: 1.15,
      opacity: 1,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      filter: "drop-shadow(0 0 12px #00eaff)"
    }
  );
}
