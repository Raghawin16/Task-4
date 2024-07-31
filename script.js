// document.getElementById('registerForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Clear previous error messages
//     document.getElementById('usernameError').textContent = '';
//     document.getElementById('emailError').textContent = '';
//     document.getElementById('passwordError').textContent = '';
//     document.getElementById('dobError').textContent = '';
//     document.getElementById('contactError').textContent = '';
  
//     let valid = true;
  
//     // Get form values
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const dob = document.getElementById('dob').value;
//     const contact = document.getElementById('contact').value;
  
//     // Validate username
//     if (username.trim() === '') {
//       document.getElementById('usernameError').textContent = 'Username is required.';
//       valid = false;
//     }
  
//     // Validate email
//     if (!validateEmail(email)) {
//       document.getElementById('emailError').textContent = 'Invalid email address.';
//       valid = false;
//     }
  
//     // Validate password
//     if (password.trim().length < 6) {
//       document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
//       valid = false;
//     }
  
//     // Validate date of birth
//     if (!validateDOB(dob)) {
//       document.getElementById('dobError').textContent = 'Please enter a valid date of birth.';
//       valid = false;
//     }
  
//     // Validate contact number
//     if (!validateContact(contact)) {
//       document.getElementById('contactError').textContent = 'Invalid contact number.';
//       valid = false;
//     }
  
//     // If all fields are valid, submit the form or redirect
//     if (valid) {
//       // For now, simulate successful registration
//       alert('Successfully registered!');
//       window.location.href = 'success.html'; // Redirect to a success page
//     }
// });

// function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
//     return re.test(String(email).toLowerCase());
// }

// function validateDOB(dob) {
//     // Basic validation to check if the date is not in the future
//     const today = new Date().toISOString().split('T')[0];
//     return dob && dob <= today;
// }

// function validateContact(contact) {
//     // A simple regex to validate a contact number, can be modified as needed
//     const re = /^\d{10}$/;
//     return re.test(contact);
// }


// document.getElementById('registerForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Clear previous error messages
//     document.getElementById('usernameError').textContent = '';
//     document.getElementById('emailError').textContent = '';
//     document.getElementById('passwordError').textContent = '';
//     document.getElementById('dobError').textContent = '';
//     document.getElementById('contactError').textContent = '';

//     let valid = true;

//     // Get form values
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const dob = document.getElementById('dob').value;
//     const contact = document.getElementById('contact').value;

//     // Validate username
//     if (username.trim() === '') {
//         document.getElementById('usernameError').textContent = 'Username is required.';
//         valid = false;
//     }

//     // Validate email
//     if (!validateEmail(email)) {
//         document.getElementById('emailError').textContent = 'Invalid email address.';
//         valid = false;
//     }

//     // Validate password
//     if (password.trim().length < 6) {
//         document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
//         valid = false;
//     }

//     // Validate date of birth
//     if (!validateDOB(dob)) {
//         document.getElementById('dobError').textContent = 'Please enter a valid date of birth.';
//         valid = false;
//     }

//     // Validate contact number
//     if (!validateContact(contact)) {
//         document.getElementById('contactError').textContent = 'Invalid contact number.';
//         valid = false;
//     }

//     // If all fields are valid, submit the form or redirect
//     if (valid) {
//         // For now, simulate successful registration
//         alert('Successfully registered!');
//         window.location.href = 'success.html'; // Redirect to a success page
//     }
// });

// function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
//     return re.test(String(email).toLowerCase());
// }

// function validateDOB(dob) {
//     // Basic validation to check if the date is not in the future
//     const today = new Date().toISOString().split('T')[0];
//     return dob && dob <= today;
// }

// function validateContact(contact) {
//     // A simple regex to validate a contact number, can be modified as needed
//     const re = /^\d{10}$/;
//     return re.test(contact);
// }

// function handleSocialClick(platform) {
//     alert(`Clicked on ${platform} button!`);
// }



document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('dobError').textContent = '';
    document.getElementById('contactError').textContent = '';

    let valid = true;

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const contact = document.getElementById('contact').value;

    // Validate username
    if (username.trim() === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        valid = false;
    }

    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        valid = false;
    }

    // Validate password
    if (password.trim().length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        valid = false;
    }

    // Validate date of birth
    if (!validateDOB(dob)) {
        document.getElementById('dobError').textContent = 'Please enter a valid date of birth.';
        valid = false;
    }

    // Validate contact number
    if (!validateContact(contact)) {
        document.getElementById('contactError').textContent = 'Invalid contact number.';
        valid = false;
    }

    // If all fields are valid, submit the form or redirect
    if (valid) {
        // For now, simulate successful registration
        alert('Successfully registered!');
        window.location.href = 'success.html'; // Redirect to a success page
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

function validateDOB(dob) {
    // Basic validation to check if the date is not in the future
    const today = new Date().toISOString().split('T')[0];
    return dob && dob <= today;
}

function validateContact(contact) {
    // A simple regex to validate a contact number, can be modified as needed
    const re = /^\d{10}$/;
    return re.test(contact);
}

function handleSocialClick(platform) {
    alert(`Clicked on ${platform} button!`);
}
