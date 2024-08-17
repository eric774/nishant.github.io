// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Form validation (simple example)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate the form (you can add more complex validation)
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Thank you for your message!');
    } else {
        alert('Please fill in all fields.');
    }
});
