import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".map",
    start: "top top",
    end: "+=300",
    scrub: true,
    pin: true,
  },
});

tl.to(".map-background", {
  backgroundPosition: "100% 50%",
  ease: "none",
  duration: 1,
});
