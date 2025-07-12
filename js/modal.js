'use strict';

// JS
const beatles = {
    cloud9: {
        name: 'Cloud9',
        image: "images/Cloud9_TitleFrame.png",
        bio: `My 2025 Capstone Project: Cloud9 is a web platform that focuses
                    on providing tools and resources to help those facing addiction to nicotine.
                    I worked with Camilla Clark and Kevin Trancong to create a fully functional
                    site that works with an SQL database and integrated Google API systems.
                    I helped with back-end design, as well as extra input for front-end
                    design aspects after collecting input from real experts in medical and
                    UX design positions. This project required much time and effort to make
                    it a reality, but I&rsquo;m very proud of how it came out in the end.`,
    },
    airport: {
        name: 'U.S. Airport Efficiency',
        image: "images/US_Airport_Tableau_Cover.png",
        bio: `I find myself wanting to travel more nowadays, and planes are 
                    one of the biggest ways to travel today. But of course, airports aren’t 
                    cheap, and many times, there are lots of costs that go into airports that 
                    many people overlook. This tableau project aims to put my data analyst 
                    skills to the test and display visualizations that tell the audience 
                    useful information and an impactful story.`,
    },
    sleepwell: {
        name: 'SleepWell',
        image: "images/Mobile_screenshot.png",
        bio: `One of my older projects. I worked on this mobile app prototype with Mukund Bhat, using Figma.
                    I designed a 3D printed neckband that would serve to track the user&rsquo;s
                    sleeping data in a final product. With my initial structure
                    design aspects for the app and Mukund&rsquo;s polish, we created a strong
                    demonstration of an interface that can be intergraded into a real-life
                    system.`,
    },
    inventory: {
        name: 'Integrating Inventory',
        image: "images/Inventory_Background.png",
        bio: `This project had me working with members of the Army. 
                    The problem involved improving the process of counting ammo and resources 
                    in their inventory, with a multitude of parameters. This project had me 
                    and my team communicating with many army members, all of which have 
                    different perspectives and needs for our prototype program to be a success.`,
    },
    arduino: {
        name: 'Arduino Christmas Tree',
        image: "images/Christmas_NightLight.jpg",
        bio: `After seeing so many Arduino projects, I went into trying 
                    it myself, and I had a very fun experience. Niki Movva and I made a fun 
                    light-up Christmas Tree design. I was in charge of designing the tree 
                    using Fusion 360, while Niki was in charge of the circuits and the 
                    lights. We both had a hand at the code, and we finished with a simple, 
                    yet compelling masterpiece.`,
    },
};

// Extra JS for the keyboard event to CLOSE modal on ESC
window.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.key === 'Escape') {
        closeModal();
    }
});

function openModal(event) {
    //when card is clicked, 
    //add .open class to outer modal
    console.log("Target", event.target);
    console.log("Closet", event.target.closest('.card'));

    let current = event.target.closest('.card');
    let firstName = current.dataset.name;
    let lastName = current.dataset.lastName;

    //match target to data
    // console.log(beatles.firstName); // NO - no key "firstName"
    console.log(beatles[firstName]); // YES - understands variables
    //get data
    let data = beatles[firstName];
    //format unsing html
    let html = `
<h2 style="color:black">${data.name}</h2>
<div class="modal-desc">
    <p style="color:black">${data.bio}</p>
    <img class="modal-img" src="${data.image}" alt="${data}" />
</div>
`;
    //reset inner to nothing
    document.querySelector('.modal-inner').innerHTML = '';
    //insert data to page
    document.querySelector('.modal-inner').insertAdjacentHTML('afterbegin', html);
    //display modal
    document.querySelector('.modal-outer').classList.add('open');
}

function closeModal(event) {
    //event listener on click
    //call closeModal back
    console.log(event.target);
    //if outer, close
    //else, don't
    // console.log("outer", event.target.closest('.model-outer'));
    // console.log("inner", event.target.closest('.model-inner'));

    if (event.target.closest('.modal-inner')) {
        console.log("INNER");
    }
    else {
        console.log("OUTER");
        document.querySelector('.modal-outer').classList.remove('open');
    }
}

function main() {
    //event listeners
    //interface or default values
    let cards = document.querySelectorAll('.card');
    cards.forEach((card => card.addEventListener('click', openModal)));

    document.querySelector('.modal-outer').addEventListener('click', closeModal);
}

main();