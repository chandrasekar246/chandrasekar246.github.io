/*
	myPhoto switcher
*/
const myHeading = document.querySelector('h1');
const myPhoto = document.getElementById('myPhoto');

localStorage.setItem('name', myHeading.textContent);

const myName = 'Chandrasekar S';
const myWifeName = 'Arunadevi C';

myPhoto.onclick = function() {
	if (localStorage.getItem('name') === myName) {
		localStorage.setItem('name', myWifeName);
		myHeading.textContent = myWifeName;
		myPhoto.src = "images/aruna.jpg";
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = myName;
		myPhoto.src = "images/my-photo.jpg";
	}
}