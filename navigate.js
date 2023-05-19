/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
/* navigate                                                                   */
/*----------------------------------------------------------------------------*/

export const navigateTo = (pageId) => {
  let pages = document.getElementsByClassName('page');
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  let page = document.getElementById(pageId);
  if (page) {
    page.style.display = 'block';
  }
};

document.getElementById('homeLink').addEventListener('click', (e) => {
  e.preventDefault();
  navigateTo('home');
});
document.getElementById('contentLink').addEventListener('click', (e) => {
  e.preventDefault();
  const loggedIn = localStorage.getItem('is_logged_in');
  if (loggedIn === 'true') {
    navigateTo('content');
  } else {
    navigateTo('home');
  }
});

document.getElementById('registerLink').addEventListener('click', (e) => {
  e.preventDefault();
  navigateTo('register');
});

document.getElementById('loginLink').addEventListener('click', (e) => {
  e.preventDefault();
  navigateTo('login');
});

window.addEventListener('load', () => {
  const loggedIn = localStorage.getItem('is_logged_in');
  if (loggedIn === 'true') {
    navigateTo('content');
  } else {
    navigateTo('home');
  }
});

window.onclick = (event) => {
  var dropdownButton = document.querySelector('.dropdown button');
  var searchInput = document.querySelector('.search-input');

  if (event.target !== dropdownButton && event.target !== searchInput) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
};

window.onclick = (event) => {
  var dropdownButton = document.querySelector('.dropdown-class button');
  var searchInput = document.querySelector('.search-input-class');

  if (event.target !== dropdownButton && event.target !== searchInput) {
    var dropdowns = document.getElementsByClassName('dropdown-content-class');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
};

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/
export default navigateTo;
