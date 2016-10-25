'use strict';

(function () {
  'use strict';

  var lock = new Auth0Lock('jWd5ZBXe4EXRKHYODw3rdcjDucpAnIQq', 'pepetopo.eu.auth0.com');
  var btnLogout = document.getElementById('btn_logout');

  function showProfileInfo(profile) {
    document.getElementById('nickname').textContent = profile.nickname;
    btnLogout.style.display = 'block';
  }

  function retrieveProfile() {
    var idToken = localStorage.getItem('id_token');
    if (idToken) {
      lock.getProfile(idToken, function (err, profile) {
        if (err) {
          alert('There was an error getting the profile: ' + err.message);
        }
        // Display user information
        showProfileInfo(profile);
      });
    }
  }

  lock.on('authenticated', function (authResult) {
    lock.getProfile(authResult.idToken, function (error, profile) {
      if (error) return;
      localStorage.setItem('id_token', authResult.idToken);
      // Display user information
      showProfileInfo(profile);
    });
  });

  btnLogout.addEventListener('click', function () {
    localStorage.removeItem('id_token');
    window.location.reload();
  });

  if (!localStorage.getItem('id_token')) lock.show();else retrieveProfile();
})();
//# sourceMappingURL=C:\Git\ostoslista\app\client\src\auth0.js.map