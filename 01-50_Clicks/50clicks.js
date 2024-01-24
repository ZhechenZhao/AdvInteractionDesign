// https://randomcolor.lllllllllllllllll.com/

document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('grid-container');

    const gridItems = Array.from(document.querySelectorAll('.grid-item'));

    gridItems.forEach(gridItem => {
        gridItem.style.backgroundColor = randomColor({
            luminosity: 'light',
            hue: 'green',
            alpha: 0.3,
            format: 'hsla'
        });
        gridItem.style.borderColor = randomColor({
            luminosity: 'bright',
            hue: 'green',
            alpha: 0.2,
            format: 'hsla'
        });
        gridItem.addEventListener('click', function () {
            toggleGridItem(gridItem);
        });
    });
});


function toggleGridItem(gridItem) {
    // Check if the block is already in the clicked state
    const isClicked = gridItem.classList.contains('clicked');

    // Toggle between the original and clicked states
    if (isClicked) {
        // Reset to the original state
        gridItem.classList.remove('clicked');
        gridItem.style.transform = '';
        gridItem.style.borderRadius = '';

        // Get the block number from the data attribute
        const blockNumber = parseInt(gridItem.getAttribute('data-block-number'));

        // Customize the content and behavior based on blockNumber
        switch (blockNumber) {
            case 8:
                anime({
                    targets: gridItem,
                    scale: [
                        { value: .1, easing: 'easeOutSine', duration: 200 },
                        { value: 1, easing: 'easeInOutQuad', duration: 300 }
                    ],
                    delay: anime.stagger(100, { grid: [1, 1], from: 'center' })
                });
                break;
            case 9:
                anime({
                    targets: gridItem,
                    scale: [
                        { value: 1.4, easing: 'easeOutSine', duration: 100 },
                        { value: 1, easing: 'easeInOutQuad', duration: 200 }
                    ]
                });
                break;
            case 10:
                anime({
                    targets: gridItem,
                    scale: [
                        { value: 0.6, easing: 'easeOutSine', duration: 100 },
                        { value: 1, easing: 'easeInOutQuad', duration: 200 }
                    ]
                });
                break;
            case 11:
                anime({
                    targets: gridItem,
                    scale: [
                        { value: 0.3, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 100 },
                        { value: 0.1, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 100 },
                        { value: 0, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 100 }
                    ]
                });
                break;
            case 12:
                anime({
                    targets: gridItem,
                    scale: [
                        { value: 0, easing: 'easeOutSine', duration: 50 },
                        { value: 4, easing: 'easeInOutQuad', duration: 100 },
                        { value: 1, easing: 'easeOutSine', duration: 50 }
                    ]
                });
                break;
            case 13:
                anime({
                    targets: gridItem,
                    scale: [
                        { value: 4, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: -1, easing: 'easeOutSine', duration: 50 }
                    ]
                });
                break;
            case 14:
                anime({
                    targets: gridItem,
                    rotate: [
                        { value: -100, easing: 'easeOutSine', duration: 50 },
                        { value: 100, easing: 'easeInOutQuad', duration: 50 },
                        { value: 0, easing: 'easeOutSine', duration: 50 }
                    ]
                });
                break;
            case 15:
                anime({
                    targets: gridItem,
                    rotate: [
                        { value: -180, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: -180, easing: 'easeOutSine', duration: 50 },
                        { value: -180, easing: 'easeInOutQuad', duration: 50 }
                    ]
                });
                break;
            case 16:
                anime({
                    targets: gridItem,
                    rotate: [
                        { value: -180, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: -180, easing: 'easeOutSine', duration: 50 },
                        { value: -180, easing: 'easeInOutQuad', duration: 50 }
                    ],
                    scale: [
                        { value: 4, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: -1, easing: 'easeOutSine', duration: 50 }
                    ]
                });
                break;
            case 17:
                anime({
                    targets: gridItem,
                    rotate: [
                        { value: -180, easing: 'easeOutSine', duration: 50 },
                        { value: -180, easing: 'easeOutSine', duration: 150 },
                        { value: -180, easing: 'easeInOutQuad', duration: 200 }
                    ],
                    scale: [
                        { value: 0, easing: 'easeOutSine', duration: 50 },
                        { value: 2, easing: 'easeInOutQuad', duration: 100 },
                        { value: 0.5, easing: 'easeOutSine', duration: 150 }
                    ]
                });
                break;
            case 18:
                anime({
                    targets: gridItem,
                    rotateX: [
                        { value: -180, easing: 'easeOutSine', duration: 50 },
                        { value: -180, easing: 'easeOutSine', duration: 150 },
                        { value: -180, easing: 'easeInOutQuad', duration: 200 }
                    ],
                    scale: [
                        { value: 2, easing: 'easeOutSine', duration: 50 },
                        { value: 2, easing: 'easeInOutQuad', duration: 100 },
                        { value: 0.5, easing: 'easeOutSine', duration: 150 }
                    ]
                });
                break;
            case 19:
                anime({
                    targets: gridItem,
                    rotateY: [
                        { value: 0, easing: 'easeOutSine', duration: 50 },
                        { value: -180, easing: 'easeOutSine', duration: 500 },
                        { value: 0, easing: 'easeOutSine', duration: 50 }
                    ],
                    scale: [
                        { value: 1.3, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 100 }
                    ]
                });
                break;
            case 20:
                anime({
                    targets: gridItem,
                    rotate: [
                        { value: -30, easing: 'easeOutSine', duration: 300 }
                    ],
                    scale: [
                        { value: 1, easing: 'easeInOutQuad', duration: 100 },
                        { value: 2, easing: 'easeOutSine', duration: 100 },
                        { value: 1, easing: 'easeInOutQuad', duration: 100 }
                    ],
                    endDelay: 100,
                    direction: 'alternate'
                });
                break;
            case 21:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateX: -10,
                    easing: 'easeInOutSine',
                    delay: anime.stagger(100)
                });

                anime({
                    targets: elements,
                    translateX: -50,
                    easing: 'easeInOutSine',
                    delay: anime.stagger(100)
                });
                break;
            case 22:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateX: -250,
                    easing: 'easeInOutSine'
                });
                break;
            case 23:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    rotate: -180,
                    easing: 'easeInOutSine'
                });
                break;
            case 24:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 0,
                    easing: 'easeInOutSine'
                });
                break;
            case 25:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    backgroundColor: 'rgba(50,230,230,0.2)',
                    easing: 'easeInOutSine'
                });
                break;
            case 26:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    backgroundColor: 'rgba(50,230,230,0.2)',
                    easing: 'easeInOutSine',
                    delay: anime.stagger(100)
                });
                break;
            case 27:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateX: -48,
                    scale: [
                        { value: 1, easing: 'easeInOutQuad', duration: 50 },
                        { value: 1.2, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    backgroundColor: 'rgba(50,230,230,0.2)',
                    easing: 'spring(1, 100, 8, 10)',
                    delay: anime.stagger(100)
                });
                break;
            case 28:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateX: -48,
                    rotate: -180,
                    scale: [
                        { value: 1, easing: 'easeInOutQuad', duration: 50 },
                        { value: 0.5, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    backgroundColor: 'rgba(50,230,230,0.2)',
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 29:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateX: -40,
                    borderRadius: [
                        { value: 20, easing: 'easeInOutQuad', duration: 50 },
                        { value: 20, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    scale: [
                        { value: 1, easing: 'easeInOutQuad', duration: 50 },
                        { value: 1.2, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 30:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    scale: [
                        { value: 0.5, easing: 'easeInOutQuad', duration: 50 },
                        { value: 1.2, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 31:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateY: [
                        { value: -40, easing: 'easeInOutQuad', duration: 50 },
                        { value: -48, easing: 'easeOutSine', duration: 50 },
                        { value: -40, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 32:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: [
                        { value: 20, easing: 'easeInOutQuad', duration: 50 },
                        { value: 20, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    translateY: [
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: -10, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 33:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateY: [
                        { value: 0, easing: 'easeInOutQuad', duration: 150 },
                        { value: -20, easing: 'easeInOutQuad', duration: 150 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 },
                        { value: 20, easing: 'easeInOutQuad', duration: 150 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'linear',
                    delay: anime.stagger(150),
                    loop: 2
                });
                break;
            case 34:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateY: [
                        { value: 0, duration: 150 },
                        { value: -40, duration: 150 },
                        { value: 0, duration: 150 },
                        { value: 40, duration: 150 },
                        { value: 0, duration: 150 }
                    ],
                    easing: 'steps(3)',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 35:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    translateY: [
                        { value: 0, duration: 150 },
                        { value: -40, duration: 150 },
                        { value: 0, duration: 150 },
                        { value: 40, duration: 150 },
                        { value: 0, duration: 150 }
                    ],
                    backgroundColor: [
                        { value: '#FF5733', duration: 150 },
                        { value: '#FFC300', duration: 150 },
                        { value: '#FF5733', duration: 150 },
                        { value: '#FFC300', duration: 150 },
                        { value: '#FF5733', duration: 150 }
                    ],
                    easing: 'easeOutInBounce',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 36:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    rotateX: [
                        { value: 0, duration: 150 },
                        { value: 180, duration: 150 }
                    ],
                    scale: [
                        { value: 1.2, duration: 150 },
                        { value: 1, duration: 150 }
                    ],
                    backgroundColor: [
                        { value: '#FF5733', duration: 150 },
                        { value: '#FFC300', duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 37:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    rotateY: [
                        { value: 0, duration: 150 },
                        { value: 180, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 38:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    scale: [
                        { value: 0.5, duration: 150 },
                        { value: 1, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(50),
                    loop: 1
                });
                break;
            case 39:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    scale: [
                        { value: 0.5, duration: 150 },
                        { value: 1, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(50, { from: 'center' }),
                    loop: 1
                });
                break;
            case 40:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 0,
                    translateY: [
                        { value: -48, duration: 150 },
                        { value: -40, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(50, { from: 'center' }),
                    loop: 1
                });
                break;
            case 41:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateY: [
                        { value: -40, easing: 'easeInOutQuad', duration: 50 },
                        { value: -48, easing: 'easeOutSine', duration: 50 },
                        { value: -40, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 42:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: [
                        { value: 20, easing: 'easeInOutQuad', duration: 50 },
                        { value: 20, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    translateY: [
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: -10, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 43:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateY: [
                        { value: 0, easing: 'easeInOutQuad', duration: 150 },
                        { value: -20, easing: 'easeInOutQuad', duration: 150 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 },
                        { value: 20, easing: 'easeInOutQuad', duration: 150 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'linear',
                    delay: anime.stagger(150),
                    loop: 2
                });
                break;
            case 44:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateY: [
                        { value: 0, duration: 150 },
                        { value: -40, duration: 150 },
                        { value: 0, duration: 150 },
                        { value: 40, duration: 150 },
                        { value: 0, duration: 150 }
                    ],
                    easing: 'steps(3)',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 45:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    translateY: [
                        { value: 0, duration: 150 },
                        { value: -40, duration: 150 },
                        { value: 0, duration: 150 },
                        { value: 40, duration: 150 },
                        { value: 0, duration: 150 }
                    ],
                    backgroundColor: [
                        { value: '#FF5733', duration: 150 },
                        { value: '#FFC300', duration: 150 },
                        { value: '#FF5733', duration: 150 },
                        { value: '#FFC300', duration: 150 },
                        { value: '#FF5733', duration: 150 }
                    ],
                    easing: 'easeOutInBounce',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 46:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    rotateX: [
                        { value: 0, duration: 150 },
                        { value: 180, duration: 150 }
                    ],
                    scale: [
                        { value: 1.2, duration: 150 },
                        { value: 1, duration: 150 }
                    ],
                    backgroundColor: [
                        { value: '#FF5733', duration: 150 },
                        { value: '#FFC300', duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 47:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    rotateY: [
                        { value: 0, duration: 150 },
                        { value: 180, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 48:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    scale: [
                        { value: 0.5, duration: 150 },
                        { value: 1, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(50),
                    loop: 1
                });
                break;
            case 49:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    rotate: [
                        { value: 0, duration: 150 },
                        { value: 720, duration: 150 }
                    ],
                    translateY: [
                        { value: -20, duration: 150 },
                        { value: 0, duration: 150 }
                    ],
                    scale: [
                        { value: 0.5, duration: 150 },
                        { value: 1, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(50, { from: 'center' }),
                    loop: 1
                });
                break;
            case 50:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 0,
                    rotate: [
                        { value: -180, duration: 150 },
                        { value: 180, duration: 150 }
                    ],
                    translateY: [
                        { value: -48, duration: 150 },
                        { value: -40, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(50, { from: 'center' }),
                    loop: 1
                });
                break;
        }
    } else {
        // Apply the clicked state
        gridItem.classList.add('clicked');

        // Get the block number from the data attribute
        const blockNumber = parseInt(gridItem.getAttribute('data-block-number'));

        // Customize the content and behavior based on blockNumber
        switch (blockNumber) {
            case 1:
                gridItem.style.transform = 'rotate(90deg)';
                break;
            case 2:
                gridItem.style.borderRadius = '50%';
                break;
            case 3:
                anime({
                    targets: gridItem,
                    rotate: '360deg',
                    borderRadius: ['0%', '50%'],
                    easing: 'easeInOutQuad',
                    duration: 200
                });
                break;
            case 4:
                anime({
                    targets: gridItem,
                    scale: 1.5,
                    rotate: '1turn',
                    easing: 'easeInOutExpo',
                    duration: 200
                });
                break;
            case 5:
                anime({
                    targets: gridItem,
                    scale: 0.5,
                    rotate: '-1turn',
                    easing: 'easeInOutExpo',
                    duration: 200
                });
                break;
            case 6:
                anime({
                    targets: gridItem,
                    skew: '30deg',
                    easing: 'easeInOutExpo',
                    duration: 200
                });
                break;
            case 7:
                anime({
                    targets: '.staggering .el',
                    scale: [
                        { value: .1, easing: 'easeOutSine', duration: 500 },
                        { value: 1, easing: 'easeInOutQuad', duration: 1200 }
                    ],
                    delay: anime.stagger(200, { grid: [5, 5], from: 'center' })
                });
                break;
            case 8:
                anime({
                    targets: gridItem,
                    scale: [
                        { value: .1, easing: 'easeOutSine', duration: 200 },
                        { value: 1, easing: 'easeInOutQuad', duration: 300 }
                    ],
                    delay: anime.stagger(100, { grid: [1, 1], from: 'center' })
                });
                break;
            case 9:
                anime({
                    targets: gridItem,
                    scale: [
                        { value: 1.4, easing: 'easeOutSine', duration: 100 },
                        { value: 1, easing: 'easeInOutQuad', duration: 200 }
                    ]
                });
                break;
            case 10:
                anime({
                    targets: gridItem,
                    scale: [
                        { value: 0.6, easing: 'easeOutSine', duration: 100 },
                        { value: 1, easing: 'easeInOutQuad', duration: 200 }
                    ]
                });
                break;
            case 11:
                anime({
                    targets: gridItem,
                    scale: [
                        { value: 0.3, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 100 },
                        { value: 0.1, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 100 },
                        { value: 0, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 100 }
                    ]
                });
                break;
            case 12:
                anime({
                    targets: gridItem,
                    scale: [
                        { value: 0, easing: 'easeOutSine', duration: 50 },
                        { value: 4, easing: 'easeInOutQuad', duration: 100 },
                        { value: 1, easing: 'easeOutSine', duration: 50 }
                    ]
                });
                break;
            case 13:
                anime({
                    targets: gridItem,
                    scale: [
                        { value: 4, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: -1, easing: 'easeOutSine', duration: 50 }
                    ]
                });
                break;
            case 14:
                anime({
                    targets: gridItem,
                    rotate: [
                        { value: 100, easing: 'easeOutSine', duration: 50 },
                        { value: -100, easing: 'easeInOutQuad', duration: 50 },
                        { value: 0, easing: 'easeOutSine', duration: 50 }
                    ]
                });
                break;
            case 15:
                anime({
                    targets: gridItem,
                    rotate: [
                        { value: 180, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: 180, easing: 'easeOutSine', duration: 50 },
                        { value: 180, easing: 'easeInOutQuad', duration: 50 }
                    ]
                });
                break;
            case 16:
                anime({
                    targets: gridItem,
                    rotate: [
                        { value: 180, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: 180, easing: 'easeOutSine', duration: 50 },
                        { value: 180, easing: 'easeInOutQuad', duration: 50 }
                    ],
                    scale: [
                        { value: 4, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: -1, easing: 'easeOutSine', duration: 50 }
                    ]
                });
                break;
            case 17:
                anime({
                    targets: gridItem,
                    rotate: [
                        { value: 180, easing: 'easeOutSine', duration: 50 },
                        { value: 180, easing: 'easeOutSine', duration: 150 },
                        { value: 180, easing: 'easeInOutQuad', duration: 200 }
                    ],
                    scale: [
                        { value: 2, easing: 'easeOutSine', duration: 50 },
                        { value: 2, easing: 'easeInOutQuad', duration: 100 },
                        { value: 0.5, easing: 'easeOutSine', duration: 150 }
                    ]
                });
                break;
            case 18:
                anime({
                    targets: gridItem,
                    rotateX: [
                        { value: 180, easing: 'easeOutSine', duration: 50 },
                        { value: 180, easing: 'easeOutSine', duration: 150 },
                        { value: 180, easing: 'easeInOutQuad', duration: 200 }
                    ],
                    scale: [
                        { value: 2, easing: 'easeOutSine', duration: 50 },
                        { value: 2, easing: 'easeInOutQuad', duration: 100 },
                        { value: 0.5, easing: 'easeOutSine', duration: 150 }
                    ]
                });
                break;
            case 19:
                anime({
                    targets: gridItem,
                    rotateY: [
                        { value: 0, easing: 'easeOutSine', duration: 50 },
                        { value: 180, easing: 'easeOutSine', duration: 500 },
                        { value: 0, easing: 'easeOutSine', duration: 50 }
                    ],
                    scale: [
                        { value: 1.3, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 100 }
                    ]
                });
                break;
            case 20:

                anime({
                    targets: gridItem,
                    rotate: [
                        { value: 30, easing: 'easeOutSine', duration: 300 }
                    ],
                    scale: [
                        { value: 1, easing: 'easeInOutQuad', duration: 100 },
                        { value: 2, easing: 'easeOutSine', duration: 100 },
                        { value: 1, easing: 'easeInOutQuad', duration: 100 }
                    ],
                    endDelay: 100,
                    direction: 'alternate'
                });
                break;
            case 21:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateX: 10,
                    easing: 'easeInOutSine',
                    delay: anime.stagger(100)
                });

                anime({
                    targets: elements,
                    translateX: 50,
                    easing: 'easeInOutSine',
                    delay: anime.stagger(100)
                });
                break;
            case 22:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateX: 250,
                    easing: 'easeInOutSine'
                });
                break;
            case 23:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    rotate: 180,
                    easing: 'easeInOutSine'
                });
                break;
            case 24:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    easing: 'easeInOutSine'
                });
                break;
            case 25:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    backgroundColor: '#FFF',
                    easing: 'easeInOutSine'
                });
                break;
            case 26:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    backgroundColor: 'rgba(230,0,150,0.2)',
                    easing: 'easeInOutSine',
                    delay: anime.stagger(100)
                });
                break;
            case 27:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateX: 48,
                    scale: [
                        { value: 1, easing: 'easeInOutQuad', duration: 50 },
                        { value: 1.2, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    backgroundColor: 'rgba(50,200,150,0.2)',
                    easing: 'spring(1, 100, 8, 10)',
                    delay: anime.stagger(100)
                });
                break;
            case 28:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateX: 48,
                    rotate: 180,
                    scale: [
                        { value: 1, easing: 'easeInOutQuad', duration: 50 },
                        { value: 0.5, easing: 'easeOutSine', duration: 50 },
                        { value: 1, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    backgroundColor: 'rgba(150,200,20,0.2)',
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 29:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateX: 40,
                    borderRadius: [
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: 0, easing: 'easeOutSine', duration: 50 },
                        { value: 20, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    scale: [
                        { value: 1, easing: 'easeInOutQuad', duration: 50 },
                        { value: 0.2, easing: 'easeOutSine', duration: 50 },
                        { value: 0.5, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 30:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    scale: [
                        { value: 1, easing: 'easeInOutQuad', duration: 50 },
                        { value: 0.2, easing: 'easeOutSine', duration: 50 },
                        { value: 0.5, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 31:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateY: [
                        { value: 40, easing: 'easeInOutQuad', duration: 50 },
                        { value: 48, easing: 'easeOutSine', duration: 50 },
                        { value: 40, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 32:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: [
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: 0, easing: 'easeOutSine', duration: 50 },
                        { value: 20, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    translateY: [
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: -10, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 33:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateY: [
                        { value: 0, easing: 'easeInOutQuad', duration: 150 },
                        { value: -20, easing: 'easeInOutQuad', duration: 150 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 },
                        { value: 20, easing: 'easeInOutQuad', duration: 150 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'linear',
                    delay: anime.stagger(200),
                    loop: 2
                });
                break;
            case 34:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateY: [
                        { value: 0, duration: 150 },
                        { value: -40, duration: 150 },
                        { value: 0, duration: 150 },
                        { value: 40, duration: 150 },
                        { value: 0, duration: 150 }
                    ],
                    easing: 'steps(3)',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 35:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    translateY: [
                        { value: 0, duration: 150 },
                        { value: -40, duration: 150 },
                        { value: 0, duration: 150 },
                        { value: 40, duration: 150 },
                        { value: 0, duration: 150 }
                    ],
                    backgroundColor: [
                        { value: '#FF5733', duration: 150 },
                        { value: '#FFC300', duration: 150 },
                        { value: '#FF5733', duration: 150 },
                        { value: '#FFC300', duration: 150 },
                        { value: '#FF5733', duration: 150 }
                    ],
                    easing: 'easeOutInBounce',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 36:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    rotateX: [
                        { value: 0, duration: 150 },
                        { value: -180, duration: 150 }
                    ],
                    scale: [
                        { value: 0.2, duration: 150 },
                        { value: 0.5, duration: 150 }
                    ],
                    backgroundColor: [
                        { value: '#FF5733', duration: 150 },
                        { value: '#FFC300', duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 37:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    rotateY: [
                        { value: 0, duration: 150 },
                        { value: -180, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 38:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    scale: [
                        { value: 2.5, duration: 150 },
                        { value: 2, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(50),
                    loop: 1
                });
                break;
            case 39:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    scale: [
                        { value: 2.5, duration: 150 },
                        { value: 2, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(50, { from: 'center' }),
                    loop: 1
                });
                break;
            case 40:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 0,
                    translateY: [
                        { value: 48, duration: 150 },
                        { value: 40, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(50, { from: 'center' }),
                    loop: 1
                });
                break;
            case 41:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateY: [
                        { value: 40, easing: 'easeInOutQuad', duration: 50 },
                        { value: 48, easing: 'easeOutSine', duration: 50 },
                        { value: 40, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 42:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: [
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: 0, easing: 'easeOutSine', duration: 50 },
                        { value: 20, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    translateY: [
                        { value: 0, easing: 'easeInOutQuad', duration: 50 },
                        { value: -10, easing: 'easeOutSine', duration: 50 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'easeOutElastic(1, .6)',
                    delay: anime.stagger(100)
                });
                break;
            case 43:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateY: [
                        { value: 0, easing: 'easeInOutQuad', duration: 150 },
                        { value: -20, easing: 'easeInOutQuad', duration: 150 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 },
                        { value: 20, easing: 'easeInOutQuad', duration: 150 },
                        { value: 0, easing: 'easeInOutQuad', duration: 150 }
                    ],
                    easing: 'linear',
                    delay: anime.stagger(200),
                    loop: 2
                });
                break;
            case 44:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    translateY: [
                        { value: 0, duration: 150 },
                        { value: -40, duration: 150 },
                        { value: 0, duration: 150 },
                        { value: 40, duration: 150 },
                        { value: 0, duration: 150 }
                    ],
                    easing: 'steps(3)',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 45:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    translateY: [
                        { value: 0, duration: 150 },
                        { value: -40, duration: 150 },
                        { value: 0, duration: 150 },
                        { value: 40, duration: 150 },
                        { value: 0, duration: 150 }
                    ],
                    backgroundColor: [
                        { value: '#FF5733', duration: 150 },
                        { value: '#FFC300', duration: 150 },
                        { value: '#FF5733', duration: 150 },
                        { value: '#FFC300', duration: 150 },
                        { value: '#FF5733', duration: 150 }
                    ],
                    easing: 'easeOutInBounce',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 46:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    rotateX: [
                        { value: 0, duration: 150 },
                        { value: -180, duration: 150 }
                    ],
                    scale: [
                        { value: 0.2, duration: 150 },
                        { value: 0.5, duration: 150 }
                    ],
                    backgroundColor: [
                        { value: '#FF5733', duration: 150 },
                        { value: '#FFC300', duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 47:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    rotateY: [
                        { value: 0, duration: 150 },
                        { value: -180, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(150),
                    loop: 1
                });
                break;
            case 48:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    scale: [
                        { value: 2.5, duration: 150 },
                        { value: 2, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(50),
                    loop: 1
                });
                break;
            case 49:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 20,
                    rotate: [
                        { value: 0, duration: 150 },
                        { value: -720, duration: 150 }
                    ],
                    translateY: [
                        { value: 20, duration: 150 },
                        { value: 0, duration: 150 }
                    ],
                    scale: [
                        { value: 2.5, duration: 150 },
                        { value: 2, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(50, { from: 'center' }),
                    loop: 1
                });
                break;
            case 50:
                var elements = gridItem.querySelectorAll('.el');
                anime({
                    targets: elements,
                    borderRadius: 0,
                    rotate: [
                        { value: 180, duration: 150 },
                        { value: -180, duration: 150 }
                    ],
                    translateY: [
                        { value: 48, duration: 150 },
                        { value: 40, duration: 150 }
                    ],
                    easing: 'spring(1, 80, 10, 0)',
                    delay: anime.stagger(50, { from: 'center' }),
                    loop: 1
                });
                break;
            // Add more cases for other blockNumbers and corresponding behaviors
            default:
                // Default behavior if blockNumber doesn't match any case
                // gridItem.textContent = `Block ${blockNumber}`;
                break;
        }
    }
}