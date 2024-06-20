// Light & Dark mode toggle
// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#mode-switch');
const setMode = document.querySelector('.set-mode');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
    mode = 'light';
    setMode.setAttribute('class', 'light');
    }
    // If mode is light, apply dark background
    else {
        mode = 'dark';
        setMode.setAttribute('class', 'dark');
    }
});

const blogPost1 = document.querySelector('#blog-post-1');
const blogPost2 = document.querySelector('#blog-post-2');
const blogPost3 = document.querySelector('#blog-post-3');
const blogPost4 = document.querySelector('#blog-post-4');
const blogPost5 = document.querySelector('#blog-post-5');
const blogPost6 = document.querySelector('#blog-post-6');
const blogPost7 = document.querySelector('#blog-post-7');
const blogPost8 = document.querySelector('#blog-post-8');
const blogPost9 = document.querySelector('#blog-post-9');
const blogPost10 = document.querySelector('#blog-post-10');

const storedBlogPost = JSON.parse(localStorage.getItem('blogPost'));
const nameFrom = storedBlogPost.name;
const songURLFrom = storedBlogPost.songURL;
const explanationFrom = storedBlogPost.explanation;

function renderBlogPost() {
    const nameP = document.createElement("p");
    nameP.textContent = `Name: ${nameFrom}`;
    blogPost1.appendChild(nameP)

    const songURLP = document.createElement("p");
    songURLP.textContent = `Song URL: ${songURLFrom}`;
    blogPost1.appendChild(songURLP)

    const explanationP = document.createElement("p");
    explanationP.textContent = `Explanation: ${explanationFrom}`;
    blogPost1.appendChild(explanationP)
};

renderBlogPost();