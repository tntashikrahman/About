document.getElementById("learnMoreBtn").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
});