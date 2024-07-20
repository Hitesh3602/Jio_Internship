document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const welcomeMessage = document.getElementById('welcomeMessage');
  
    // Register User
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('registerUsername').value;
      const password = document.getElementById('registerPassword').value;
  
      fetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          alert('User registered successfully');
          registerForm.reset();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  
    // Login User
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
  
      fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.token) {
            console.log('Success:', data);
            alert('Login successful');
            welcomeMessage.textContent = `Welcome, ${username}`;
            loginForm.reset();
          } else {
            alert(data.error);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  });
  