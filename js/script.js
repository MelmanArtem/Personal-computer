const contents = document.querySelectorAll('.program-line__content');

contents.forEach((elem) => {
	const title = elem.querySelector('.program-line__title')

	title.onclick = () => {
			console.log(title);
	}

	console.dir(title);
});