import {
	people01,
	people02,
	people03,
	facebook,
	instagram,
	linkedin,
	twitter,
	airbnb,
	binance,
	coinbase,
	dropbox,
	send,
	shield,
	star,
} from '../assets';

export const navLinks = [
	{
		id: 'inicio',
		title: 'Inicio',
	},
	{
		id: 'rates',
		title: 'Precios',
	},
	{
		id: 'ubicacion',
		title: 'Ubicación',
	},
	{
		id: 'nosotros',
		title: 'Nosotros',
	},
	{
		id: 'colaboradores',
		title: 'Colaboradores',
	},
];

export const services = [
	{
		categoria: 'Barba',
		contenido: [
			{
				nombre: 'ARREGLAR BARBA - RITUAL TOALLA',
				descripcion:
					'Definición de la barba con navaja y afeitado de barba con máquina y/o tijeras.',
				precio: '14€',
			},
			{
				nombre: 'ARREGLAR BARBA',
				descripcion: 'Arreglar barba con perfilado de contornos en navaja.',
				precio: '12€',
			},
			{
				nombre: 'AFEITAR',
				descripcion:
					'Afeitado a navaja. Preparación con espuma y toalla caliente terminada con toalla fría y after-shave.',
				precio: '15€',
			},
		],
	},
	{
		categoria: 'Facial',
		contenido: [
			{
				nombre: 'NARIZ',
				descripcion: 'Afeitado de vello en la nariz.',
				precio: '2€',
			},
			{
				nombre: 'CEJAS',
				descripcion: 'Contorneado de cejas.',
				precio: '3€',
			},
			{
				nombre: 'OREJAS',
				descripcion: 'Rasurado en la zona de las orejas.',
				precio: '2€',
			},
		],
	},
	{
		categoria: 'Cabello',
		contenido: [
			{
				nombre: 'LAVAR + PEINAR',
				descripcion: 'Lavado + peinado cuanto más te guste.',
				precio: '10€',
			},
			{
				nombre: 'LAVAR + CORTAR',
				descripcion:
					'Lavado + Corte a máquina y/o tijeras con acabado en navaja.',
				precio: '16€',
			},
		],
	},
];

export const features = [
	{
		id: 'feature-1',
		icon: star,
		title: 'Rewards',
		content:
			'The best credit cards offer some tantalizing combinations of promotions and prizes',
	},
	{
		id: 'feature-2',
		icon: shield,
		title: '100% Secured',
		content:
			'We take proactive steps make sure your information and transactions are secure.',
	},
	{
		id: 'feature-3',
		icon: send,
		title: 'Balance Transfer',
		content:
			'A balance transfer credit card can save you a lot of money in interest charges.',
	},
];

export const feedback = [
	{
		id: 'feedback-1',
		content:
			'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
		name: 'Herman Jensen',
		title: 'Founder & Leader',
		img: people01,
	},
	{
		id: 'feedback-2',
		content:
			'Money makes your life easier. If you are lucky to have it, you are lucky.',
		name: 'Steve Mark',
		title: 'Founder & Leader',
		img: people02,
	},
	{
		id: 'feedback-3',
		content:
			'It is usually people in the money business, finance, and international trade that are really rich.',
		name: 'Kenn Gallagher',
		title: 'Founder & Leader',
		img: people03,
	},
];

export const footerLinks = [
	{
		title: 'Useful Links',
		links: [
			{
				name: 'Content',
				link: 'https://www.hoobank.com/content/',
			},
			{
				name: 'How it Works',
				link: 'https://www.hoobank.com/how-it-works/',
			},
			{
				name: 'Create',
				link: 'https://www.hoobank.com/create/',
			},
			{
				name: 'Explore',
				link: 'https://www.hoobank.com/explore/',
			},
			{
				name: 'Terms & Services',
				link: 'https://www.hoobank.com/terms-and-services/',
			},
		],
	},
	{
		title: 'Community',
		links: [
			{
				name: 'Help Center',
				link: 'https://www.hoobank.com/help-center/',
			},
			{
				name: 'Partners',
				link: 'https://www.hoobank.com/partners/',
			},
			{
				name: 'Suggestions',
				link: 'https://www.hoobank.com/suggestions/',
			},
			{
				name: 'Blog',
				link: 'https://www.hoobank.com/blog/',
			},
			{
				name: 'Newsletters',
				link: 'https://www.hoobank.com/newsletters/',
			},
		],
	},
	{
		title: 'Partner',
		links: [
			{
				name: 'Our Partner',
				link: 'https://www.hoobank.com/our-partner/',
			},
			{
				name: 'Become a Partner',
				link: 'https://www.hoobank.com/become-a-partner/',
			},
		],
	},
];

export const socialMedia = [
	{
		id: 'social-media-1',
		icon: instagram,
		link: 'https://www.instagram.com/',
	},
	{
		id: 'social-media-2',
		icon: facebook,
		link: 'https://www.facebook.com/',
	},
	{
		id: 'social-media-3',
		icon: twitter,
		link: 'https://www.twitter.com/',
	},
	{
		id: 'social-media-4',
		icon: linkedin,
		link: 'https://www.linkedin.com/',
	},
];

export const clients = [
	{
		id: 'client-1',
		logo: airbnb,
	},
	{
		id: 'client-2',
		logo: binance,
	},
	{
		id: 'client-3',
		logo: coinbase,
	},
	{
		id: 'client-4',
		logo: dropbox,
	},
];
