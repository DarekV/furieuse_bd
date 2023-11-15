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

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const mapBackground = document.querySelector(".map-background");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".map",
    start: "top top",
    end: "+=5000",
    scrub: true,
    pin: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const motionPath = MotionPathPlugin.getPositionOnPath(
        "#map-path",
        progress
      );

      // Centrer le tracé sur l'écran
      gsap.set(mapBackground, {
        xPercent: -50 + motionPath.x * -1,
        yPercent: -50 + motionPath.y * -1,
      });
    },
  },
});

tl.to(".map-background", {
  scale: 2.5,
  duration: 4,
  ease: "power1.inOut",
});

tl.to(".map-background", {
  duration: 10,
  ease: "none",
  motionPath: {
    path: "#map-path",
    alignOrigin: [0.5, 0.5],
    autoRotate: false,
  },
});

tl.to(".map-background", {
  scale: 1,
  duration: 4,
  ease: "power1.inOut",
});
