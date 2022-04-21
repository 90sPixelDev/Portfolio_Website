const navParent = document.getElementById('nav-items-parent');
const menuBtn = document.getElementById('nav-toggle');

menuBtn.addEventListener('click', ()=> {
    if (navParent.classList.contains('hide-menu')) {
        navParent.classList.add('show-menu');
        navParent.classList.remove('hide-menu');
    }
    else if (navParent.classList.contains('show-menu')) {
        navParent.classList.add('hide-menu');
        navParent.classList.remove('show-menu');
    }
})