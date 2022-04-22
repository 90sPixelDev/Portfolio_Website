const navParent = document.getElementById('nav-items-parent');
const menuBtn = document.getElementById('nav-toggle');
const navToggle =  document.getElementById('nav-toggle');

// Opening and closing menu by adding or removing class
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


// This is to check if anything else is pressed while menu is open to close it
document.addEventListener('click', (e) => {
    const isClickInsideElement = navToggle.contains(e.target);
    if (!isClickInsideElement) {
        navParent.classList.add('hide-menu');
        navParent.classList.remove('show-menu');
    }
});