"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
const style_1 = __importDefault(require("./style"));
const components_1 = require("./components");
const react_router_dom_1 = require("react-router-dom");
const App = () => {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", { className: 'bg-primary w-full  overflow-hidden' },
            react_1.default.createElement("div", { className: `shadow-lg fixed w-full bg-primary z-10 ${style_1.default.paddingX} ${style_1.default.flexCenter}` },
                react_1.default.createElement("div", { className: `${style_1.default.boxWidth}` },
                    react_1.default.createElement(components_1.Navbar, null))),
            react_1.default.createElement("div", { className: `bg-primary mt-10 ${style_1.default.flexStart}` },
                react_1.default.createElement("div", { className: `${style_1.default.boxWidth}` },
                    "/",
                    react_1.default.createElement(components_1.Hero, null))),
            react_1.default.createElement("div", { className: `bg-primary ${style_1.default.paddingX} ${style_1.default.flexStart}` },
                react_1.default.createElement("div", { className: `${style_1.default.boxWidth}` },
                    react_1.default.createElement(components_1.Services, null))),
            react_1.default.createElement("div", { className: `bg-primary mt-10 ${style_1.default.flexStart}` },
                react_1.default.createElement("div", { className: `${style_1.default.boxWidth}` },
                    react_1.default.createElement(components_1.Schedule, null),
                    react_1.default.createElement(components_1.Location, null))),
            react_1.default.createElement("div", { className: `bg-primary ${style_1.default.paddingX} ${style_1.default.flexStart}` },
                react_1.default.createElement("div", { className: `${style_1.default.boxWidth}` },
                    react_1.default.createElement(components_1.CtaComponent, null),
                    react_1.default.createElement(components_1.Client, null),
                    react_1.default.createElement(components_1.Footer, null))))));
};
exports.App = App;
