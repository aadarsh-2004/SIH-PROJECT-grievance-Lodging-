// Get references to the button and dropdown content
const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("dropdownContent");

// Add a click event listener to the button
dropdownButton.addEventListener("click", function() {
    // Toggle the display of the dropdown content
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});


// JavaScript for the image slideshow
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 8000); // Change image every 3 seconds (adjust as needed)
}

showSlides();


// JavaScript to toggle the chatbot iframe
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWidget = document.getElementById('chatbot-widget');

chatbotToggle.addEventListener('click', () => {
    chatbotWidget.style.display = chatbotWidget.style.display === 'none' ? 'block' : 'none';
});