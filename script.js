document.addEventListener('DOMContentLoaded', () => {
    
    // Handle Form Submission
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents page reload
        
        const name = document.getElementById('name').value;
        
        if(name) {
            alert(`Thank you, ${name}! Adarsh Singh's team will contact you shortly.`);
            form.reset();
        }
    });

    // Simple scroll effect for navbar (Optional)
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });
});
