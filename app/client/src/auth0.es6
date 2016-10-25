(() => {
  'use strict';

  const lock = new Auth0Lock(
    'jWd5ZBXe4EXRKHYODw3rdcjDucpAnIQq',
    'pepetopo.eu.auth0.com'
  );
  const btnLogout = document.getElementById('btn_logout');

  function showProfileInfo(profile) {
    document.getElementById('nickname').textContent = profile.nickname;
    btnLogout.style.display = 'block';
  }

  function retrieveProfile() {
    const idToken = localStorage.getItem('id_token');
    if (idToken) {
      lock.getProfile(idToken, (err, profile) => {
        if (err) {
          alert(
            `There was an error getting the profile: ${err.message}`
          );
        }
      // Display user information
        showProfileInfo(profile);
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

  btnLogout.addEventListener('click', () => {
    localStorage.removeItem('id_token');
    window.location.reload();
  });

  if (!localStorage.getItem('id_token')) lock.show();
  else retrieveProfile();
})();
