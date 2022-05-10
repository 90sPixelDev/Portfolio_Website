let options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.5,
};

const navParent = document.getElementById('nav-items-parent');
const menuBtn = document.getElementById('nav-toggle');
const navToggle = document.getElementById('nav-toggle');
const myName = document.querySelector('#my-name');
const toTop = document.querySelector('.to-top');
const scrollEl = document.querySelectorAll('.anim');
const emailAfter = document.querySelector('.email-after');
const infoHolder = document.querySelector('.info-holder');

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
	const isClickOutsideMobileMenu = navToggle.contains(e.target);
	if (!isClickOutsideMobileMenu) {
		navParent.classList.add('hide-menu');
		navParent.classList.remove('show-menu');
	}
	if (e.target === infoHolder) {
		emailAfter.classList.remove('email-success');
	}
});

window.onload = function () {
	document.getElementById('contact-form').addEventListener('submit', function (event) {
		event.preventDefault();

		emailjs.sendForm('service_8dcgfoh', 'template_3vxuz3j', this, 'BGaBY2gWPgF8paWZQ').then(
			function () {
				console.log('SUCCESS!');
				emailAfter.classList.add('email-success');
			},
			function (error) {
				console.log('FAILED...', error);
			}
		);
		this.user_name.value = '';
		this.user_email.value = '';
		this.message.value = '';
	});
};

let observer = new IntersectionObserver(onChange, options);

scrollEl.forEach((el) => {
	observer.observe(el);
});

function onChange(entries, observer) {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > 0) {
			if (entry.target.classList.contains('fade-anim')) {
				entry.target.classList.add('fade-animated');
			} else if (entry.target.classList.contains('scale-anim')) {
				entry.target.classList.add('scale-animated');
			} else if (entry.target.classList.contains('translateU-anim')) {
				entry.target.classList.add('translateU-animated');
			} else if (entry.target.classList.contains('translateR-anim')) {
				entry.target.classList.add('translateR-animated');
			}
		}
	});
}

toTop.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});
