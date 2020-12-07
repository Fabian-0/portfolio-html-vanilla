'use strict';

function classToggle(){

	let navClicked = document.getElementById('toggleId');
	let firtSpan = document.getElementsByClassName('nav-before-after');
	let getSpans = document.getElementsByClassName('nav-toggle-styles');
	let showNav = document.getElementById('hide');
	let navLinks = document.getElementsByClassName('nav-link');
	let linkToggleClass;
	let sectionVisibleArea;

	navClicked.addEventListener('click', (e)=>{

		showNav.classList.toggle('hidden');
		firtSpan[0].classList.toggle('closed');
		getSpans[1].classList.toggle('nav-open');
		getSpans[2].classList.toggle('nav-open-inverse');

	});

	for(let i = 0; i < navLinks.length; i++){
		navLinks[i].addEventListener('click', (e)=>{

			let buttonPortfolio;
			let linkId = navLinks[i].textContent.toLowerCase();
			let sectionId = document.getElementById(linkId);
			if(sectionVisibleArea == undefined && linkId == 'home') {
				sectionVisibleArea = 'home';
			}else if (sectionVisibleArea == undefined && linkId != 'home') {
				sectionId.classList.replace('section-disactivate','section-active');
				document.getElementById('home').classList.replace('section-active','section-disactivate');
				sectionVisibleArea = linkId;
			}
			if(sectionVisibleArea != linkId) {
				sectionId.classList.replace('section-disactivate','section-active');
				document.getElementById(sectionVisibleArea).classList.replace('section-active','section-disactivate');
				sectionVisibleArea = linkId;
			}


			if(linkToggleClass != undefined){
				linkToggleClass.classList.remove('link-selected');
			}

			if(linkToggleClass == undefined){
				navLinks[0].classList.remove('link-selected');
			}

			navLinks[i].classList.add('link-selected');
			linkToggleClass = navLinks[i];
			e.preventDefault();

		});
	}
}

classToggle();