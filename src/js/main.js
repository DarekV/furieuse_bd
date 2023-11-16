import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".map-viewport",
    start: "top top",
    end: "+=20000",
    scrub: 2,
    pin: true,
  },
});

tl.to(".map-world", {
  scale: 2.5,
  x: "50%",
  y: "50%",
  duration: 4,
  ease: "power1.inOut",
});

tl.to(".map-world", {
  scale: 2.5,
  x: "40%",
  y: "35%",
  duration: 2,
  ease: "power1.inOut",
});

tl.to(".map-world", {
  scale: 2.5,
  x: "-20%",
  y: "70%",
  duration: 4,
  ease: "power1.inOut",
});

tl.to(".map-world", {
  scale: 2.5,
  x: "-80%",
  y: "-20%",
  duration: 4,
  ease: "power1.inOut",
});

tl.to(".map-world", {
  scale: 2.5,
  x: "-70%",
  y: "-70%",
  duration: 2,
  ease: "power1.inOut",
});

tl.to(".map-world", {
  scale: 1,
  x: "0",
  y: "0",
  duration: 2,
  ease: "power1.inOut",
});

const tlScrollBar = gsap.timeline({
  scrollTrigger: {
    trigger: ".map-viewport",
    start: "top top",
    end: "+=5000",
    scrub: true,
  },
});

const tlScrollBar2 = gsap.timeline({
  scrollTrigger: {
    start: "animationsStart+=19000",
    end: "+=2400",
    scrub: true,
  },
});

tlScrollBar2.to(".map-scroll-container", {
  opacity: 0,
});

tlScrollBar
  .to(".map-scroll-container", { opacity: 1, ease: "none" }, 0)
  .addLabel("animationsStart", "+=5000")
  .add(tlScrollBar2);

gsap.to(".map-ysa", {
  x: 520,
  ease: "none",
  scrollTrigger: {
    start: "animationsStart+=5000",
    end: "+=15000",
    scrub: true,
  },
});

const baron = gsap.timeline({
  scrollTrigger: {
    start: "animationsStart+=5000",
    end: "+=15000",
    scrub: true,
  },
});

baron
  .from(".map-baron", { opacity: 0, duration: 1 })
  .to(".map-baron", { x: 100, opacity: 1, duration: 1, ease: "none" })
  .to(".map-baron", { x: 450, opacity: 1, duration: 1, ease: "none" });

// import { gsap } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".map-viewport",
//     start: "top top",
//     end: "+=20000",
//     scrub: 2,
//     pin: true,
//   },
// });

// const tl2 = gsap.timeline();
// tl2.to(".map-world", {
//   scale: 1.8,
//   duration: 4,
//   ease: "power2.inOut",
//   x: "330px",
//   y: "170px",
// });

// const tl3 = gsap.timeline({
//   onUpdate: () => {
//     gsap.set(".map-world", {
//       duration: 1,
//       x: -gsap.getProperty(".map-box", "x") + window.innerWidth / 2,
//       y: -gsap.getProperty(".map-box", "y") + window.innerHeight / 2,
//     });
//   },
// });
// tl3.to(".map-box", {
//   motionPath: {
//     path: ".map-path",
//     align: ".map-path",
//     alignOrigin: [0.5, 0.5],
//     start: 0,
//     end: 1,
//   },
//   transformOrigin: "50% 50%",
//   duration: 10,
//   ease: "power2.inOut",
// });

// const tl4 = gsap.timeline();
// tl4.to(".map-world", {
//   scale: 1,
//   x: "0px",
//   y: "0px",
//   duration: 4,
//   ease: "power1.inOut",
// });

// tl.add(tl2).add(tl3).add(tl4);
