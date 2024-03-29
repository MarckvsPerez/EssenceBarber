"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const react_1 = __importStar(require("react"));
const assets_1 = require("../assets");
const constants_1 = require("../constants");
const Navbar = () => {
    const [toggle, setToggle] = (0, react_1.useState)(false);
    return (react_1.default.createElement("nav", { className: 'w-full flex py-6 justify-between items-center navbar' },
        react_1.default.createElement("img", { src: assets_1.LogoEssence, alt: 'Essence', className: 'h-[50px] w-[320px] object-cover rounded-lg' }),
        react_1.default.createElement("ul", { className: 'list-none sm:flex hidden justify-end items-center flex-1' }, constants_1.navLinks.map((nav, index) => (react_1.default.createElement("li", { key: nav.id, className: `font-montserrat font-normal cursor-pointer text-[16px] ${index === constants_1.navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white '
						` },
            react_1.default.createElement("a", { href: `#${nav.id}` }, nav.title))))),
        react_1.default.createElement("div", { className: 'sm:hidden flex flex-1 justify-end items-center' },
            react_1.default.createElement("img", { src: toggle ? assets_1.close : assets_1.menu, alt: 'menu', className: 'w-[28px] h-[28px] object-contain cursor-pointer', onClick: () => {
                    setToggle((prev) => !prev);
                } }),
            react_1.default.createElement("div", { className: `${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar` },
                react_1.default.createElement("ul", { className: 'list-none flex flex-col justify-end items-center flex-1' }, constants_1.navLinks.map((nav, index) => (react_1.default.createElement("li", { key: nav.id, className: `font-montserrat font-normal cursor-pointer text-[16px] ${index === constants_1.navLinks.length - 1 ? 'mb-0' : 'mb-10'} text-white '
						` },
                    react_1.default.createElement("a", { href: `#${nav.id}` }, nav.title)))))))));
};
exports.Navbar = Navbar;
