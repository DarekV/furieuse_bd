import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".nav-top", {
    scrollTrigger: {
      trigger: ".header-shadow",
      start: "top+=50",
      onEnter: () => gsap.to(".nav-top", { opacity: 1, duration: 0.3 }),
      onLeaveBack: () => gsap.to(".nav-top", { opacity: 0, duration: 0.3 }),
    },
  });

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

  const mapFirstButton = document.querySelector(".map-first-button");
  const mapSecondButton = document.querySelector(".map-second-button");
  const mapThirdButton = document.querySelector(".map-third-button");

  const mapContentFirst = document.querySelector(".map-content-first");
  const mapContentSecond = document.querySelector(".map-content-second");
  const mapContentThird = document.querySelector(".map-content-third");

  const body = document.body;

  const toggleContent = (content) => {
    const isVisible = content.style.opacity === "1";
    content.style.opacity = isVisible ? "0" : "1";
    content.style.pointerEvents = isVisible ? "none" : "auto";
    content.style.cursor = isVisible ? "auto" : "pointer";
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

  const topValue = window.innerWidth > 1440 ? -600 : -300;

  gsap.to(".header-img-1", {
    scrollTrigger: {
      trigger: ".header-img-wrapper",
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
    top: -200,
    duration: 1,
  });

  gsap.to(".header-img-2", {
    scrollTrigger: {
      trigger: ".header-img-wrapper",
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
    top: -200,
    duration: 1,
  });

  gsap.to(".header-img-6", {
    scrollTrigger: {
      trigger: ".header-img-wrapper",
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
    top: 300,
    duration: 1,
  });

  gsap.to(".header-img-3", {
    scrollTrigger: {
      trigger: ".header-img-wrapper",
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
    top: topValue,
    duration: 1,
  });

  gsap.to(".header-img-4", {
    scrollTrigger: {
      trigger: ".header-img-wrapper",
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
    top: topValue - 50,
    duration: 1,
  });

  gsap.to(".header-img-5", {
    scrollTrigger: {
      trigger: ".header-img-wrapper",
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
    top: topValue,
    duration: 1,
  });
});

window.addEventListener("load", () => {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  const loaderText = document.querySelector(".loader-text");
  const loaderImg = document.querySelector(".loader-img-sword");
  const loaderClick = document.querySelector(".loader-img-click");
  const body = document.body;
  loaderText.style.opacity = "0";
  loaderImg.style.animation = "spin-once 2s ease-in-out";
  loaderClick.style.opacity = "100";
  loaderWrapper.style.cursor = "pointer";
  loaderWrapper.addEventListener("click", () => {
    loaderWrapper.classList.add("closed");
    body.classList.remove("no-scroll");
  });
});
