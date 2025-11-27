document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const inputs = document.querySelectorAll('input');
    const button = document.querySelector('.signup-btn');

    // Add focus/blur animations to inputs
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validation
        let isValid = true;
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Check if username is empty or looks like an email
        if (!username) {
            isValid = false;
            document.getElementById('username').style.borderColor = '#ff6b6b';
            setTimeout(() => {
                document.getElementById('username').style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }, 2000);
        } else if (username.includes('@')) {
            isValid = false;
            alert('Username should not be an email address.');
            document.getElementById('username').style.borderColor = '#ff6b6b';
            setTimeout(() => {
                document.getElementById('username').style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }, 2000);
        }

        // Check if email is empty or invalid
        if (!email) {
            isValid = false;
            document.getElementById('email').style.borderColor = '#ff6b6b';
            setTimeout(() => {
                document.getElementById('email').style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }, 2000);
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            alert('Please enter a valid email address.');
            document.getElementById('email').style.borderColor = '#ff6b6b';
            setTimeout(() => {
                document.getElementById('email').style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }, 2000);
        }

        // Check if password is empty
        if (!password) {
            isValid = false;
            document.getElementById('password').style.borderColor = '#ff6b6b';
            setTimeout(() => {
                document.getElementById('password').style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }, 2000);
        }

        if (isValid) {
            // Simulate signup process
            button.textContent = 'Signing Up...';
            button.disabled = true;

            setTimeout(() => {
                alert('Signup successful! Welcome to the future.');
                form.reset();
                button.textContent = 'Sign Up';
                button.disabled = false;
            }, 2000);
        }
    });

    // Add some dynamic particle movement
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        particle.style.animationDelay = `${index * 0.5}s`;
        particle.style.animationDuration = `${4 + index}s`;
    });
});
