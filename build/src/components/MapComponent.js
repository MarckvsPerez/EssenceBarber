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
exports.MapComponent = void 0;
const react_1 = __importStar(require("react"));
const react_google_maps_1 = require("@vis.gl/react-google-maps");
const constants_1 = require("../constants");
function MapComponent() {
    const position = { lat: 41.475444, lng: 2.083139 };
    const [markerRef, marker] = (0, react_google_maps_1.useAdvancedMarkerRef)();
    const [open, setOpen] = (0, react_1.useState)(false);
    return (react_1.default.createElement(react_google_maps_1.APIProvider, { apiKey: constants_1.apiKey },
        react_1.default.createElement("div", { className: 'w-full h-[300px] my-4', style: {
                outline: 'none',
                borderColor: '#9ecaed',
                boxShadow: '0 0 10px #9ecaed',
            } },
            react_1.default.createElement(react_google_maps_1.Map, { defaultZoom: 15, defaultCenter: position, mapId: 'map' },
                react_1.default.createElement(react_google_maps_1.AdvancedMarker, { ref: markerRef, position: position, onClick: () => {
                        setOpen((prev) => !prev);
                    } }),
                open && (react_1.default.createElement(react_google_maps_1.InfoWindow, { anchor: marker, onCloseClick: () => {
                        setOpen((prev) => !prev);
                    } },
                    react_1.default.createElement("h1", { className: 'text-xl text-gray-800 font-bold font-montserrat' }, "Essence Barber"),
                    react_1.default.createElement("a", { href: 'https://maps.app.goo.gl/Gs5Y3WXDJrS9xeMd6', target: '_blank', style: {
                            color: 'blue',
                            textDecoration: 'underline',
                            fontWeight: 'bold',
                        }, rel: 'noreferrer' }, "Ver en Google Maps")))))));
}
exports.MapComponent = MapComponent;
