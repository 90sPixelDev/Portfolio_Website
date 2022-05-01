const navParent = document.getElementById('nav-items-parent');
const menuBtn = document.getElementById('nav-toggle');
const navToggle = document.getElementById('nav-toggle');
const myName = document.querySelector('#my-name');
const scrollEl = document.querySelectorAll('.anim');

// Opening and closing menu by adding or removing class
menuBtn.addEventListener('click', () => {
	if (navParent.classList.contains('hide-menu')) {
		navParent.classList.add('show-menu');
		navParent.classList.remove('hide-menu');
	} else if (navParent.classList.contains('show-menu')) {
		navParent.classList.add('hide-menu');
		navParent.classList.remove('show-menu');
	}
});

// This is to check if anything else is pressed while menu is open to close it
document.addEventListener('click', (e) => {
	const isClickInsideElement = navToggle.contains(e.target);
	if (!isClickInsideElement) {
		navParent.classList.add('hide-menu');
		navParent.classList.remove('show-menu');
	}
});

// Function to check if a HTML element has been srolled a certain percentage by checking the client's height size and scrolling
// Passing in the html element, and the amount to scroll
const elementInView = (el, scrollOffset) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		(Window.innerHeight || document.documentElement.clientHeight) -
			scrollOffset
	);
};

// Making frunction to assign a class that will make the element fade in
const displayScrolledElement = (el) => {
	if (el.classList.contains('fade-anim')) {
		el.classList.add('fade-animated');
	} else if (el.classList.contains('scale-anim')) {
		el.classList.add('scale-animated');
	} else if (el.classList.contains('translateU-anim')) {
		el.classList.add('translateU-animated');
	} else if (el.classList.contains('translateR-anim')) {
		el.classList.add('translateR-animated');
	}
};

const scrollAnimManager = () => {
	scrollEl.forEach((el) => {
		if (elementInView(el, 100)) {
			displayScrolledElement(el);
		}
	});
};

window.addEventListener('scroll', () => {
	scrollAnimManager();
});
