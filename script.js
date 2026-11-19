// Form Submission Logic
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing
    
    // Grab the name input
    const name = document.getElementById('name').value;
    
    // Show a success alert
    alert('Thanks for reaching out, ' + name + '! Your message has been sent.');
    
    // Clear the form fields
    this.reset();
});

// Dark Mode Toggle Logic
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

themeToggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Change button text based on the mode
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        themeToggleBtn.textContent = 'Dark Mode';
    }
});