'use strict';

// JS
const beatles = {
    john: {
        name: 'John Lennon',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg',
        bio: `John Winston Ono Lennon MBE (born John Winston Lennon, 9 October 1940 – 8 December 1980) was an English singer, songwriter and peace activist who gained worldwide fame as the founder, co-lead vocalist, and rhythm guitarist of the Beatles. His songwriting partnership with Paul McCartney remains the most successful in history. In 1969, he started the Plastic Ono Band with his second wife, Yoko Ono. After the Beatles disbanded in 1970, Lennon continued as a solo artist and as Ono's collaborator.`,
    },
    paul: {
        name: 'Paul McCartney',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Paul_McCartney_Headshot_%28cropped%29.jpg',
        bio: `Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles. His songwriting partnership with John Lennon remains the most successful in history. After the group disbanded in 1970, he pursued a solo career and formed the band Wings with his first wife, Linda, and Denny Laine.`,
    },
    george: {
        name: 'George Harrison',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/George_Harrison_1974.jpg/1200px-George_Harrison_1974.jpg',
        bio: `George Harrison MBE (25 February 1943 – 29 November 2001) was an English musician, singer-songwriter, and music and film producer who achieved international fame as the lead guitarist of the Beatles. Sometimes called "the quiet Beatle", Harrison embraced Indian culture and helped broaden the scope of popular music through his incorporation of Indian instrumentation and Hindu-aligned spirituality in the Beatles' work. Although the majority of the band's songs were written by John Lennon and Paul McCartney, most Beatles albums from 1965 onwards contained at least two Harrison compositions. His songs for the group included "Taxman", "Within You Without You", "While My Guitar Gently Weeps", "Here Comes the Sun" and "Something".`,
    },
    ringo: {
        name: 'Ringo Starr',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Ringo_1963_%28cropped%29.jpg',
        bio: `Sir Richard Starkey[2] MBE[3] (born 7 July 1940), known professionally as Ringo Starr, is an English musician, singer, songwriter and actor who gained worldwide fame as the drummer for the Beatles. He occasionally sang lead vocals with the group, usually for one song on each album, including "Yellow Submarine", "With a Little Help from My Friends" and their cover of "Act Naturally". He also wrote and sang the Beatles' songs "Don't Pass Me By" and "Octopus's Garden", and is credited as a co-writer of others. `,
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