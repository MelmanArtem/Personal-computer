const accordeon = () => {
	const contents = document.querySelectorAll('.program-line__content');
	const contentDescr = document.querySelectorAll('.program-line__descr');

	contents.forEach((elem) => {
		const title = elem.querySelector('.program-line__title');
		const descr = elem.querySelector('.program-line__descr');

		descr.style.transition = 'height .4s'
		descr.style.overflow = 'hidden'

		title.addEventListener('click', () => {
			contentDescr.forEach((tab) => {
				if (tab === descr) {
					tab.style.height = tab.scrollHeight + 'px'
				} else {
					tab.style.height = 0
				}
			});
		});
	});
}
 accordeon()