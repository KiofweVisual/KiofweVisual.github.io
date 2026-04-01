// 1. Mobile Menu Toggle
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

if (menu) {
    menu.addEventListener('click', () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
}

// 2. Lightbox & Slideshow Elements
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

lightbox.innerHTML = `
    <div class="lightbox-controls">
        <button class="control-btn" id="prev-btn">❮</button>
        <button class="control-btn" id="next-btn">❯</button>
    </div>
    <img id="lightbox-img" src="" alt="">
    <div id="image-counter"></div>
`;

const lightboxImg = document.getElementById('lightbox-img');
const counter = document.getElementById('image-counter');
const images = Array.from(document.querySelectorAll('.photo-card img, .photo-container img, .photo-container_1 img'));
let currentIndex = 0;

function updateSlideshow(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    counter.innerText = `${currentIndex + 1} / ${images.length}`;
}

images.forEach((image, index) => {
    image.style.cursor = 'zoom-in';
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        updateSlideshow(index);
    });
});

document.getElementById('next-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    updateSlideshow(currentIndex);
});

document.getElementById('prev-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlideshow(currentIndex);
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.id === 'lightbox-img') {
        lightbox.classList.remove('active');
    }
});

// 3. Back to Top Smooth Scroll
const btt = document.querySelector('.back-to-top');
if (btt) {
    btt.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}