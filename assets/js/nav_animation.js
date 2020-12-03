'use strict';

function classToggle(){

	let navClicked = document.getElementById('toggleId');
	let firtSpan = document.getElementsByClassName('nav-before-after');
	let getSpans = document.getElementsByClassName('nav-toggle-styles');
	let showNav = document.getElementById('hide');
	let navLinks = document.getElementsByClassName('nav-link');

	navClicked.addEventListener('click', (e)=>{

		showNav.classList.toggle('hidden')
		firtSpan[0].classList.toggle('closed');
		getSpans[1].classList.toggle('nav-open');
		getSpans[2].classList.toggle('nav-open-inverse');

	});

	for(let i = 0; i < navLinks.length; i++){
		navLinks[i].addEventListener('click', (e)=>{

			for(let o = 0; o < navLinks.length; o++){

				navLinks[o].classList.remove('link-selected');

			}

			navLinks[i].classList.toggle('link-selected');
			e.preventDefault();

		});
	}
}

classToggle();