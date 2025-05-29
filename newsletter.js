document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscriptionForm');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('errorMessage');
    const newsletterForm = document.getElementById('newsletterForm');
    const successMessage = document.getElementById('successMessage');
    const confirmedEmail = document.getElementById('confirmedEmail');
    const dismissBtn = document.getElementById('dismissBtn');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Real-time validation on input
    emailInput.addEventListener('input', function() {
        validateEmail();
    });

    // Real-time validation on blur
    emailInput.addEventListener('blur', function() {
        validateEmail();
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateEmail()) {
            showSuccessMessage();
        }
    });

    // Dismiss button functionality
    dismissBtn.addEventListener('click', function() {
        hideSuccessMessage();
    });

    function validateEmail() {
        const email = emailInput.value.trim();
        
        // Check if email is empty
        if (email === '') {
            showError();
            return false;
        }
        
        // Check if email format is valid
        if (!emailRegex.test(email)) {
            showError();
            return false;
        }
        
        hideError();
        return true;
    }

    function showError() {
        emailInput.classList.add('error');
        errorMessage.classList.add('show');
    }

    function hideError() {
        emailInput.classList.remove('error');
        errorMessage.classList.remove('show');
    }

    function showSuccessMessage() {
        const email = emailInput.value.trim();
        confirmedEmail.textContent = email;
        newsletterForm.classList.add('hidden');
        successMessage.classList.remove('hidden');
    }

    function hideSuccessMessage() {
        successMessage.classList.add('hidden');
        newsletterForm.classList.remove('hidden');
        
        // Reset form
        form.reset();
        hideError();
    }
});