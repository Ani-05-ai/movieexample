function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById('flip');
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Dark Mode On';
    } else {
        button.textContent = 'Dark Mode Off';
    }
}

document.getElementById('update_btn').addEventListener('click', () => {
    const movieCode = document.getElementById('movie_name').value.trim(); // Get and trim the input value
    const iframe = document.getElementById('movie_iframe');
    if (movieCode) {
        // Update the iframe src
        iframe.src = `https://vidsrc.xyz/embed/movie?imdb=${movieCode}`;
    } else {
        alert('Please enter a valid movie code.');
    }
});

document.getElementById('next_btn').addEventListener('click', () => {
    // Function to load the next set of movie recommendations
    // Replace this with your actual recommendation logic
    alert('Loading next set of movie recommendations...');
});
