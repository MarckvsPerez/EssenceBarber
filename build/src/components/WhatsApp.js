"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsApp = void 0;
const react_1 = __importDefault(require("react"));
const style_1 = __importDefault(require("../style"));
const assets_1 = require("../assets");
const WhatsApp = () => {
    return (react_1.default.createElement("div", { className: `${style_1.default.flexCenter} w-[240px]  p-[2px]` },
        react_1.default.createElement("div", { className: `${style_1.default.flexStart} flex-col` },
            react_1.default.createElement("img", { style: { maskImage: ' linear-gradient(black 70%, transparent)' }, src: assets_1.Cera, alt: 'Cera' }))));
};
exports.WhatsApp = WhatsApp;
