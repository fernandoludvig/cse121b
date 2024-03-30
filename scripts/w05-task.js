/* W05: Programming Tasks */

// Step 1: Declare global variables
const templesElement = document.querySelector('div'); // Assumes there's a <div> for temples
let templeList = [];

// Function: displayTemples()
const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Create an HTML <article> element
        const article = document.createElement('article');
        // Create an HTML <h3> element and add the temple's name
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        // Create an HTML <img> element, add the imageUrl to src, and location to alt
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        // Append <h3> and <img> to <article>
        article.appendChild(h3);
        article.appendChild(img);
        // Append <article> to templesElement
        templesElement.appendChild(article);
    });
};

// Function: getTemples()
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    // Once the data is fetched and templeList is updated, display temples
    displayTemples(templeList);
};

// Function: reset()
const reset = () => {
    templesElement.innerHTML = ''; // Clear the templesElement of all child elements
};

// Function: filterTemples()
const filterTemples = (temples) => {
    reset(); // First, clear the current display
    const filter = document.querySelector('#filtered').value;
    switch(filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;
    }
};

// Event Listener: filterTemples Element change
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList); });

// Testing the setup
// Uncomment the line below to test the setup when you're ready
// getTemples();



getTemples();

/* Event Listener */
