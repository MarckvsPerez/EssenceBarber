"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const react_1 = __importDefault(require("react"));
const assets_1 = require("../assets");
const style_1 = __importDefault(require("../style"));
const fa_1 = require("react-icons/fa");
const Schedule = () => {
    return (react_1.default.createElement("section", { className: 'text-white w-full font-montserrat relative h-[400px]', style: {
            backgroundImage: `url(${assets_1.Tools})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply',
        } },
        react_1.default.createElement("div", { className: 'w-full h-full  absolute bg-black opacity-85', style: {
                mixBlendMode: 'multiply',
            } }),
        react_1.default.createElement("div", { className: `${style_1.default.paddingX} flex flex-col justify-center items-center relative z-2 w-full h-full` },
            react_1.default.createElement(fa_1.FaClock, { className: 'w-full text-white text-center text-[48px] my-2' }),
            react_1.default.createElement("div", { className: 'text-white text-4xl text-center font-bold', style: { textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px' } },
                "De Martes a Sabado de 09h a 20h",
                ' '))));
};
exports.Schedule = Schedule;
