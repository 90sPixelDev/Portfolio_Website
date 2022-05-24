'use strict';

// VARIABLES
const navParent = document.getElementById('nav-items-parent');
const navToggle = document.querySelector('.nav-toggle');
const myName = document.querySelector('#my-name');
const toTop = document.querySelector('.to-top');
const scrollEl = document.querySelectorAll('.anim');
const emailAfter = document.querySelector('.email-after');
const infoHolder = document.querySelector('.info-holder');
const navItem = document.querySelectorAll('.nav-item');
const sectionInfo = document.querySelector('.section-info');
const sectionTitle = document.querySelectorAll('.section');
const skillList = document.querySelectorAll('.skill-list li');

const projects = [
	{
		title: 'Free The Games',
		url: '/projects/Free_the_Games/home.html',
		classes: 'free-the-games projects anim fade-anim',
		skills: ['javascript', 'api', 'sass'],
	},
	{
		title: 'Dress Up Game',
		url: '/dress_up_game.html',
		classes: 'dress-up-game projects anim fade-anim',
		skills: ['javascript'],
	},
];

// Opening and closing menu by adding or removing class
navToggle.addEventListener('click', () => {
	if (navParent.classList.contains('nav-menu')) {
		navToggle.classList.toggle('turn-nav-toggle');
		navParent.classList.toggle('show-menu');
	}
});

// This is to check if anything else is pressed while menu is open to close it
document.addEventListener('click', (e) => {
	const isClickOutsideMobileMenu = navToggle.contains(e.target);
	if (
		!isClickOutsideMobileMenu &&
		screen.width < 1007 &&
		navToggle.classList.contains('turn-nav-toggle')
	) {
		navToggle.classList.toggle('turn-nav-toggle');
		navParent.classList.toggle('show-menu');
	}
	if (e.target === infoHolder) {
		emailAfter.classList.remove('email-success');
	}
});

// PROJECT/SKILL SECTION
skillList.forEach((skill) => {
	skill.addEventListener('click', () => {
		skill.style.backgroundColor = 'black';
	});
});

const skillSelected = (skill) => {};

// FORM SECTION
window.onload = function () {
	document
		.getElementById('contact-form')
		.addEventListener('submit', function (event) {
			event.preventDefault();

			emailjs
				.sendForm(
					'service_8dcgfoh',
					'template_3vxuz3j',
					this,
					'BGaBY2gWPgF8paWZQ'
				)
				.then(
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
	sectionInfo.textContent = 'Top';
};

// ANIMATIONS ON SCROLL SECTION
let options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.5,
};
let sectionOptions = {
	root: null,
	rootMargin: '0px',
	threshold: 0.9,
};

navItem.forEach((el) => {
	el.addEventListener('click', (e) => {
		if (e.target.innerText === 'Resume') return;
		else {
			const area = e.target.textContent;
			// console.log(area);
			const areaFix = '#' + area + '-section';
			document.querySelector(areaFix.toLowerCase()).scrollIntoView({
				behavior: 'smooth',
			});
		}
	});
});

let observer = new IntersectionObserver(onChange, options);
let observeTitle = new IntersectionObserver(onSection, sectionOptions);

scrollEl.forEach((el) => {
	observer.observe(el);
});

sectionTitle.forEach((el) => {
	observeTitle.observe(el);
});

const fixTitle = (text) => {
	const newText = text.replace('-section', '');
	return newText;
};

function onSection(entries, observeTitle) {
	entries.forEach((el) => {
		const text = el.target.id;
		const newText = fixTitle(text);
		const capFirstLetter = newText[0].toUpperCase() + newText.slice(1);
		sectionInfo.textContent = capFirstLetter;
	});
}

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
