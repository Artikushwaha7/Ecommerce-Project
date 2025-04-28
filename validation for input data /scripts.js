document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        // Validate name
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            alert('Name is required.');
            event.preventDefault();
            return;
        }

        // Validate email
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return;
        }

        
        // Validate phone
        const phone = document.getElementById('phone').value.trim();
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            event.preventDefault();
            return;
        }

        // Validate address
        const address = document.getElementById('address').value.trim();
        if (address === '') {
            alert('Address is required.');
            event.preventDefault();
            return;
        }

        // If all validations pass
        alert('Form submitted successfully!');
    });
});
