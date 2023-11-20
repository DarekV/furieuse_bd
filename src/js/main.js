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
  x: "55%",
  y: "50%",
  duration: 2,
  ease: "power1.inOut",
});

tl.to(".map-world", {
  scale: 2.5,
  x: "40%",
  y: "35%",
  duration: 1,
  ease: "power1.inOut",
});

tl.to(".map-world", {
  scale: 2.5,
  x: "-20%",
  y: "70%",
  duration: 2,
  ease: "power1.inOut",
});

tl.to(".map-world", {
  scale: 2.5,
  x: "-80%",
  y: "-20%",
  duration: 3,
  ease: "power1.inOut",
});

tl.to(".map-world", {
  scale: 2.5,
  x: "-50%",
  y: "-70%",
  duration: 1,
  ease: "power1.inOut",
});

tl.to(".map-world", {
  scale: 1,
  x: "0",
  y: "0",
  duration: 1,
  ease: "power1.inOut",
});

const tlScrollBarMain = gsap.timeline({
  scrollTrigger: {
    trigger: ".map-viewport",
    start: "top top",
    end: "+=20000",
    scrub: true,
  },
});

const tlScrollBar = gsap.timeline({
  scrollTrigger: {
    trigger: ".map-viewport",
    start: "top top",
    end: "+=5000",
    scrub: true,
  },
});

tlScrollBar.to(".map-scroll-container", {
  opacity: 1,
  ease: "none",
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

tlScrollBarMain
  .add(tlScrollBar)
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

gsap.to(".map-first-button", {
  opacity: 1,
  ease: "none",
  scrollTrigger: {
    start: "animationsStart+=5500",
    end: "+=500",
    scrub: true,
  },
});

gsap.to(".map-second-button", {
  opacity: 1,
  ease: "none",
  scrollTrigger: {
    start: "animationsStart+=10000",
    end: "+=500",
    scrub: true,
  },
});

gsap.to(".map-third-button", {
  opacity: 1,
  ease: "none",
  scrollTrigger: {
    start: "animationsStart+=18500",
    end: "+=500",
    scrub: true,
  },
});

const path = document.querySelector(".map-path");
const length = path.getTotalLength();
path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

gsap.to(".map-path", {
  strokeDashoffset: 0,
  ease: "none",
  scrollTrigger: {
    start: "animationsStart+=5000",
    end: "+=15000",
    scrub: true,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const mapFirstButton = document.querySelector(".map-first-button");
  const mapSecondButton = document.querySelector(".map-second-button"); // Ajouter ceci
  const mapThirdButton = document.querySelector(".map-third-button"); // Ajouter ceci

  const mapContentFirst = document.querySelector(".map-content-first");
  const mapContentSecond = document.querySelector(".map-content-second"); // Ajouter ceci
  const mapContentThird = document.querySelector(".map-content-third"); // Ajouter ceci

  const body = document.body;

  const toggleContent = (content) => {
    const isVisible = content.style.opacity === "1";
    content.style.opacity = isVisible ? "0" : "1";
    content.style.pointerEvents = isVisible ? "none" : "auto";
    body.classList.toggle("no-scroll", !isVisible);
  };

  mapFirstButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleContent(mapContentFirst);
  });

  mapSecondButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleContent(mapContentSecond);
  });

  mapThirdButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleContent(mapContentThird);
  });

  [mapContentFirst, mapContentSecond, mapContentThird].forEach((content) => {
    content.addEventListener("click", (e) => {
      if (e.target === content) {
        toggleContent(content);
      }
    });
  });
});

window.addEventListener("load", () => {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  const loaderText = document.querySelector(".loader-text");
  const loaderImg = document.querySelector(".loader-img-sword");
  const loaderClick = document.querySelector(".loader-img-click");
  loaderText.style.opacity = "0";
  loaderImg.style.animation = "spin-once 2s ease-in-out";
  loaderClick.style.opacity = "100";
  loaderWrapper.style.cursor = "pointer";
  loaderWrapper.addEventListener("click", () => {
    loaderWrapper.classList.add("closed");
  });
});

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
