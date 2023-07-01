const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (email && password) {
        // TODO: check routing
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        alert('You are now signed up!');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);