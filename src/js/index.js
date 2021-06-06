import { preloadFonts } from './utils';
import { Intro } from './intro';

const intro = new Intro(document.querySelector('.circles'));

// Preload images and fonts
Promise.all([preloadFonts('kxo3pgz')]).then(() => {
    // remove loader (loading class)
    document.body.classList.remove('loading');
    // start intro
    intro.start();
});

document.getElementById('site-enter-link').addEventListener('click', function(e) {
    e.preventDefault();
    setTimeout(function() {
        window.location.href = 'artists.html';
    }, 1500);
})