"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKey = exports.contact = exports.clients = exports.socialMedia = exports.services = exports.navLinks = void 0;
const assets_1 = require("../assets");
exports.navLinks = [
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
exports.services = [
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
                descripcion: 'Afeitado a navaja. Preparación con espuma y toalla caliente terminada con toalla fría y after-shave.',
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
exports.socialMedia = [
    {
        id: 'social-media-1',
        icon: assets_1.instagram,
        link: 'https://www.instagram.com/essencebarbers_/',
    },
    {
        id: 'social-media-2',
        icon: assets_1.facebook,
        link: 'https://www.facebook.com/',
    },
    {
        id: 'social-media-3',
        icon: assets_1.twitter,
        link: 'https://www.twitter.com/',
    },
    {
        id: 'social-media-4',
        icon: assets_1.linkedin,
        link: 'https://www.linkedin.com/',
    },
];
exports.clients = [
    {
        id: 'client-1',
        logo: assets_1.American,
    },
    {
        id: 'client-2',
        logo: assets_1.Slick,
    },
    {
        id: 'client-3',
        logo: assets_1.STMNT,
    },
    {
        id: 'client-4',
        logo: assets_1.Macho,
    },
];
exports.contact = [
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
exports.apiKey = 'AIzaSyCdjDulh7UewQupBjH6PA5PCntHLf9jCD8';
