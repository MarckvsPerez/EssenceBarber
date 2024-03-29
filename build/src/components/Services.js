"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = void 0;
const react_1 = __importDefault(require("react"));
const constants_1 = require("../constants");
const framer_motion_1 = require("framer-motion");
const react_intersection_observer_1 = require("react-intersection-observer");
const Services = () => {
    const { ref, inView } = (0, react_intersection_observer_1.useInView)({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (react_1.default.createElement("section", { id: 'services', ref: ref, className: 'font-montserrat flex-row flex-wrap  pt-28 justify-start' },
        react_1.default.createElement("h1", { className: 'text-white text-6xl font-bold', style: { textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px' } }, "Serivicios"),
        constants_1.services.map((categoria, ind) => (react_1.default.createElement("div", { key: ind, className: 'my-4 p-4 flex-col rounded-[20px] ' },
            react_1.default.createElement("h2", { className: 'text-white text-2xl font-bold' }, categoria.categoria),
            categoria.contenido.map((contenido, ind2) => (react_1.default.createElement(framer_motion_1.motion.div, { initial: { x: -100, opacity: 0 }, animate: inView ? { x: 0, opacity: 1 } : {}, transition: { duration: 1, delay: ind * 0.4 + ind2 * 0.1 }, key: ind2 },
                react_1.default.createElement("div", { className: 'flex text-white w-full pt-4' },
                    react_1.default.createElement("div", { className: 'whitespace-nowrap max-w-[80%] overflow-hidden overflow-ellipsis text-regular pr-4' }, contenido.nombre),
                    react_1.default.createElement("div", { className: 'flex-1 border-b border-white' }),
                    react_1.default.createElement("div", { className: 'text-xl pl-4' }, contenido.precio)),
                react_1.default.createElement("div", { className: 'text-gray-400 pt-1' }, contenido.descripcion)))))))));
};
exports.Services = Services;
