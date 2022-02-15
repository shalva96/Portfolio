const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;


console.log(mainElementWidth);
console.log(mainElementHeight);


function setScrolltoOptionsAbout() {
	window.scrollTo({
		top: 75,
		left: 0,
		behavior: "smooth"
	})
}


function setScrolltoOptionsProject() {
	window.scrollTo({
		top: 1100,
		left: 0,
		behavior: "smooth"
	})
}


function setScrolltoOptionsContact() {
	window.scrollTo({
		top: 10000,
		left: 0,
		behavior: "smooth"
	})
}

