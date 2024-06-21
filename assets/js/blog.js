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

const storedBlogPost = JSON.parse(localStorage.getItem('blogPosts')) || [];
const numberOfPosts = storedBlogPost.length;

const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');

function renderAllBlogPost() {
    const middleIndex = Math.ceil(numberOfPosts / 2);
    const firstHalf = storedBlogPost.slice(0, middleIndex);
    const secondHalf = storedBlogPost.slice(middleIndex);
    
    console.log(middleIndex);
    
    const createPostElement = post => {
        const postDiv = document.createElement('div');
        const postTitle = document.createElement('h2');
        const postContent = document.createElement('p');
        const postAuthor = document.createElement('p');
    
        postTitle.textContent = post.songURL;
        postContent.textContent = post.explanation;
        postAuthor.textContent = post.name;

        postDiv.classList.add("blog-posts")

        postTitle.classList.add("blog-title");
        postContent.classList.add("blog-content");
        postAuthor.classList.add("blog-author");
    
        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);
        postDiv.appendChild(postAuthor);
    
        return postDiv;
    };
    
    firstHalf.forEach(post => {
        const postDiv = createPostElement(post);
        leftSide.appendChild(postDiv);
    });
    
    secondHalf.forEach(post => {
        const postDiv = createPostElement(post);
        rightSide.appendChild(postDiv);
    });    
};

renderAllBlogPost();