"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const react_1 = __importDefault(require("react"));
const constants_1 = require("../constants");
const style_1 = __importDefault(require("../style"));
const Client = () => {
    return (react_1.default.createElement("section", { className: `${style_1.default.flexCenter} my-4` },
        react_1.default.createElement("div", { className: `${style_1.default.flexCenter} flex-wrap w-full` }, constants_1.clients.map((client) => (react_1.default.createElement("div", { key: client.id, className: `flex-1 ${style_1.default.flexCenter} sm:min-w-[192px] min-w-[120px] m-5` },
            react_1.default.createElement("img", { src: client.logo, alt: 'client_logo', className: 'sm:w-[192px] w-[100px] object-contain' })))))));
};
exports.Client = Client;
