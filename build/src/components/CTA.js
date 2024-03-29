"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CtaComponent = void 0;
const react_1 = __importDefault(require("react"));
const style_1 = __importDefault(require("../style"));
const Button_1 = require("./Button");
const CtaComponent = () => {
    const redirect = () => {
        window.open('https://booksy.com/es-es/18076_barber-essence_barberia_28176_granada', '_blank');
    };
    return (react_1.default.createElement("section", { id: 'book', className: 'pt-28' },
        react_1.default.createElement("h1", { className: 'text-white text-6xl font-montserrat font-bold', style: { textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px' } }, "Reservas"),
        react_1.default.createElement("div", { className: `${style_1.default.flexCenter} ${style_1.default.marginY} ${style_1.default.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow` },
            react_1.default.createElement("div", { className: 'flex-1 flex flex-col' },
                react_1.default.createElement("h2", { className: style_1.default.heading2 }, "\u00A1Asegura tu Estilo!"),
                react_1.default.createElement("p", { className: `${style_1.default.paragraph} max-w-[470px] mt-5` }, "No te pierdas la oportunidad de experimentar nuestros servicios de primera y obtener el aspecto que deseas")),
            react_1.default.createElement("div", { className: `${style_1.default.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10` },
                react_1.default.createElement(Button_1.CustomButton, { handleClick: redirect, styles: 'text-white' }, "Reservar")))));
};
exports.CtaComponent = CtaComponent;
