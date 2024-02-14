const letters = document.querySelectorAll('.letter');

// Loop through each letter
letters.forEach(letter => {
    // Get overpasses inside the current letter
    const overpass1 = letter.querySelectorAll('.overpass1');
    const overpass2 = letter.querySelectorAll('.overpass2');

    // Loop through each overpass to set transition delay
    // overpasses.forEach((overpass, index) => {
    //     const squares = overpass.querySelectorAll('.small');
    //     squares.forEach((square, squareIndex) => {
    //         square.style.transitionDelay = `${squareIndex * 0.01}s`;
    //     });
    // });

    letter.addEventListener('mouseenter', () => {
        overpass1.forEach((overpass) => {
            var elements = overpass.querySelectorAll('.el');
            anime({
                targets: elements,
                backgroundColor: [
                    { value: '#32a5ed', duration: 50 },
                    { value: '#32edea', duration: 50 }
                ],
                easing: 'easeInOutSine',
                delay: anime.stagger(50)
            });
        });
        overpass2.forEach((overpass) => {
            var elements = overpass.querySelectorAll('.el');
            anime({
                targets: elements,
                backgroundColor: [
                    { value: '#FF8533', duration: 50 },
                    { value: '#FFC300', duration: 50 }
                ],
                easing: 'easeInOutSine',
                delay: anime.stagger(50)
            });
        });
    });

    letter.addEventListener('mouseleave', () => {
        overpass1.forEach((overpass) => {
            var elements = overpass.querySelectorAll('.el');
            anime({
                targets: elements,
                backgroundColor: 'rgba(230,0,150,0.2)',
                easing: 'easeInOutSine',
                delay: anime.stagger(50)
            });
        });
        overpass2.forEach((overpass) => {
            var elements = overpass.querySelectorAll('.el');
            anime({
                targets: elements,
                backgroundColor: 'rgba(230,0,150,0.2)',
                easing: 'easeInOutSine',
                delay: anime.stagger(50)
            });
        });
    });
});

const refreshButton = document.getElementById('refreshButton');

// Add click event listener to the refresh button
refreshButton.addEventListener('click', () => {
    // Reload the page
    location.reload();
});

const specimenButton = document.getElementById('specimenButton');

// Add click event listener to autoscroll
specimenButton.addEventListener('click', () => {
    window.scrollTo({
        top: 1000,
        behavior: 'smooth' // Smooth scroll behavior
      });
});