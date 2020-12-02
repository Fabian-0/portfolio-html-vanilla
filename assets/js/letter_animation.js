'use strict';

let skills = ['WEB DEVELOPMENT', 'WEB DESIGN'];
let counter = 0;

function escribir(str){
	let lettersNumber = str.split('');
	let addLetters = document.getElementById('insertLetters');
	let i=0;

	let loop =	setInterval(()=>{
		addLetters.textContent += lettersNumber[i];
		i++;
		if(i == lettersNumber.length){
			clearInterval(loop);
			borrar(str);
		}
	}, 100);

	return lettersNumber;
}

function borrar(reverseStr){
	let addLetters = document.getElementById('insertLetters');
	let i=reverseStr.length;

	let inverseLoop =	setInterval(()=>{
		addLetters.textContent = reverseStr.substring(0,i);
		if(i == 0){
			clearInterval(inverseLoop);
			alternate(skills);
		}
		i--;
	}, 100);

	return reverseStr;
}

function alternate(array){
	escribir(array[counter]);
	if(counter == (skills.length-1)){
		counter = 0;
	}else{
		counter++;
	}
	return;
}

alternate(skills);