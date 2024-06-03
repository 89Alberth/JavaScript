var $menu = document.querySelectorAll('#js-menu > li');
var $subMenu = document.querySelector('.subMenu')
var i = 0;

while($menu[i]){
    $menu[i].addEventListener('click', function(){
    $subMenu.classList.toggle('menu_aberto')
    });
    i++
}


