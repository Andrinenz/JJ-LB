/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

import navigateTo from './navigate.js';

/*----------------------------------------------------------------------------*/
/* app                                                                        */
/*----------------------------------------------------------------------------*/

const register = () => {
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username-reg').value;
    const password = document.getElementById('password-reg').value;

    if (username.length < 3 || password.length < 12) {
      alert(
        'Bitte geben Sie einen Benutzernamen mit mindestens 3 Zeichen und ein Passwort mit mindestens 12 Zeichen ein.'
      );
      return;
    }

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}$/;
    if (!passwordPattern.test(password)) {
      const passwordErrorMessage = document.getElementById(
        'passwordErrorMessage'
      );
      passwordErrorMessage.textContent =
        'Das Passwort muss mindestens einen Großbuchstaben, einen Kleinbuchstaben, eine Zahl enthalten und mindestens 12 Zeichen lang sein.';
      return;
    }

    localStorage.setItem('is_logged_in', 'true');

    navigateTo('content');
    alert('Registrierung erfolgreich!');
  });
};

const login = () => {
  const registerForm = document.getElementById('loginForm');
  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username-log').value;
    const password = document.getElementById('password-log').value;

    if (username.length < 3 || password.length < 12) {
      alert(
        'Bitte geben Sie einen Benutzernamen mit mindestens 3 Zeichen und ein Passwort mit mindestens 12 Zeichen ein.'
      );
      return;
    }

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}$/;
    if (!passwordPattern.test(password)) {
      const passwordErrorMessage = document.getElementById(
        'passwordErrorMessage'
      );
      passwordErrorMessage.textContent =
        'Das Passwort muss mindestens einen Großbuchstaben, einen Kleinbuchstaben, eine Zahl enthalten und mindestens 12 Zeichen lang sein.';
      return;
    }

    localStorage.setItem('is_logged_in', 'true');

    navigateTo('content');
    alert('Login erfolgreich!');
  });
};

login();

register();

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/
