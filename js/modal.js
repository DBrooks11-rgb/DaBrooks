'use strict';

// JS
const projects = {
    cloud9: {
        name: 'Cloud9',
        image: "images/Cloud9_TitleFrame.png",
        bio: `My 2025 Capstone Project: Cloud9 is a web platform that focuses
                    on providing tools and resources to help those facing addiction to nicotine.
                    I worked with Camilla Clark and Kevin Trancong to create a fully functional
                    site that works with an SQL database and integrates Google API systems.
                    <br>
                    I worked mainly with the back-end design, as well as extra input for the front-end
                    design aspects after collecting input from real experts in medical and
                    UX design positions. I was in charge of developing the discussion board 
                    feature, allowing users to communicate and connect. This project required 
                    much time and effort to make it a reality, but I&rsquo;m very proud of 
                    how it came out in the end.`,
        link: "https://zion.luddy.indiana.edu/info-capstone-2025/cloud9",
    },
    airport: {
        name: 'U.S. Airport Efficiency',
        image: "images/US_Airport_Tableau_Cover.png",
        bio: `I find myself wanting to travel more nowadays, and planes are 
                    one of the best ways to travel today. But of course, airports aren&rsquo;t 
                    cheap, and many times, there are lots of costs that go into airports that 
                    many people overlook. This tableau project aims to put my data analyst 
                    skills to the test and display visualizations that tell the audience 
                    fascinating information and an impactful story.`,
        link: "https://public.tableau.com/app/profile/david.brooks4031/viz/AirportProject_17297303787400/Story",
    },
    sleepwell: {
        name: 'SleepWell',
        image: "images/Mobile_screenshot.png",
        bio: `One of my older projects. I worked on this mobile app prototype with Mukund Bhat, using Figma.
                    Our goal was to design a prototype app that focused on guiding users
                    on how to use a wearable system, thinking of the practical usage and
                    user reactions from the product. In addition,
                    I designed a prototype 3D printed neckband that would serve to track the 
                    user&rsquo;s sleeping data in a final product.
                    <br>
                    With my initial structure design aspects for the app and Mukund&rsquo;s 
                    polish, we created a strong demonstration of an interface that can be 
                    integrated into a real-life system.`,
        link: "https://www.figma.com/proto/WlssZAC68FAESNG5Eednb2/Mobile-wearable---app-proto?node-id=0-1&t=mKUWshCBHCFFUJ5U-1",
    },
    inventory: {
        name: 'Integrating Inventory',
        image: "images/Inventory_Background.png",
        bio: `This project had me working with members of the Army. 
                    The problem involved improving the process of counting ammo and resources 
                    in their inventory, with a multitude of parameters. My team and I were
                    communicating with many army members who all had different perspectives 
                    and needs for our prototype program to be a success.
                    <br>
                    This project was when I truly discovered the business perspectives within 
                    Informatics, with aspects such as dependencies and beneficiaries coming
                    into play. It also challenged my ability to communicate more efficiently.`,
        link: "",
    },
    arduino: {
        name: 'Arduino Christmas Tree',
        image: "images/Christmas_NightLight.jpg",
        bio: `After seeing so many Arduino projects, I went into trying 
                    it myself, and I had a very fun experience. Niki Movva and I made a fun 
                    light-up Christmas Tree design. You can see a sound wave sensor
                    that senses how far or close someone is and makes the tree lights
                    change colors. 
                    <br>
                    I was in charge of designing the tree 
                    using Fusion 360, while Niki was in charge of the circuits and the 
                    lights. We both had a hand at the code, and we finished with a simple, 
                    yet compelling masterpiece!`,
        link: "",
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
    // console.log(projects.firstName); // NO - no "firstName"
    console.log(projects[firstName]); // YES
    //get data
    let data = projects[firstName];
    //format unsing html
    let html = `
    <span class="close-modal" aria-label="Close modal">
    <span class="material-symbols-outlined">close</span>
    <span class="sr-only">Close main menu</span></span>
<h2 style="color:black">${data.name}</h2>
<div class="modal-desc">
    <p style="color:black">${data.bio}
`;

    //If card has link, add to p before closing
    if (data.link != "") {
        html += `
    <br><br>
    <a href="${data.link}">Click Here</a>
    to view more.
    `;
    }

    //Close modal-desc
    html += `
    </p>
    <img class="modal-img" src="${data.image}" alt="${data}"/>
</div>
`;
    //reset inner to nothing
    document.querySelector('.modal-inner').innerHTML = '';
    //insert data to page
    document.querySelector('.modal-inner').insertAdjacentHTML('afterbegin', html);
    //display modal
    document.querySelector('.modal-outer').classList.add('open');
    //if "X" is pressed, close modal
    document.querySelector('.close-modal').addEventListener('click', closeModal);
}

function closeModal(event) {
    //event listener on click
    //call closeModal back
    console.log(event.target);
    //if outer, close
    //else, don't
    // console.log("outer", event.target.closest('.model-outer'));
    // console.log("inner", event.target.closest('.model-inner'));
    if (event.target.closest('.close-modal')) {
        console.log("X");
        document.querySelector('.modal-outer').classList.remove('open');
    }
    else {
        if (event.target.closest('.modal-inner')) {
            console.log("INNER");
        }
        else {
            console.log("OUTER");
            document.querySelector('.modal-outer').classList.remove('open');
        }
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