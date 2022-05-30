'use strict';

// VARIABLES
const navParent = document.getElementById('nav-items-parent');
const navToggle = document.querySelector('.nav-toggle');
const myName = document.querySelector('.my-name');
const toTop = document.querySelector('.to-top');
const scrollEl = document.querySelectorAll('.anim');
const emailAfter = document.querySelector('.email-after');
const infoHolder = document.querySelector('.info-holder');
const navItem = document.querySelectorAll('.nav-item');
const sectionInfo = document.querySelector('.section-info');
const sectionTitle = document.querySelectorAll('.section');
const skillList = document.querySelectorAll('.skill-list li');
const skillsParent = document.querySelector('.skill-list');
const projectGrid = document.querySelector('#project-grid');
const themeBtn = document.querySelector('.theme-btn');
const r = document.querySelector(':root');
const themeSymbole = document.querySelector('.sun-and-moon');

// SELECTORS FOR DOM ELEMENTS TO CHANGE THEME
const bg = document.querySelector('body');
const mobileMenu = document.querySelector('.mobile-menu');
const sectionTop = document.querySelector('.section-top-info');
const objective = document.querySelector('.objective');
const interests = document.querySelector('.interests');
const background = document.querySelector('.background');
const bgPara = document.querySelector('.bg-para');
const bioSection = document.querySelector('.bio-section');

const skills = ['react', 'api', 'javascript', 'sass', 'tailwind', 'nodejs'];
let skillsSelected = [];

const projects = [
	{
		title: 'Mini Expense Tracker',
		url: 'https://lienfont-react-expense-tracker.vercel.app',
		class: 'mini-expense-tracker',
		skills: ['javascript', 'react', 'tailwind'],
	},
	{
		title: 'Free The Games',
		url: '/projects/Free_the_Games/home.html',
		class: 'free-the-games',
		skills: ['javascript', 'api', 'sass'],
	},
	{
		title: 'Dress Up Game',
		url: '/dress_up_game.html',
		class: 'dress-up-game',
		skills: ['javascript'],
	},
];

if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'dark');

themeBtn.addEventListener('click', () => {
	if (localStorage.getItem('theme') === 'light') {
		localStorage.setItem('theme', 'dark');
		changeTheme();
	} else {
		localStorage.setItem('theme', 'light');
		changeTheme();
	}
});

const changeTheme = () => {
	if (localStorage.getItem('theme') === 'light') {
		// THEME BTN
		themeSymbole.classList.add('light-theme');
		bg.classList.add('bg-light');

		// HEADER SECTION
		mobileMenu.classList.add('light-mobile-menu');
		sectionTop.classList.add('light-section-top');
		sectionInfo.classList.add('light-section-top');
		navItem.forEach((el) => {
			el.classList.add('light-nav-item');
		});

		// BASIC INFO SECTION
		myName.classList.add('light-my-name');
		objective.classList.add('light-objective');
		interests.classList.add('light-interests');

		// BIO SECTION
		bioSection.classList.add('light-bio-section');
		background.classList.add('light-background');
		bgPara.classList.add('light-bg-para');
	} else {
		// THEME BTN
		themeSymbole.classList.remove('light-theme');
		bg.classList.remove('bg-light');

		// HEADER SECTION
		mobileMenu.classList.remove('light-mobile-menu');
		sectionTop.classList.remove('light-section-top');
		sectionInfo.classList.remove('light-section-top');
		navItem.forEach((el) => {
			el.classList.remove('light-nav-item');
		});

		// BASIC INFO SECTION
		myName.classList.remove('light-my-name');
		objective.classList.remove('light-objective');
		interests.classList.remove('light-interests');

		// BIO SECTION
		bioSection.classList.remove('light-bio-section');
		background.classList.remove('light-background');
		bgPara.classList.remove('light-bg-para');
	}
};

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
document.addEventListener('DOMContentLoaded', () => {
	changeTheme();
	projects.forEach((project) => {
		createProject(project);
	});
});

let currentProjectList = [];
let currentSelectedSKills = [];

const createProject = (project) => {
	const projParent = document.createElement('div');
	projParent.classList.add('project-parent');
	projectGrid.append(projParent);

	const proj = document.createElement('a');

	proj.classList.add(project.class);
	proj.classList.add('project');
	proj.classList.add('anim');
	proj.classList.add('fade-anim');

	proj.href = project.url;
	proj.target = '_blank';
	proj.rel = 'noopener noreferrer';

	projParent.append(proj);

	const projTitle = document.createElement('p');
	projTitle.textContent = project.title;
	projTitle.classList.add('project-title');

	proj.append(projTitle);
};

// CREATE ALL PROJECTS WHEN NO SKILLS SELECTED
const noSkillSelected = () => {
	if (skillsSelected.length === 0) return true;
	else return false;
};

const createProjectElements = () => {
	projectGrid.textContent = '';
	if (!currentProjectList[0] && noSkillSelected()) {
		projects.forEach((project) => {
			createProject(project);
		});
	} else {
		currentProjectList.forEach((project) => {
			createProject(project);
		});
	}
};

// Creating the Project Elements based on skill selection
const createFilteredProjects = (skillsSelected) => {
	currentProjectList = [];

	projects.forEach((project) => {
		const containsAllSkills = skillsSelected.every((skill) => {
			return project.skills.includes(skill.textContent);
		});
		console.log(containsAllSkills);

		if (!currentProjectList.includes(project) && containsAllSkills) {
			currentProjectList.push(project);
			console.log(
				`${project} contains all selected skills: ${containsAllSkills}`
			);
		}
	});

	createProjectElements(currentProjectList);
};

// removing a skill from the selected skill list
const removeSkill = (skillToRemove) => {
	skillsSelected.filter((skill) => {
		skill !== skillToRemove.textContent;
	});
};

const filterManager = (e) => {
	const skill = e.target.textContent;

	if (!skills[skill]) {
		skills[skill] = true;
		skillsSelected.push(e.target);
		e.target.classList.add('skill-selected');
	} else {
		skills[skill] = false;
		skillsSelected = skillsSelected.filter((skill) => {
			return e.target !== skill;
		});
		e.target.classList.remove('skill-selected');
	}

	createFilteredProjects(skillsSelected);
};

document.addEventListener('DOMContentLoaded', () => {
	skillsListCreation();
});

const skillsListCreation = () => {
	skills.forEach((skill) => {
		const skillEl = document.createElement('li');
		skillEl.textContent = skill;

		skillsParent.append(skillEl);

		skillEl.addEventListener('click', (e) => {
			filterManager(e);
		});
	});
};

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
