const mainContainer = document.querySelector('.home-page .div');

window.addEventListener('load', function () {
  mainContainer.style.height = '100vh';
  mainContainer.style.overflow = 'auto';
});

window.addEventListener('scroll', function () {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos + window.innerHeight >= document.body.scrollHeight) {
    bottomTabs.classList.remove('show-nav');
  } else {
    bottomTabs.classList.add('show-nav');
  }
});