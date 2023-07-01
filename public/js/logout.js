const logout = async () => {
    // TODO: change routing to reflect ours
    const response = await fetch('/login/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
      alert('You are now logged out.');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  