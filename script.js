const orgParagraph = document.getElementById('org');
const orgParagraph2 = document.getElementById('org2');
const orgParagraph3 = document.getElementById('org3');
const spanElem = document.getElementById('span-elem');

orgParagraph.style.backgroundColor = 'hsl(205, 33%, 90%)';
orgParagraph.style.padding = '15px';
orgParagraph.style.borderRadius = '5px';

orgParagraph2.style.backgroundColor = 'hsl(205, 33%, 90%)';
orgParagraph2.style.paddingLeft = '15px';
orgParagraph2.style.borderRadius = '5px';

orgParagraph3.style.backgroundColor = 'hsl(205, 33%, 90%)';
orgParagraph3.style.padding = '15px';
orgParagraph3.style.borderRadius = '5px';

const markAsReadButton = document.getElementById('mark-as-read');

// Add the red circle to the "org" paragraph
function addRedCircle() {
    const redCircle = document.createElement('span');
    redCircle.classList.add('red-circle');

    const redCircle2 = document.createElement('span');
    redCircle2.classList.add('red-circle');

    const redCircle3 = document.createElement('span');
    redCircle3.classList.add('red-circle');
    orgParagraph.appendChild(redCircle);
    orgParagraph2.appendChild(redCircle2);
    orgParagraph3.appendChild(redCircle3);
}

// Remove the red circle and change the background color
function markAllAsRead() {
    const redCircle = orgParagraph.querySelector('.red-circle');
    const redCircle2 = orgParagraph2.querySelector('.red-circle');
    const redCircle3 = orgParagraph3.querySelector('.red-circle');

    if (redCircle && redCircle2 && redCircle3) {
        redCircle.remove();
        redCircle2.remove();
        redCircle3.remove();

        orgParagraph.style.backgroundColor = 'transparent';
        orgParagraph2.style.backgroundColor = 'transparent';
        orgParagraph3.style.backgroundColor = 'transparent';

        // Decrease the notifications count
        const currentCount = parseInt(spanElem.innerText, 10);
        if (currentCount > 0) {
            spanElem.innerText = 0;
        }
    } else if (redCircle && redCircle2) {
        redCircle.remove();
        redCircle2.remove();

        orgParagraph.style.backgroundColor = 'transparent';
        orgParagraph2.style.backgroundColor = 'transparent';

        // Decrease the notifications count
        const currentCount = parseInt(spanElem.innerText, 10);
        if (currentCount > 0) {
            spanElem.innerText = 0;
        }
    } else if (redCircle2 && redCircle3) {
        redCircle2.remove();
        redCircle3.remove();

        orgParagraph2.style.backgroundColor = 'transparent';
        orgParagraph3.style.backgroundColor = 'transparent';

        // Decrease the notifications count
        const currentCount = parseInt(spanElem.innerText, 10);
        if (currentCount > 0) {
            spanElem.innerText = 0;
        }
    } else if (redCircle && redCircle3) {
        redCircle.remove();
        redCircle3.remove();

        orgParagraph.style.backgroundColor = 'transparent';
        orgParagraph3.style.backgroundColor = 'transparent';

        // Decrease the notifications count
        const currentCount = parseInt(spanElem.innerText, 10);
        if (currentCount > 0) {
            spanElem.innerText = 0;
        }
    } 
}

function markAllAsRead1() {
    const redCircle = orgParagraph.querySelector('.red-circle');

    if (redCircle) {
        redCircle.remove();

        orgParagraph.style.backgroundColor = 'transparent';

        // Decrease the notifications count
        const currentCount = parseInt(spanElem.innerText, 10);
        if (currentCount > 0) {
            spanElem.innerText = currentCount - 1;
        }
    }
}

function markAllAsRead2() {
    const redCircle2 = orgParagraph2.querySelector('.red-circle');

    if (redCircle2) {
        redCircle2.remove();

        orgParagraph2.style.backgroundColor = 'transparent';
        const currentCount = parseInt(spanElem.innerText, 10);
        if (currentCount > 0) {
            spanElem.innerText = currentCount - 1;
        }
    }
}

function markAllAsRead3() {
    const redCircle3 = orgParagraph3.querySelector('.red-circle');

    if (redCircle3) {
        redCircle3.remove();

        orgParagraph3.style.backgroundColor = 'transparent';
        const currentCount = parseInt(spanElem.innerText, 10);
        if (currentCount > 0) {
            spanElem.innerText = currentCount - 1;
        }
    }
}

const orgParagraphs = document.querySelectorAll('.sec-sec'); // Get all org divs

orgParagraphs.forEach((orgParagraph) => {
    orgParagraph.addEventListener('click', () => {
        markAsReadIndividual(orgParagraph);
    });
});

// Function to mark an org div as read individually
function markAsReadIndividual(orgParagraph) {
    const redCircle = orgParagraph.querySelector('.red-circle');

    if (redCircle) {
        redCircle.remove();
        orgParagraph.style.backgroundColor = 'transparent';

        // Decrease the notifications count
        const currentCount = parseInt(spanElem.innerText, 10);
        if (currentCount > 0) {
            spanElem.innerText = currentCount - 1;
        }
    }
}


// Event listener for the "Mark all as read" button
markAsReadButton.addEventListener('click', markAllAsRead);

// Add the red circle initially
addRedCircle();

// Add click event listeners to the divs
orgParagraph.addEventListener('click', () => {
    markAllAsRead1();
});
orgParagraph2.addEventListener('click', () => {
    markAllAsRead2();
});
orgParagraph3.addEventListener('click', () => {
    markAllAsRead3();
});
