/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const navLInk = document.querySelectorAll('.nav-link');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-100%';
}
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
navLInk.forEach((link) => {
  link.addEventListener('click', close);
});

const features = [
  {
    chessImg: './icons/chess.jpg',
    speakerImg: './icons/speaker1.jpg',
    speakerName: 'Angela Merkel',
    speakerBio: 'Chancellor of the Federal Republic of Germany',
    speakerPtag: "Merkel's foreign policy has focused on strengthening European cooperation and international trade agreements.",
  },
  {
    chessImg: './icons/chess.jpg',
    speakerImg: './icons/speaker2.jpg',
    speakerName: 'Tedros Adhanom Ghebreyesus',
    speakerBio: 'Director-General of the World Health Organization',
    speakerPtag: "Merkel's foreign policy has focused on strengthening European cooperation and international trade agreements.",
  },
];

const features2 = [
  {
    chessImg: './icons/chess.jpg',
    speakerImg: './icons/speaker3.jpg',
    speakerName: 'Axel R. Pries',
    speakerBio: 'Dean, Charité - Universitätsmedizin Berlin, Germany',
    speakerPtag: "Merkel's foreign policy has focused on strengthening European cooperation and international trade agreements.",
  },
  {
    chessImg: './icons/chess.jpg',
    speakerImg: './icons/speaker4.jpg',
    speakerName: 'Charles Ibingira',
    speakerBio: 'Principal (until 2020), Makerere University College of Health Sciences, Uganda',
    speakerPtag: "Merkel's foreign policy has focused on strengthening European cooperation and international trade agreements.",
  },
];

const dynamic = document.querySelector('.featured-speaker');
const testing = document.querySelector('.testing-div');
const featur = dynamic.insertAdjacentHTML(
  'afterbegin',
  `<div class="featured-speaker-head">
        <h5 id="featured-h5">
          Featured Speakers
          <hr class="summit-partner-line" />
        </h5>
      </div>`
);
features.forEach((feat) => {
  const item = document.createElement('div');
  item.className = 'featured-speaker-div';
  item.innerHTML = `<div class="featured-speaker-div1">
          <div class="featured-speaker-img-div1">
            <img class="chess" src="${feat.chessImg}" alt="" />
          </div>
          <div class="featured-speaker-img-div2">
            <img class="image2" src="${feat.speakerImg}" alt="" />
          </div>
        </div>
        <div class="featured-speaker-div3">
          <h5>${feat.speakerName}</h5>
          <i>${feat.speakerBio}</i>
          <hr class="featured-line" />
          <p>${feat.speakerPtag}</p>
        </div>`;
  testing.appendChild(item);
});

features2.forEach((feat) => {
  const item = document.createElement('div');
  item.setAttribute('id', 'features-not-show');
  item.className = 'featured-speaker-div';
  item.innerHTML = `<div class="featured-speaker-div1">
          <div class="featured-speaker-img-div1">
            <img class="chess" src="${feat.chessImg}" alt="" />
          </div>
          <div class="featured-speaker-img-div2">
            <img class="image2" src="${feat.speakerImg}" alt="" />
          </div>
        </div>
        <div class="featured-speaker-div3">
          <h5>${feat.speakerName}</h5>
          <i>${feat.speakerBio}</i>
          <hr class="featured-line" />
          <p>${feat.speakerPtag}</p>
        </div>`;
  testing.appendChild(item);
});

const button = dynamic.insertAdjacentHTML(
  'beforeend',
  `
      <div class="featured-more">
        <p class="i">MORE <i class="fa fa-caret-down" aria-hidden="true"></i></p>
      </div>`
);
