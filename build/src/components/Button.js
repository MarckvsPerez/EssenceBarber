"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomButton = exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = ({ styles }) => {
    return (react_1.default.createElement("button", { type: 'button', className: `py-4 px-6 font-montserrat font-medium text-[18px] text-primary bg-white rounded-[10px] outline-none ${styles}` }, "Get Started"));
};
exports.Button = Button;
const CustomButton = ({ children, handleClick, type, styles, }) => {
    const [isHovered, setIsHovered] = react_1.default.useState(false);
    const hoverStyle = {
        boxShadow: '0px 0px 10px #6d6d6d',
        transition: 'all 0.3s ease',
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (react_1.default.createElement("button", { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, className: `p-4 font-montserrat rounded-[10px] border-2 border-gray-500 ${styles}`, style: {
            ...(isHovered ? hoverStyle : { transition: 'all 0.3s ease' }),
        }, onClick: handleClick, type: type ?? 'button' }, children));
};
exports.CustomButton = CustomButton;
