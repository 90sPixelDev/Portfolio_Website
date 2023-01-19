'use strict';

// VARIABLES
const navParent = document.querySelector('.nav-items-parent');
const navToggle = document.querySelector('.nav-toggle');
const myName = document.querySelector('.my-name');
const scrollEl = document.querySelectorAll('.anim');
const emailAfter = document.querySelector('.email-after');
const infoHolder = document.querySelector('.info-holder');
const navItem = document.querySelectorAll('.nav-item');
const sectionInfo = document.querySelector('.section-info');
const sectionTitle = document.querySelectorAll('.section');
const skillsParent = document.querySelector('.skill-list');
const projectGrid = document.querySelector('.project-grid');
const skillDesc = document.querySelectorAll('.skill-desc');
let noProjectsDisplay = false;

// SELECTORS FOR DOM ELEMENTS TO CHANGE THEME
const bg = document.querySelector('body');
const themeBtn = document.querySelector('.theme-btn');
const themeSymbol = document.querySelector('.sun-and-moon');
const sunAndMoon = document.querySelector('.sun-and-moon');
const mobileMenu = document.querySelector('.mobile-menu');
const sectionTop = document.querySelector('.section-top-info');
const objective = document.querySelector('.objective');
const interests = document.querySelector('.interests');
// const bio = document.querySelector('.bio');
// const bgPara = document.querySelector('.bg-para');
// const bioSection = document.querySelector('.bio-section');
const skillsEl = document.querySelector('.skills');
const skillDiv = document.querySelectorAll('.skill-div');
const projectText = document.querySelector('.project-text');
const filterArea = document.querySelector('.filter-area');
let skillList;
const contactSection = document.querySelector('#contact-section');
const contactTitle = document.querySelector('.contact-title');
const formElement = document.querySelector('form');
const toTop = document.querySelector('.to-top');
const socialMedia = document.querySelector('.social-media');
const socialMediaLink = document.querySelectorAll('.social-media a');
const footerEnd = document.querySelector('.end');
const navMenu = document.querySelector('.nav-menu');

const skills = [
	'react',
	'api',
	'firebase',
	'javascript',
	'sass',
	'auth0',
	'typescript',
	'tailwind',
	'react-router',
];
let skillsSelected = [];

const projects = [
	{
		title: 'RP Rooms (Work In Progress)',
		url: 'https://rp-rooms.vercel.app/login',
		class: 'rp-rooms',
		skills: [
			'typescript',
			'react',
			'tailwind',
			'firebase',
			'react-router',
		],
	},
	{
		title: 'MinExpense',
		url: 'https://lienfont-react-expense-tracker.vercel.app',
		class: 'mini-expense-tracker',
		skills: ['javascript', 'react', 'firebase', 'tailwind', 'auth0'],
	},
	{
		title: 'Free The Games',
		url: '/projects/Free_the_Games/home.html',
		class: 'free-the-games',
		skills: ['javascript', 'api', 'sass'],
	},
	//? PROJECT ISN'T AS WELL POLISHED AS SOME OF THE OTHERS
	// {
	// 	title: 'Simple Project Timer',
	// 	url: 'https://simple-project-timer.vercel.app',
	// 	class: 'simple-project-timer',
	// 	skills: ['javascript', 'react', 'tailwind', 'firebase'],
	// },
	// TODO MAKE THE CODEBASE FOR THE HTML BETTER
	// {
	// 	title: 'Dress Up Game',
	// 	url: '/dress_up_game.html',
	// 	class: 'dress-up-game',
	// 	skills: ['javascript'],
	// },
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
		themeBtn.classList.add('light-theme-btn');
		themeSymbol.classList.add('light-theme');
		sunAndMoon.classList.add('light-sun-and-moon');
		bg.classList.add('bg-light');

		// HEADER SECTION
		mobileMenu.classList.add('light-mobile-menu');
		sectionTop.classList.add('light-section-top');
		sectionInfo.classList.add('light-section-top');
		navItem.forEach((el) => {
			el.classList.add('light-nav-item');
		});
		navMenu.classList.add('light-nav-menu');

		// BASIC INFO SECTION
		myName.classList.add('light-my-name');
		objective.classList.add('light-objective');
		interests.classList.add('light-interests');

		// BIO SECTION
		// bioSection.classList.add('light-bio-section');
		// bio.classList.add('light-background');
		// bgPara.classList.add('light-bg-para');

		// SKILLS SECTION
		skillsEl.classList.add('light-skills');
		skillDiv.forEach((el) => {
			el.classList.add('light-skill-div');
		});

		// PROJECT SECTION
		projectText.classList.add('light-project-text');
		filterArea.classList.add('light-filter-area');
		skillList.forEach((el) => {
			if (el.classList.contains('skill-selected')) {
				el.classList.add('light-skill-selected');
				el.classList.remove('skill-selected');
			}
			el.classList.remove('skill');
			el.classList.add('light-skill-list');
		});
		projectGrid.classList.add('light-project-grid');

		// CONTACT SECTION
		contactSection.classList.add('light-contact-section');
		contactTitle.classList.add('light-contact-title');
		formElement.classList.add('light-form');

		// FOOTER SECTION
		toTop.classList.add('light-to-top');
		socialMedia.classList.add('light-social-media');
		socialMedia.classList.remove('dark-sm');
		socialMediaLink.forEach((el) => {
			el.classList.remove('dark-a');
		});
		footerEnd.classList.add('light-credit');
		footerEnd.classList.remove('end-color');
	} else {
		// THEME BTN
		themeBtn.classList.remove('light-theme-btn');
		themeSymbol.classList.remove('light-theme');
		sunAndMoon.classList.remove('light-sun-and-moon');
		bg.classList.remove('bg-light');

		// HEADER SECTION
		mobileMenu.classList.remove('light-mobile-menu');
		sectionTop.classList.remove('light-section-top');
		sectionInfo.classList.remove('light-section-top');
		navItem.forEach((el) => {
			el.classList.remove('light-nav-item');
		});
		navMenu.classList.remove('light-nav-menu');

		// BASIC INFO SECTION
		myName.classList.remove('light-my-name');
		objective.classList.remove('light-objective');
		interests.classList.remove('light-interests');

		// BIO SECTION
		// bioSection.classList.remove('light-bio-section');
		// bio.classList.remove('light-background');
		// bgPara.classList.remove('light-bg-para');

		// SKILLS SECTION
		skillsEl.classList.remove('light-skills');
		skillDiv.forEach((el) => {
			el.classList.remove('light-skill-div');
		});

		// PROJECT SECTION
		projectText.classList.remove('light-project-text');
		filterArea.classList.remove('light-filter-area');
		skillList.forEach((el) => {
			if (el.classList.contains('light-skill-selected')) {
				el.classList.add('skill-selected');
				el.classList.remove('light-skill-selected');
			}
			el.classList.add('skill');
			el.classList.remove('light-skill-list');
		});
		projectGrid.classList.remove('light-project-grid');

		// CONTACT SECTION
		contactTitle.classList.remove('light-contact-title');
		contactSection.classList.remove('light-contact-section');
		formElement.classList.remove('light-form');

		// FOOTER SECTION
		toTop.classList.remove('light-to-top');
		socialMedia.classList.remove('light-social-media');
		socialMedia.classList.add('dark-sm');
		socialMediaLink.forEach((el) => {
			el.classList.add('dark-a');
		});
		footerEnd.classList.remove('light-credit');
		footerEnd.classList.add('end-color');
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
	projects.forEach((project) => {
		createProject(project);
	});
	skillsListCreation();
	skillList = skillsParent.querySelectorAll('li');

	changeTheme();
});

let currentProjectList = [];
let currentSelectedSKills = [];

const createProject = (project) => {
	const projParent = document.createElement('div');

	projParent.style.opacity = 0;

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

	let slideSteps = 20;
	let steps = 0;
	const timer = setInterval(function () {
		steps++;
		slideSteps -= 1;
		projParent.style.transform = `translateY(${slideSteps}px)`;
		projParent.style.opacity = 0.05 * steps;
		if (projParent.style.opacity >= 1) {
			clearInterval(timer);
		}
	}, 0);

	// timer();
};

// CREATE ALL PROJECTS WHEN NO SKILLS SELECTED
const noSkillSelected = () => {
	if (skillsSelected.length === 0) return true;
	else return false;
};

const createProjectElements = () => {
	projectGrid.textContent = '';
	projectGrid.style.display = 'grid';
	projectGrid.style.padding = '2em 1em';
	if (!currentProjectList[0] && noSkillSelected()) {
		projects.forEach((project) => {
			createProject(project);
			project.style.cursor = 'pointer';
		});
	} else if (currentProjectList.length <= 0 && skillsSelected.length > 0) {
		noProjectsDisplay = true;

		const noProjDisplay = document.createElement('p');
		noProjDisplay.textContent =
			'No projects available that use all skills selected. Please select another range of skills.';
		noProjDisplay.style.color = '#fff';
		noProjDisplay.style.textAlign = 'center';
		projectGrid.style.display = 'block';
		projectGrid.appendChild(noProjDisplay);
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
		if (!currentProjectList.includes(project) && containsAllSkills) {
			currentProjectList.push(project);
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
	let skillClass;
	if (localStorage.getItem('theme') === 'dark') {
		skillClass = 'skill-selected';
	} else {
		skillClass = 'light-skill-selected';
		e.target.classList.remove('skill');
	}

	if (!skills[skill]) {
		skills[skill] = true;
		skillsSelected.push(e.target);

		e.target.classList.add(skillClass);
	} else {
		skills[skill] = false;
		skillsSelected = skillsSelected.filter((skill) => {
			return e.target !== skill;
		});
		e.target.classList.remove(skillClass);
	}

	createFilteredProjects(skillsSelected);
};

const skillsListCreation = () => {
	skills.forEach((skill) => {
		const skillEl = document.createElement('li');
		skillEl.textContent = skill;
		if (localStorage.getItem('theme') === 'dark') {
			skillEl.classList.add('skill');
		}
		skillEl.style.cursor = 'pointer';

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

// SKILL DESCRIPTION TOOLTIP POSITIONING
const skillDescPos = () => {
	const skillDesc_Rect = skillDesc.getBoundingClientRect();
	console.log(skillDesc_Rect);
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

function onSection(entries) {
	entries.forEach((el) => {
		const text = el.target.id;
		const newText = fixTitle(text);
		const capFirstLetter = newText[0].toUpperCase() + newText.slice(1);
		sectionInfo.textContent = capFirstLetter;
	});
}

function onChange(entries) {
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
