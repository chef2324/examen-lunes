// elementos
const ratingButtons = document.querySelectorAll('.rating button');
const submitButton = document.querySelector('.submit-button');
const feedbackCard = document.querySelector('.feedbackCard');
const thankYouCard = document.querySelector('.thankyouCard');
const selectedRatingText = document.querySelector('.selectedRating');
let selectedRating = null;

ratingButtons.forEach((button) => {
    button.addEventListener('click', () => {
        ratingButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        selectedRating = button.textContent;
    });
});

submitButton.addEventListener('click', () => {
    if (selectedRating) {
        feedbackCard.style.display = 'none';

        thankYouCard.style.display = 'block';
        selectedRatingText.textContent = `Seleccionaste ${selectedRating} de 5`;
    }
});
