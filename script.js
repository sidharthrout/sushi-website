document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        // Hide loading screen and show main content
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.main-content').classList.remove('hidden');
    }, 5000); // Adjust the timeout duration as needed (4 seconds in this example)
});
