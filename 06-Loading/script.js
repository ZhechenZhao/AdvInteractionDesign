document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');

    // Define URLs corresponding to each circle (you can replace these with actual URLs)
    const circleUrls = [
        'page1.html',   // URL for circle1
        'page2.html',   // URL for circle2
        'page3.html',   // URL for circle3
        'page4.html',   // URL for circle4
        'page5.html',   // URL for circle5
        'page6.html',   // URL for circle6
        'page7.html',   // URL for circle7
        'page8.html',   // URL for circle8
        'page9.html',   // URL for circle9
        'page10.html',  // URL for circle10
        'page11.html',  // URL for circle11
        'page12.html'   // URL for circle12
    ];

    // Function to perform staggered scaling animation on circles
    function staggeredScaleAnimation() {
        circles.forEach((circle, index) => {
            // Apply scaling animation with a delay based on the circle's index
            setTimeout(() => {
                circle.style.opacity = 0.2;

                // Reset the scale after a short delay
                setTimeout(() => {
                    circle.style.opacity = 1;
                }, 150); // Adjust the delay between scale in/out
            }, index * 100); // Adjust the stagger delay (in milliseconds)
        });
    }

    // Trigger the staggered scaling animation when the page loads
    staggeredScaleAnimation();

    // Function to handle circle click
    function handleCircleClick(index) {
        const url = circleUrls[index];
        if (url) {
            // Navigate to the corresponding URL
            window.location.href = url;
        }
    }

    // Function to hide/show number and series-title elements based on hover state
    function toggleCircleContent(circle, isHovered) {
        const number = circle.querySelector('.number');
        const seriesTitle = circle.querySelector('.series-title');

        if (isHovered) {
            number.style.opacity = 0;
            seriesTitle.style.opacity = 1;
        } else {
            number.style.opacity = 1;
            seriesTitle.style.opacity = 0;
        }
    }

    // Function to hide all circles except the specified circle
    function hideOtherCircles(excludeCircle) {
        circles.forEach(c => {
            if (c !== excludeCircle) {
                c.style.opacity = 0;
                c.style.scale = 0.8;
            }
        });
    }

    // Function to restore visibility of all circles
    function showAllCircles() {
        circles.forEach(c => {
            c.style.opacity = 1;
            c.style.scale = 1;
        });
    }

    // Add hover event listener to each circle
    circles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            // Handle click on the circle (navigate to corresponding URL)
            handleCircleClick(index);
        });

        circle.addEventListener('mouseenter', () => {
            // Show series-title and hide number on hover
            toggleCircleContent(circle, true);
            // Hide all circles except the hovered one
            hideOtherCircles(circle);
        });

        circle.addEventListener('mouseleave', () => {
            // Delay restoring visibility of all circles
            setTimeout(() => {
                showAllCircles();
                // Show number and hide series-title on hover out
                toggleCircleContent(circle, false);
            }, 300); // Adjust delay (in milliseconds) as needed
        });
    });
});

