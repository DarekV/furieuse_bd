// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".map",
//     start: "top top",
//     end: "+=5000",
//     scrub: 2,
//     pin: true,
//   },
// });

// tl.to(".map-background", {
//   scale: 2.5,
//   x: "700px",
//   y: "550px",
//   duration: 4,
//   ease: "power1.inOut",
// });

// tl.to(".map-background", {
//   scale: 2.5,
//   x: "600px",
//   y: "350px",
//   duration: 2,
// });

// tl.to(".map-background", {
//   scale: 2.5,
//   x: "-600px",
//   y: "750px",
//   duration: 4,
// });

// tl.to(".map-background", {
//   scale: 2.5,
//   x: "-1050px",
//   y: "-350px",
//   duration: 4,
// });

// tl.to(".map-background", {
//   scale: 2.5,
//   x: "-1000px",
//   y: "-750px",
//   duration: 2,
// });

// tl.to(".map-background", {
//   scale: 1,
//   x: "0",
//   y: "0",
//   duration: 2,
// });

// import { gsap } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

// const world = document.querySelector(".map-world");
// const box = document.querySelector(".map-box");

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".map-viewport",
//     start: "top top",
//     end: "+=5000",
//     scrub: true,
//     pin: true,
//     onUpdate: () => {
//       gsap.set(world, {
//         duration: 0.5,
//         // x: -gsap.getProperty(box, "x") + window.innerWidth / 2,
//         // y: -gsap.getProperty(box, "y") + window.innerHeight / 2,
//       });
//     },
//   },
// });

// tl.to(world, {
//   transform: "scale(1.25)",
//   duration: 2,
// });

// tl.to(box, {
//   motionPath: {
//     path: ".map-path",
//     align: ".map-path",
//     alignOrigin: [0.5, 0.5],
//     scale: 6,
//     start: 0,
//     end: 1,
//   },
//   //   transformOrigin: "50% 50%",
//   duration: 10,
// });

// window.onload = window.onresize = () => {
//   gsap.set(".map-viewport", {
//     left: window.innerWidth / 2,
//     top: window.innerHeight / 2,
//   });
// };

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".map-viewport",
    start: "top top",
    end: "+=20000",
    scrub: 2,
    pin: true,
  },
});

const tl2 = gsap.timeline();
tl2.to(".map-world", {
  scale: 1.8,
  duration: 4,
  ease: "power2.inOut",
  x: "330px",
  y: "170px",
});

const tl3 = gsap.timeline({
  onUpdate: () => {
    gsap.set(".map-world", {
      duration: 1,
      x: -gsap.getProperty(".map-box", "x") + window.innerWidth / 2,
      y: -gsap.getProperty(".map-box", "y") + window.innerHeight / 2,
    });
  },
});
tl3.to(".map-box", {
  motionPath: {
    path: ".map-path",
    align: ".map-path",
    alignOrigin: [0.5, 0.5],
    start: 0,
    end: 1,
  },
  transformOrigin: "50% 50%",
  duration: 10,
});

const tl4 = gsap.timeline();
tl4.to(".map-world", {
  scale: 1,
  x: "0px",
  y: "0px",
  duration: 4,
  ease: "power1.inOut",
});

tl.add(tl2).add(tl3).add(tl4);
