const lock = new Auth0Lock(
  'jWd5ZBXe4EXRKHYODw3rdcjDucpAnIQq',
  'pepetopo.eu.auth0.com'
);
const btnLogin = document.getElementById('btn_login');
const btnLogout = document.getElementById('btn_logout');

function showProfileInfo(profile) {
  console.log(profile);
  document.getElementById('nickname').textContent = profile.name;
  btnLogout.style.display = 'block';
  btnLogin.style.display = 'none';
  const body = JSON.stringify({
    name: profile.name,
    id: profile.clientID,
  });
  fetch('/login', { method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body })
    .then(response => response.json())
    .then(data => { console.log(data); });
}

function retrieveProfile() {
  const idToken = localStorage.getItem('id_token');
  if (idToken) {
    lock.getProfile(idToken, (err, profile) => {
      if (err) {
        alert(`There was an error getting the profile: ${err.message}`);
      } else {
        showProfileInfo(profile);
      }
    });
  }
}

lock.on('authenticated', (authResult) => {
  lock.getProfile(authResult.idToken, (error, profile) => {
    if (error) return;
    localStorage.setItem('id_token', authResult.idToken);
  // Display user information
    showProfileInfo(profile);
  });
});

btnLogin.addEventListener('click', () => {
  lock.show();
});

btnLogout.addEventListener('click', () => {
  localStorage.removeItem('id_token');
  window.location.reload();
});

retrieveProfile();
