"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const react_1 = __importDefault(require("react"));
const style_1 = __importDefault(require("../style"));
const assets_1 = require("../assets");
const constants_1 = require("../constants");
const Contact_1 = require("./Contact");
const Footer = () => {
    return (react_1.default.createElement("section", { id: 'contact', className: `${style_1.default.paddingY} flex-col pt-28` },
        react_1.default.createElement("h1", { className: 'text-white text-6xl font-montserrat font-bold', style: { textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px' } }, "Contacta"),
        react_1.default.createElement("div", { className: `${style_1.default.flexStart} md:flex-row flex-col mb-8 w-full` },
            react_1.default.createElement("div", { className: 'flex flex-col w-full justify-start mr-10' },
                react_1.default.createElement("img", { src: assets_1.LogoEssence, alt: 'LogoEssence', className: 'w-full object-contain' })),
            react_1.default.createElement(Contact_1.Contact, null)),
        react_1.default.createElement("div", { className: 'flex-[1.5] w-full flex xs:flex-row flex-col gap-2 mb-6 md:mt-0 mt-10' }, constants_1.contact.map((item) => (react_1.default.createElement("div", { key: item.id, className: 'flex flex-col ss:my-0 my-4 flex-1' },
            react_1.default.createElement("h4", { className: 'font-montserrat font-medium text-white flex items-center' },
                react_1.default.createElement("div", { className: 'h-[1px] w-[40px] mr-2 bg-white' }),
                react_1.default.createElement("span", { className: 'texto' }, item.id)),
            react_1.default.createElement("div", { className: 'mt-4 text-ellipsis overflow-hidden' },
                react_1.default.createElement("p", { className: 'font-montserrat font-normal text-dimWhite \t\t\t\t\t\t\t' }, item.value)))))),
        react_1.default.createElement("div", { className: 'w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]' },
            react_1.default.createElement("p", { className: 'font-montserrat font-normal text-center text-[18px] leading-[27px] text-white' }, "Copyright \u24B8 2024. All Rights Reserved."),
            react_1.default.createElement("div", { className: 'flex flex-row md:mt-0 mt-6' }, constants_1.socialMedia.map((social, index) => (react_1.default.createElement("img", { key: social.id, src: social.icon, alt: social.id, className: `w-[21px] h-[21px] object-contain cursor-pointer ${index === constants_1.socialMedia.length - 1 ? 'mr-0' : 'mr-6'}`, onClick: () => window.open(social.link) })))))));
};
exports.Footer = Footer;
