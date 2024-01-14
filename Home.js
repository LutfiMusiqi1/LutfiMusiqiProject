// Your custom JavaScript code goes here

// Example JavaScript - Add your own functionality as needed
document.addEventListener('DOMContentLoaded', function () {
    // Example: Change background color on click
    document.querySelector('.welcome-section').addEventListener('click', function () {
        this.style.backgroundColor = '#f0f0f0';
    });
});

    document.addEventListener("DOMContentLoaded", function () {
        var readMoreButtons = document.querySelectorAll('.read-more-btn');

        readMoreButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var cardText = this.parentElement.querySelector('.card-text');
                var truncatedText = cardText.querySelector('.truncated-text');
                var fullText = cardText.querySelector('.full-text');

                // Toggle between showing/hiding the full text
                truncatedText.classList.toggle('d-none');
                fullText.classList.toggle('d-none');

                // Change button text based on the state
                var buttonText = this.innerText === 'Read More' ? 'Read Less' : 'Read More';
                this.innerText = buttonText;
            });
        });
    });

