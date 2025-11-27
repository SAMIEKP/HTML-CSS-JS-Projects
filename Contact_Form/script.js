document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    // Input fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Error message containers
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Real-time validation listeners
    nameInput.addEventListener('input', () => validateField(nameInput, nameError, 'Name cannot be empty.'));
    emailInput.addEventListener('input', () => validateEmail());
    messageInput.addEventListener('input', () => validateField(messageInput, messageError, 'Message cannot be empty.'));

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Perform final validation
        const isNameValid = validateField(nameInput, nameError, 'Name cannot be empty.');
        const isEmailValid = validateEmail();
        const isMessageValid = validateField(messageInput, messageError, 'Message cannot be empty.');

        if (isNameValid && isEmailValid && isMessageValid) {
            // If all fields are valid, simulate form submission
            submitForm();
        } else {
            showStatusMessage('Please correct the errors before submitting.', 'error');
        }
    });

    function validateField(input, errorElement, errorMessage) {
        if (input.value.trim() === '') {
            showError(input, errorElement, errorMessage);
            return false;
        }
        clearError(input, errorElement);
        return true;
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '') {
            showError(emailInput, emailError, 'Email cannot be empty.');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailInput, emailError, 'Please enter a valid email address.');
            return false;
        }
        clearError(emailInput, emailError);
        return true;
    }

    function showError(inputElement, errorElement, message) {
        inputElement.parentElement.classList.add('error');
        errorElement.textContent = message;
    }

    function clearError(inputElement, errorElement) {
        inputElement.parentElement.classList.remove('error');
        errorElement.textContent = '';
    }

    function showStatusMessage(message, type) {
        statusMessage.textContent = message;
        statusMessage.className = type; // 'success' or 'error'
    }

    function submitForm() {
        // In a real application, you would send data to a server here.
        // For example, using the Fetch API:
        /*
        const formData = new FormData(contactForm);
        fetch('/your-server-endpoint', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            showStatusMessage('Message sent successfully!', 'success');
            contactForm.reset();
            // Clear floating labels state
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error');
            });
        })
        .catch(error => {
            showStatusMessage('An error occurred. Please try again.', 'error');
        });
        */

        // --- Simulation for this example ---
        console.log('Form is valid. Simulating submission...');
        showStatusMessage('Message sent successfully! Thank you.', 'success');
        
        // Disable the button to prevent multiple submissions
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sent!';

        // Reset form after a delay
        setTimeout(() => {
            contactForm.reset();
            // Manually trigger blur to reset label positions if needed
            document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
                input.blur();
            });
            clearAllErrors();
            showStatusMessage('', ''); // Clear status
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }, 3000);
    }
    
    function clearAllErrors() {
        clearError(nameInput, nameError);
        clearError(emailInput, emailError);
        clearError(messageInput, messageError);
    }
});
document.getElementById('clickMeBtn').addEventListener('click', function() {
  alert('Button was clicked!');
});
