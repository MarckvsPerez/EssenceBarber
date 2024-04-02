import {American, Macho, STMNT, Slick, facebook, instagram, linkedin, twitter} from '../assets';

export const navLinks = [
	{
		id: 'home',
		title: 'Inicio',
	},
	{
		id: 'services',
		title: 'Servicios',
	},
	{
		id: 'location',
		title: 'Ubicación',
	},
	{
		id: 'book',
		title: 'Reservas',
	},
	{
		id: 'contact',
		title: 'Contacta',
	},
];

export const servicios = [
	{
		categoria: 'Barba',
		contenido: [
			{
				nombre: 'ARREGLAR BARBA - RITUAL TOALLA',
				descripcion: 'Definición de la barba con navaja y afeitado de barba con máquina y/o tijeras.',
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
				descripcion: 'Lavado + Corte a máquina y/o tijeras con acabado en navaja.',
				precio: '16€',
			},
		],
	},
];

export const socialMedia = [
	{
		id: 'social-media-1',
		icon: instagram,
		link: 'https://www.instagram.com/essencebarbers_/',
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
		logo: American,
	},
	{
		id: 'client-2',
		logo: Slick,
	},
	{
		id: 'client-3',
		logo: STMNT,
	},
	{
		id: 'client-4',
		logo: Macho,
	},
];

export const contact = [
	{
		id: 'Teléfono',
		value: '+34 666 666 666',
	},
	{
		id: 'Email',
		value: 'essence@gmail.com',
	},
	{
		id: 'Dirección',
		value: 'Carrer Abat Armengol, 22, 08173 Sant Cugat del Vallès, Barcelona',
	},
];
