"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const react_1 = __importDefault(require("react"));
const MapComponent_1 = require("./MapComponent");
const fa_1 = require("react-icons/fa");
const framer_motion_1 = require("framer-motion");
const Button_1 = require("./Button");
const react_intersection_observer_1 = require("react-intersection-observer");
const assets_1 = require("../assets");
const Location = () => {
    const { ref, inView } = (0, react_intersection_observer_1.useInView)({
        threshold: 0.1,
        triggerOnce: true,
    });
    const image = assets_1.sprayTransparent;
    const redirect = () => {
        window.open('https://maps.app.goo.gl/Gs5Y3WXDJrS9xeMd6', '_blank');
    };
    return (react_1.default.createElement("section", { id: 'location', className: 'pt-28  text-white font-montserrat' },
        react_1.default.createElement("h1", { className: 'text-white text-6xl flex-1 sm:px-16 px-6 font-bold mb-6', style: { textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px' } }, "Ubicaci\u00F3n"),
        react_1.default.createElement("div", { className: 'grid  relative sm:grid-cols-4' },
            react_1.default.createElement("div", { className: 'flex ' },
                assets_1.sprayTransparent !== null && (react_1.default.createElement("img", { className: 'h-[400px] object-contain', src: image, alt: '' })),
                react_1.default.createElement("div", { className: 'absolute z-[0] w-[60%] h-[60%] -right-[30%] rounded-full blue__gradient' })),
            react_1.default.createElement("div", { ref: ref, className: 'sm:col-span-3 sm:pr-16 px-6' },
                react_1.default.createElement("div", { className: 'text-center mb-6' },
                    react_1.default.createElement(framer_motion_1.motion.div, { initial: { y: -500, scale: 1, opacity: 0 }, animate: inView ? { y: 0, scale: 1.2, opacity: 1 } : {}, transition: {
                            duration: 0.5,
                        } },
                        react_1.default.createElement(fa_1.FaMapMarkerAlt, { className: 'w-full text-white text-center text-[32px] mb-4' })),
                    react_1.default.createElement("p", { className: 'mb-8' }, "Carrer de l'Abat Armengol, 22, 08173 Sant Cugat del Vall\u00E8s, Barcelona"),
                    react_1.default.createElement(Button_1.CustomButton, { handleClick: redirect },
                        react_1.default.createElement("div", { className: 'flex' },
                            react_1.default.createElement(fa_1.FaExternalLinkAlt, { className: 'mr-4' }),
                            "Ver en Maps"))),
                react_1.default.createElement(MapComponent_1.MapComponent, null)))));
};
exports.Location = Location;
