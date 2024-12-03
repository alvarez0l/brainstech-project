let cat_nav = document.querySelector('.catalog-wrap .catalog-nav');
let cat_menu = document.querySelector('.catalog-btn');

cat_menu.onclick = () => {
    cat_nav.classList.toggle('active');
};