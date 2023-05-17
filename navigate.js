/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
/* navigate                                                                   */
/*----------------------------------------------------------------------------*/

const navigateTo = (pageId) => {
  var pages = document.getElementsByClassName('page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  var page = document.getElementById(pageId);
  if (page) {
    page.style.display = 'block';
  }
};

document.getElementById('homeLink').addEventListener('click', (e) => {
  e.preventDefault();
  navigateTo('home');
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
  navigateTo('home');
});

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/
export default navigateTo;
