document.addEventListener('DOMContentLoaded', function() {

    function setupBackButton() {
        const backButton = document.getElementById('backButton');

        if (backButton) {
            // Add click event listener to the back button
            backButton.addEventListener('click', function() {
                // Navigate to the home page (replace 'home.html' with your home page URL)
                window.location.href = 'index.html';
            });
        }
    }

    // Call the setupBackButton function after the DOM is fully loaded
    setupBackButton();


    function setupNextSeriesButton() {
        const backButton = document.getElementById('nextSeriesButton');
        if (backButton) {
            backButton.addEventListener('click', function() {
                window.location.href = 'page3.html';
            });
        }
    }
    setupNextSeriesButton();

    function setupPreviousSeriesButton() {
        const backButton = document.getElementById('previousSeriesButton');
        if (backButton) {
            backButton.addEventListener('click', function() {
                window.location.href = 'page1.html';
            });
        }
    }
    setupPreviousSeriesButton();




    // Function to handle the painting hover event
    function handlePaintingHover(paintingContainer) {

        const painting = paintingContainer.querySelector('.painting');
        const paintingInfo = paintingContainer.querySelector('.painting-info');
        const descriptionContainer = document.querySelector('.description-container');

        descriptionContainer.style.opacity = 0;
        paintingInfo.style.display = 'block';
    
        // Hide all other painting containers
        const allPaintingContainers = document.querySelectorAll('.painting-container');
        allPaintingContainers.forEach(container => {
            if (container !== paintingContainer) {
                container.style.display = 'none';
            }
        });
    
        // Scale up the hovered painting container
        paintingContainer.style.width = '100%';
    }

    // Function to reset painting styles on hover out
    function resetPaintingStyles() {
        const allPaintingContainers = document.querySelectorAll('.painting-container');
        const descriptionContainer = document.querySelector('.description-container');
        descriptionContainer.style.opacity = 1;

        allPaintingContainers.forEach(container => {
            container.style.display = 'block';
            // container.style.position = 'relative';
            container.style.width = '19%';
            container.style.height ='94%';

            const paintingInfo = container.querySelector('.painting-info');
            paintingInfo.style.display = 'none'; // Hide painting info
        });
    }

    // Function to set up hover event listeners for each painting
    function setupPaintingHoverEvents() {
        const paintings = document.querySelectorAll('.painting');
        var index = 0;

        paintings.forEach(painting => {
            painting.addEventListener('mouseenter', function() {
                const paintingContainer = painting.parentElement; // Get the parent container
                handlePaintingHover(paintingContainer);
            });

            painting.addEventListener('mouseleave', function() {
                resetPaintingStyles();
            });

            // Set background position based on painting's order in row
            
            // const percentOffset = (index / 8) * 100; // Calculate percentage offset
            // const gap = 0.8 * 0.2 * window.innerHeight / 9;
            // const slit = 0.8 * 0.8 * window.innerHeight / 10;
            // const offset = index * (gap + slit);
            // console.log("index" + index);
            // console.log("offset:" + offset);
            // painting.style.objectPosition = '${offset}px 0px'; // Set background position
            // index = index + 1;
        });
    }

    // Call the setupPaintingHoverEvents function after the DOM is fully loaded
    setupPaintingHoverEvents();

    // Function to hide specified containers and display paintings grid
    function displayPaintingsGrid() {
        const paintingsContainer = document.querySelector('.paintings-container');
        const allPaintingContainers = document.querySelectorAll('.painting-container');

        const descriptionContainer = document.querySelector('.description-container');

        // Hide titleSection, mapContainer, and quoteContainer
        const titleSection = document.querySelector('.title-section');
        const mapContainer = document.querySelector('.map-container');
        const quoteContainer = document.querySelector('.quote-container');
        
        setTimeout(function() {
            fadeOutElement(titleSection);
            fadeOutElement(mapContainer);
            fadeOutElement(quoteContainer);

            // Fade in paintingsContainer
            fadeInElement(paintingsContainer);
            fadeInElement(descriptionContainer);

            paintingsContainer.style.display = 'flex';
            paintingsContainer.style.flexFlow = 'row wrap';
            paintingsContainer.style.justifyContent = 'space-between';

            // Scale down all painting containers
            allPaintingContainers.forEach(container => {
                container.style.position = 'relative';
                container.style.width = '19%';
            });

            // Hide painting info for all paintings
            allPaintingContainers.forEach(container => {
                const paintingInfo = container.querySelector('.painting-info');
                paintingInfo.style.display = 'none';
            });
        }, 6000);
    }



    // Function to hide specified containers
    function hideContainers() {
        const titleSection = document.querySelector('.title-section');
        const mapContainer = document.querySelector('.map-container');
        const quoteContainer = document.querySelector('.quote-container');
        const descriptionContainer = document.querySelector('.description-container');
        const paintingsContainer = document.querySelector('.paintings-container');

        // Set initial opacity to 1 for containers that should be hidden
        titleSection.style.opacity = 1;
        mapContainer.style.opacity = 1;
        quoteContainer.style.opacity = 1;

        // Gradually hide specified containers and show paintingsContainer
        setTimeout(function() {
            // Fade out titleSection, mapContainer, and quoteContainer
            fadeOutElement(titleSection);
            fadeOutElement(mapContainer);
            fadeOutElement(quoteContainer);

            // Fade in paintingsContainer
            fadeInElement(paintingsContainer);
            fadeInElement(descriptionContainer);
        }, 6000); // Delay of 6000 milliseconds (6 seconds)
    }

    // Function to gradually fade out an element
    function fadeOutElement(element) {
        setTimeout(function() {
            element.style.transition = 'opacity 0.5s ease-in-out';
            element.style.opacity = 0;
        }, 500);
    }

    // Function to gradually fade in an element
    function fadeInElement(element) {
        setTimeout(function() {
            element.style.transition = 'opacity 0.5s ease-in-out';
            element.style.opacity = 1;
        }, 500);
    }

    // Call the hideContainers function after the DOM is fully loaded
    hideContainers();

    // Call the displayPaintingsGrid function after the DOM is fully loaded
    displayPaintingsGrid();
});
