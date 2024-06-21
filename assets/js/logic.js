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

// Album art for automatic carousel
const albumArt = [
    'https://www.billboard.com/wp-content/uploads/2022/03/2.-The-Beatles-%E2%80%98Abbey-Road-1969-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2022/03/5.-Led-Zeppelin-%E2%80%98Led-Zeppelin-1969-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2022/03/6.-Pink-Floyd-%E2%80%98Dark-Side-of-the-Moon-1973-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2022/03/8.-Cyndi-Lauper-%E2%80%98Shes-So-Unusual-1983-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2022/03/10.-Elvis-Presley-%E2%80%98Elvis-Presley-1956-album-art-billboard-1240.jpg?w=855',
    'https://www.billboard.com/wp-content/uploads/2023/07/nwa-straight-outta-comption-cover-1988-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2022/03/1.-The-Velvet-Underground-and-Nico-%E2%80%98The-Velvet-Underground-Nico-1967-album-art-2022-billboard-1240.jpg?w=777',
    'https://www.billboard.com/wp-content/uploads/2022/03/15.-Nas-%E2%80%98Illmatic-1994-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2022/03/16.-The-Clash-%E2%80%98London-Calling-1979-album-art-billboard-1240.jpg?w=772',
    'https://www.billboard.com/wp-content/uploads/2022/03/20.-Joy-Division-%E2%80%98Unknown-Pleasures-1979-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2022/03/21.-Duran-Duran-%E2%80%98Rio-1982-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2023/07/ramones-cover-1976-billboard-1240.jpg?w=1024',
    'https://www.billboard.com/wp-content/uploads/2022/03/28.-Bruce-Springsteen-%E2%80%98Born-in-the-U.S.A.-1984-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2022/03/14.-Blink-182-%E2%80%98Enema-of-the-State-1999-album-art-billboard-1240.jpg?w=772',
    'https://www.billboard.com/wp-content/uploads/2022/03/43.-Fleetwood-Mac-%E2%80%98Rumours-1977-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2022/03/48.-Lady-Gaga-%E2%80%98The-Fame-Monster-2009-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2022/03/39.-Johnny-Cash-%E2%80%98American-IV-The-Man-Comes-Around-2002-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2022/03/50.-Taylor-Swift-%E2%80%981989-2014-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2022/03/35.-Metallica-%E2%80%98Master-of-Puppets-1986-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2022/03/29.-Aretha-Franklin-%E2%80%98I-Never-Loved-a-Man-the-Way-I-Loved-You-1967-album-art-billboard-1240.jpg?w=768',
    'https://www.billboard.com/wp-content/uploads/2023/07/jay-z-the-black-album-cover-2003-billboard-1240.jpg?w=1024',
    'https://www.billboard.com/wp-content/uploads/2022/03/44.-Whitney-Houston-%E2%80%98Whitney-Houston-1985-album-art-billboard-1240.jpg?w=768',
];

function changeImage() {
    let currentIndex = Math.floor(Math.random() * albumArt.length);
    document.getElementById('slider-image').src = albumArt[currentIndex];
    document.getElementById('slider-image').classList.add("fade-in")

    // setTimeout(() => {
    //     document.getElementById('slider-image').classList.remove("fade-in")
    //     document.getElementById('slider-image').classList.remove("fade-out")

    // }, 5000)

    console.log(currentIndex);
}

changeImage();
setInterval(changeImage, 8000);

// Collecting blog post information

let blogPosts = [];

function submitBlogPost() {
    const submitButton = document.querySelector('#submit-btn');

    submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const nameInput = document.querySelector('#name').value;
    const songInput = document.querySelector('#song-url').value;
    const explanationInput = document.querySelector('#explanation').value;

    if (nameInput === '' || songInput === '' || explanationInput === '') {
        alert('Please fill in all fields before submitting.');
        return;
    };

    const newSubmission = {
        name: nameInput.trim(),
        songURL: songInput.trim(),
        explanation: explanationInput.trim(),
    };

    blogPosts.unshift(newSubmission);

    if (blogPosts.length > 10) {
        blogPosts = blogPosts.slice(0, 10);
    };

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    nameInput
});
}

submitBlogPost();
