
document.addEventListener("DOMContentLoaded", () => {
  /**
   * GSAP Documentation: https://gsap.com/docs/v3/
   * GSAP Plugin: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
   */
  gsap.registerPlugin(ScrollTrigger)

  // gsap.to(".photo", {
  //   scrollTrigger: {
  //     trigger: ".photo",

  //     start: "top top",
  //     end: "bottom center",
  //     scrub: true,
  //     markers: true
  //   },
  //   y: -50,
  //   opacity: 0,
  // });


  // gsap.to(".paragraph", {
  //   scrollTrigger: {
  //     trigger: ".paragraph",

  //     start: "top center",
  //     end: "top 300px",
  //     scrub: true,
  //     markers: true
  //   },
  //   y: -50,
  //   opacity: 1,
  // });

  // const paragraphs = document.querySelectorAll('.paragraph');

  // paragraphs.forEach((paragraph, index) => {
  //   gsap.from(paragraph, {
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: paragraph,
  //       start: "top 60%",
  //       end: "top 20%",
  //       scrub: true,
  //       markers: true, // Remove this in production
  //       onEnter: () => {
  //         gsap.to(paragraph, { opacity: 1, duration: 1 });
  //       },
  //       onLeave: () => {
  //         gsap.to(paragraph, { opacity: 0, duration: 1 });
  //       }
  //     }
  //   });
  // });

  // const cards = document.querySelectorAll('.card');

  // cards.forEach((card, index) => {
  //   gsap.from(card, {
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: card,
  //       start: "top 60%",
  //       end: "top 10%",
  //       scrub: true,
  //       markers: true, // Remove this in production
  //       onEnter: () => {
  //         gsap.to(card, { opacity: 1, duration: 1 });
  //       },
  //       onLeave: () => {
  //         gsap.to(card, { opacity: 0, duration: 1 });
  //       }
  //     }
  //   });
  // });


  // const photos = document.querySelectorAll('.photo');

  // photos.forEach((photo, index) => {
  //   gsap.from(photo, {
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: photo,
  //       start: "top 60%",
  //       end: "top 10%",
  //       scrub: true,
  //       markers: true, // Remove this in production
  //       onEnter: () => {
  //         gsap.to(photo, { opacity: 1, duration: 1 });
  //       },
  //       onLeave: () => {
  //         gsap.to(photo, { opacity: 0, duration: 1 });
  //       }
  //     }
  //   });
  // });


  /**
   * 
   * Next we are going to create what GSAP calls a "timeline" to control our animations.
   * This timeline has specific documentation. 
   * GSAP Timeline Documentation: (https://gsap.com/docs/v3/GSAP/Timeline/)
   * 
   * We can create our timeline with a set of options.
   * In this case these options relate to the scroll trigger plugin we are using. 
   * GSAP Plugin Documentation: (https://gsap.com/docs/v3/Plugins/ScrollTrigger/#advanced-example)
   * 
   */
  var timeline_options = {
    scrollTrigger: {
      trigger: ".section-1",
      // pinReparent: true,
      pin: true, // pin the "section" in the same spot while animating
      start: "0px", // this controls starting the animation when the top of container is at the top of the screen
      end: "+=5000px", // this controls ending the animation when the bottom of container is at the bottom of the screen
      scrub: 0, // this controls animation timing relative to scroll
      // scrub: 1 // uncomment this value to delay animations
    },
  }
  var timeline = gsap.timeline(timeline_options);

  var timeline2_options = {
    scrollTrigger: {
      trigger: ".section-2",
      pin: true, // pin the "section" in the same spot while animating
      start: "top top", // start from where the first animation ends
      end: "+=5000px",
      scrub: 0,
      duration: 3
    },
  }
  var timeline2 = gsap.timeline(timeline2_options);

  var timeline3_options = {
    scrollTrigger: {
      trigger: ".section-3",
      pin: true, 
      start: "top top", 
      end: "+=5000px",
      scrub: 0,
      duration: 3
    },
  }
  var timeline3 = gsap.timeline(timeline3_options);

  var timeline4_options = {
    scrollTrigger: {
      trigger: ".section-4",
      pin: true, 
      start: "top top", 
      end: "+=5000px",
      scrub: 0,
      duration: 3
    },
  }
  var timeline4 = gsap.timeline(timeline4_options);


  timeline
    .from(".section-1 .time-stamp", {
      opacity: 0,
      duration: 0.5,
    }, ">")
    .from(".section-1 .message", {
      opacity: 0,
      duration: 0.5,
      top: "10vh",
      stagger: 0.3,
    }, ">")
    .to(".section-1 .time-stamp", {
      opacity: 0,
      duration: 0.3,
    })
    .to(".section-1 .message", {
      opacity: 0,
      duration: 0.3,
      top: "-6vh",
      stagger: 0,
    }, "<")


  timeline2
    .to(".section-2", {
      visibility: "visible",
      duration: 0.01,
    }, "+=5%")
    .from(".section-2 .time-stamp", {
      opacity: 0,
      duration: 0.5,
    }, ">")
    .from(".section-2 .message", {
      opacity: 0,
      duration: 0.5,
      top: "10vh",
      stagger: 0.3,
    }, ">")
    .to(".section-2 .time-stamp", {
      opacity: 0,
      duration: 0.3,
    }, "+=10%")
    .to(".section-2 .message", {
      opacity: 0,
      duration: 0.3,
      top: "-6vh",
      stagger: 0,
    }, "<")

    timeline3
    .to(".section-3", {
      visibility: "visible",
      duration: 0.01,
    }, "+=5%")
    .from(".section-3 .time-stamp", {
      opacity: 0,
      duration: 0.5,
    }, ">")
    .from(".section-3 .message", {
      opacity: 0,
      duration: 0.5,
      top: "10vh",
      stagger: 0.3,
    }, ">")
    .to(".section-3 .time-stamp", {
      opacity: 0,
      duration: 0.3,
    }, "+=10%")
    .to(".section-3 .message", {
      opacity: 0,
      duration: 0.3,
      top: "-6vh",
      stagger: 0,
    }, "<")

    timeline4
    .to(".section-4", {
      visibility: "visible",
      duration: 0.01,
    }, "+=5%")
    .from(".section-4 .time-stamp", {
      opacity: 0,
      duration: 0.5,
    }, ">")
    .from(".section-4 .message", {
      opacity: 0,
      duration: 0.5,
      top: "10vh",
      stagger: 0.3,
    }, ">")
    .to(".section-4 .time-stamp", {
      opacity: 0,
      duration: 0.3,
    }, "+=10%")
    .to(".section-4 .message", {
      opacity: 0,
      duration: 0.3,
      top: "-6vh",
      stagger: 0,
    }, "<")




})