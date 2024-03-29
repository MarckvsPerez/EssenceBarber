"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const react_1 = __importDefault(require("react"));
const style_1 = __importDefault(require("../style"));
const assets_1 = require("../assets");
const WhatsApp_1 = require("./WhatsApp");
const fa_1 = require("react-icons/fa");
const Hero = () => {
    return (react_1.default.createElement("section", { id: 'home', className: 'flex md:flex-row flex-col py-28' },
        react_1.default.createElement("div", { className: `flex-1 ${style_1.default.flexStart} flex-col xl:px-0 sm:px-16 px-6` },
            react_1.default.createElement("div", { className: 'flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2' },
                react_1.default.createElement(fa_1.FaCalendar, { className: 'text-white' }),
                react_1.default.createElement("p", { className: `${style_1.default.paragraph} ml-2` },
                    react_1.default.createElement("span", { className: 'text-white' }, "Pr\u00F3xima apertura"))),
            react_1.default.createElement("div", { className: 'flex flex-row justify-between items-center w-full' },
                react_1.default.createElement("h1", { className: 'font-montserrat font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full' },
                    "Barbershop ",
                    react_1.default.createElement("br", { className: 'sm:block' }),
                    ' ',
                    react_1.default.createElement("span", { className: 'font-extrabold text-gradient tracking-tighter' },
                        "ESSENCE ",
                        react_1.default.createElement("br", null)),
                    "Sant Cugat"),
                react_1.default.createElement("div", { className: 'ss:flex hidden md:mx-4 mr-0' },
                    react_1.default.createElement(WhatsApp_1.WhatsApp, null))),
            react_1.default.createElement("p", { className: `${style_1.default.paragraph} max-w-[470px] mt-5` }, "Nuestro equipo de expertos identifica los estilos de corte que mejor se adapten a ti. Examinamos las \u00FAltimas tendencias en cortes de cabello, t\u00E9cnicas de barber\u00EDa y estilos m\u00E1s demandados por nuestros clientes.")),
        react_1.default.createElement("div", { className: `flex-1 flex ${style_1.default.flexCenter} md:my-0 my-10 relative` },
            react_1.default.createElement("img", { src: assets_1.Wall, alt: 'billing', className: 'w-[100%] h-[100%] max-h-[900px] relative z-[5] object-contain', style: { maskImage: ' linear-gradient(black 80%, transparent)' } }),
            react_1.default.createElement("div", { className: 'absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' }),
            react_1.default.createElement("div", { className: 'absolute z-[1] w-[50%] h-[50%] rounded-full white__gradient bottom-40' }),
            react_1.default.createElement("div", { className: 'absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' })),
        react_1.default.createElement("div", { className: `ss:hidden ${style_1.default.flexCenter}` },
            react_1.default.createElement(WhatsApp_1.WhatsApp, null))));
};
exports.Hero = Hero;
