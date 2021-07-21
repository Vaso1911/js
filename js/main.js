/*
new Swiper('.swiper-container', {
	loop: true,
	navigation: {
		nextEl: '.arrow',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		541: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	}
});
*/



const getElemet = (tagName, classNames, attributes) => {
	const element = document.createElement(tagName);

	if (classNames) {
		element.classList.add(...classNames)
	}

	if (attributes) {
		for (const attribute in attributes) {
			console.log(attribute);
			element[attribute] = attributes[attribute];
		}
	}

	return element;
};

// ДЗ-2
const createHeader = ({ title, header: { logo, menu, social, burger } }) => {
	const header = getElemet('header',);
	const container = getElemet('div', ['container']);
	header.append(container);
	const wrapper = getElemet('div', ['header']);
	container.append(wrapper);

	if (logo) {
		const logo = getElemet('img', ['logo'], {
			src: 'witcher/logo.png',
			alt: 'Логотип ' + title,
		});

		wrapper.append(logo);
	}

	if (menu) {
		const nav = getElemet('nav', ['menu-list']);
		const allMenuLink = menu.map(item => {
			const link = getElemet('a', ['menu-link']);

			link.textContent = item.title,
				link.href = item.link

			return link
		});



		nav.append(...allMenuLink);
		wrapper.append(nav);
	}



	if (social) {
		const socialWrapper = getElemet('div', ['social']);
		const allSocial = social.map(item => {
			const socialLink = getElemet('a', ['social-link']);
			socialLink.append(getElemet('img', [], {
				src: item.image,
				alt: item.title,
			}));

			socialLink.href = item.link;

			return socialLink;
		});
		console.log(allSocial);
		socialWrapper.append(...allSocial);
		wrapper.append(socialWrapper);
	}


	if (burger) {
		const burgerButton = getElemet('button', ['menu-button']);
		container.append(burgerButton);
	}

	header.append(container);
	container.append(wrapper)

	return header;
};

const createMain = ({ title, main: { genre, rating, description, trailer } }) => {

	const main = getElemet('main');
	const container = getElemet('div', ['container']);
	main.append(container);
	const wrapper = getElemet('div', ['main-content']);
	container.append(wrapper);
	const content = getElemet('div', ['content']);
	wrapper.append(content);

	if (genre) {
		const genreSpan = getElemet('span', ['genre', 'animated', 'fadeInRight'],
			{ textContent: genre }
		);

		content.append(genreSpan)
	}

	if (rating) {
		const ratingBlock = getElemet('div', ['raiting', 'animated', 'fadeInRight']);
		const ratingStars = getElemet('div', ['rating-stars']);
		const ratingNumber = getElemet('div', ['rating-number'], {
			textContent: `${rating}/10`
		});

		for (let i = 0; i < 10; i++) {
			const star = getElemet('img', ['star'], {
				alt: i ? '' : `Рейтинг ${rating} из 10`,
				src: i < rating ? 'img/star.svg' : 'img/star-o.svg'
			});
			ratingStars.append(star);
		}

		ratingBlock.append(ratingStars, ratingNumber);
		content.append(ratingBlock);

	}

	content.append(getElemet('h1', ['main-title', 'animated', 'fadeInRight'],
		{ textContent: title }
	));

	if (description) {
		content.append(getElemet('p', ['main-description', 'animated', 'fadeInRight'],
			{ textContent: description },
		));
	}

	if (trailer) {
		const youtubeLink = getElemet('a',
			['button', 'animated', 'fadeInRight', 'youtube-modal'],
			{
				href: trailer,
				textContent: 'Смотреть трейлер',
			}
		);

		const youtubeImgLink = getElemet('a', ['play', 'youtube-modal'],
			{
				href: trailer,
				ariaLabel: 'Смотреть трейлер',
			}
		);

		const iconPlay = getElemet('img', ['play-img'],
			{
				src: 'img/play.svg',
				alt: '',
				ariaHidden: true,
			}
		)


		content.append(youtubeLink);
		youtubeImgLink.append(iconPlay);
		wrapper.append(youtubeImgLink);

	}




	return main;
};




const movieConstructor = (selector, options) => {

	const app = document.querySelector(selector);
	app.classList.add('body-app');

	app.style.backgroundImage = options.background ?
		`url("${options.background}")` : '';



	document.link = options.link;
	document.title = options.title;


	if (options.header) {

		app.append(createHeader(options));
	}

	if (options.main) {
		app.append(createMain(options))
	}
}


movieConstructor('.app', {

	// не получилось((
	// link: '/witcher/logo.png',
	// link: [
	// 	{

	// 		rel: 'shortcut icon',
	// 		size: '3x3',
	// 		type: 'image/png',
	// 		href: 'witcher/logo.png',

	// 	}
	// ],
	title: 'Ведьмак',
	background: 'witcher/background.jpg',
	header: {
		logo: 'witcher/logo.png',
		social: [
			{
				title: 'Twitter',
				link: 'https://twitter.com',
				image: 'witcher/social/twitter.svg',
			},
			{
				title: 'Instagram',
				link: 'https://instagram.com',
				image: 'witcher/social/instagram.svg',
			},
			{
				title: 'Facebook',
				link: 'https://facebook',
				image: 'witcher/social/facebook.svg',
			}
		],
		menu: [
			{
				title: 'Описание',
				link: '#',
			},
			{
				title: 'Трейлер',
				link: '#',
			},
			{
				title: 'Отзывы',
				link: '#',
			},
		],
		burger: [
			{
				button: '',
			}
		]




	},
	main: {
		genre: '2019,фэнтези',
		rating: 8,
		description: ' Ведьмак Геральт, мутант и убийца чудовищ, на своей верной лошади по кличке Плотва путешествует по Континенту. За тугой мешочек чеканных монет этот мужчина избавит вас от всякой настырной нечисти — хоть от чудищ болотных, оборотней и даже заколдованных принцесс.',
		trailer: 'https://www.youtube.com/watch?v=P0oJqfLzZzQ',
	},
});

// ДЗ-2
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
	menuButton.classList.toggle('menu-button-active');
	menu.classList.toggle('header-active');
});




