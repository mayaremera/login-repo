document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const message = document.getElementById('login-message');

  if (localStorage.getItem(email) === password) {
    message.textContent = 'Login successful!';
    message.className = 'message success';
  } else {
    message.textContent = 'Invalid email or password!';
    message.className = 'message error';
  }
});

document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const message = document.getElementById('register-message');

  if (name && email && password) {
    localStorage.setItem(email, password);
    message.textContent = 'Registration successful! Please login.';
    message.className = 'message success';
  } else {
    message.textContent = 'Invalid information! Please fill out all fields.';
    message.className = 'message error';
  }
});

function toggleForm(form) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginMessage = document.getElementById('login-message');
  const registerMessage = document.getElementById('register-message');

  if (form === 'login') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    registerMessage.textContent = '';
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    loginMessage.textContent = '';
  }
}
