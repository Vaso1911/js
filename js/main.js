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

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
	menuButton.classList.toggle('menu-button-active');
	menu.classList.toggle('header-active');
})
 */

const getElemet = (tagName, classNames, attributes) => {
	const element = document.createElement(tagName);

	if(classNames) {
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

const createHeader = (param) => {
    const header = getElemet('header',);
	const container = getElemet('div', ['container']);
	const wrapper = getElemet('div', ['header']);

    if (param.header.logo) {
		const logo = getElemet('img', ['logo'], {
			src: param.header.logo,
			alt: 'Логотип ' + param.title,
		});
	
		wrapper.append(logo);
	}

    if(param.header.menu) {
		const menuWrapper = getElemet('nav', ['menu-list']);
		const menuLinks = param.header.menu.map(items => {
		const menuLink = getElemet('a', ['menu-link']);
	
		menuLink.textContent = items.title;
		menuLink.href = items.link;

		return menuLink
		});
		console.log(menuLinks);
		menuWrapper.append(...menuLinks);
		wrapper.append(menuWrapper);
	}



if(param.header.social) {
	const socialWrapper = getElemet('div', ['social']);
	const allSocial = param.header.social.map(item => {
		const socialLink = getElemet('a', ['social-link']);
		socialLink.append(getElemet('img', [], {
			src:item.image,
			alt:item.title,
		}));

		socialLink.href = item.link;

		return socialLink;
	});
	console.log(allSocial);
	socialWrapper.append(...allSocial);
	wrapper.append(socialWrapper);
}







    header.append(container);
    container.append(wrapper)


	return header;
};

const movieConstructor = (selector, options) => {
    
	const app = document.querySelector(selector);
	app.classList.add('body-app');

    if(options.header) {
		
		app.append(createHeader(options));
	}
}



movieConstructor('.app', {
	title: 'Ведьмак',
	header: {
		logo: 'witcher/logo.png',
		social: [
			{
				title:'Twitter',
				link:'https://twitter.com',
				image:'witcher/social/twitter.svg',
			},
			{
				title:'Instagram',
				link:'https://instagram.com',
				image:'witcher/social/instagram.svg',
			},
			{
				title:'Facebook',
				link:'https://facebook',
				image:'witcher/social/facebook.svg',
			}
		],
		menu: [
			{
				title:'Описание',
				link:'#',
			},
			{
				title:'Трейлер',
				link:'#',
			},
			{
				title:'Отзывы',
				link:'#',
			},
		]
	}
});


