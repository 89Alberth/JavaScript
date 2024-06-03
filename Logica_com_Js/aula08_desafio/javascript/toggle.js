var $menu = document.querySelector('.header-nav__hamburgger');
var $html = document.querySelector('html');

$menu.addEventListener('click', function(){
    $html.classList.toggle('menu-opened')
})
