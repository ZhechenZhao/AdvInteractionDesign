
document.addEventListener("DOMContentLoaded", () => {
    /**
     * GSAP Documentation: https://gsap.com/docs/v3/
     * GSAP Plugin: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
     */
    gsap.registerPlugin(ScrollTrigger)

    // Get the total number of sections
    var totalSections = document.querySelectorAll('.time').length;

    // Array to store timeline options for each section
    var timelinesOptions = [];
    // Create timelines for each section
    var timelines = [];

    // Generate timeline options for each section
    for (var i = 1; i <= totalSections; i++) {
        var options = {
            scrollTrigger: {
                trigger: ".section-" + i,
                pin: true,
                start: "top top",
                end: "+=3000px",
                scrub: 0.5,
                markers: false,
                duration: 3
            }
        }
        timelinesOptions.push(options);
        // console.log(options);
    }



    timelinesOptions.forEach(function (options, index) {
        var timeline = gsap.timeline(options);

        timeline.to(".section-" + (index + 1), {
            visibility: "visible",
            duration: 0.1
        }, "+=30%")
            
            .from(".section-" + (index + 1) + " .time-stamp", {
                opacity: 0,
                duration: 5
            }, ">")
            .from(".section-" + (index + 1) + " .message", {
                opacity: 0,
                duration: 5,
                top: "10vh",
                stagger: 3
            }, ">")
            .to(".section-" + (index + 1) + " .time-stamp", {
                opacity: 0,
                duration: 3
            }, "+=30%")
            .to(".section-" + (index + 1) + " .message", {
                opacity: 0,
                duration: 3,
                top: "-6vh",
                stagger: 0
            }, "<")

            .to("#photo-" + (index + 1), {
                visibility: "visible",
                duration: 0.1
            }, "1")
            .from("#photo-" + (index + 1), {
                opacity: 0,
                duration: 1,
            }, "1")
            .from("#photo-" + (index + 1), {
                filter: "grayscale(100%)",
                duration: 5,
            }, "<")

            // .addLabel("endLabel" + (index + 1), 3);


        timelines.push(timeline);
        console.log("added index " + index);
    });

    timelines[13].to(".photos-container", {
        filter: "grayscale(50%)",
        scale: 1.05,
        duration: 0.5,
        repeat: 5,
    }, ">")

    timelines[14].to(".photos-container", {
        filter: "grayscale(50%)",
        scale: 1.2,
        duration: 0.5,
        repeat: 10,
    }, ">")
    timelines[14].to(".photos-container", {
        filter: "grayscale(100%)",
        scale: 1,
        duration: 0.5,
        repeat: 0,
    }, ">")

    timelines[15].to(".photos-container", {
        filter: "grayscale(100%)",
        opacity: 0,
        scale: 0,
        duration: 3,
        delay: 2,
        repeat: 0,
    }, "<")
    timelines[15].to(".photos-container", {
        visibility: "hidden",
        duration: 0.01,
    }, )


    timelines[16].to(".mosaic-photos-container", {
        visibility: "visible",
        duration: 0.01,
    }, )
    timelines[16].from(".mosaic-photos-container", {
        opacity: 0,
        duration: 1,
    }, )

    // Define offset for the blurb
    // const xoffset = window.innerWidth * 0.28; 
    // const yoffset = window.innerHeight * -0.05; 

    // Get the elements
    const hoverables = document.querySelectorAll('.hoverable');
    // console.log(hoverables);
    const blurbs = document.querySelectorAll('.blurb');
    // console.log(blurbs);

    hoverables.forEach(function (hoverable, index) {
    // Add event listener for hover
    hoverable.addEventListener('mouseover', () => {
        // Show blurb
        blurbs[index].style.display = 'block';
    });

    hoverable.addEventListener('mouseout', () => {
        // Hide blurb
        blurbs[index].style.display = 'none';
    });
    

    });





    var timeline_photo_options = {
        scrollTrigger: {
          trigger: ".photos-container",
          // pinReparent: true,
          pin: true, // pin the "section" in the same spot while animating
          start: "center center", // this controls starting the animation when the top of container is at the top of the screen
          end: "+=50000px", // this controls ending the animation when the bottom of container is at the bottom of the screen
          scrub: 1, 
        },
      }
      var timeline_photo = gsap.timeline(timeline_photo_options);

})