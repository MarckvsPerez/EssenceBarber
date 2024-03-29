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
exports.Contact = void 0;
const react_1 = __importStar(require("react"));
const formik_1 = require("formik");
const ContactSchema_1 = require("./ContactSchema");
const Button_1 = require("./Button");
const Contact = () => {
    const [msg, setMsg] = (0, react_1.useState)('Enviar');
    const onSubmit = async (values) => {
        try {
            // Await emailjs.send(
            // 	'service_0ogh5v9',
            // 	'template_xjzmnnp',
            // 	{
            // 		from_name: values.name,
            // 		to_name: 'Essence',
            // 		from_email: values.email,
            // 		to_email: 'essencebarbersbcn@gmail.com',
            // 		message: values.message,
            // 	},
            // 	'YmMqkoIl9QvRX_KIj',
            // );
            formik.resetForm();
            setMsg('¡El formulario se envió con éxito!');
        }
        catch (error) {
            console.error(error);
            formik.resetForm();
            setMsg('¡Hubo un problema al enviar el formulario!');
        }
        finally {
            setTimeout(() => {
                setMsg('Enviar');
            }, 2000);
        }
    };
    const formik = (0, formik_1.useFormik)({
        initialValues: ContactSchema_1.InitialValues,
        validationSchema: ContactSchema_1.validationSchema,
        onSubmit,
    });
    return (react_1.default.createElement(formik_1.FormikProvider, { value: formik },
        react_1.default.createElement("div", { className: 'w-full' },
            react_1.default.createElement(formik_1.Form, { onSubmit: formik.handleSubmit },
                react_1.default.createElement("label", { className: 'flex flex-col mb-4' },
                    react_1.default.createElement("span", { className: 'text-white font-medium mb-4' }, "Nombre"),
                    react_1.default.createElement("input", { type: 'text', name: 'name', value: formik.values.name, onChange: formik.handleChange, onBlur: formik.handleBlur, placeholder: 'Nombre', className: 'border-none outline-none py-4 px-6 placeholder:text-gray-600 rounded-lg font-medium' }),
                    formik.touched.name && formik.errors.name && (react_1.default.createElement("div", { className: 'text-red-500' }, formik.errors.name))),
                react_1.default.createElement("label", { className: 'flex flex-col mb-4' },
                    react_1.default.createElement("span", { className: 'text-white font-medium mb-4' }, "Correo electr\u00F3nico"),
                    react_1.default.createElement("input", { type: 'email', name: 'email', value: formik.values.email, onChange: formik.handleChange, onBlur: formik.handleBlur, placeholder: 'Correo', className: 'border-none outline-none py-4 px-6 placeholder:text-gray-600 rounded-lg font-medium' }),
                    formik.touched.email && formik.errors.email && (react_1.default.createElement("div", { className: 'text-red-500' }, formik.errors.email))),
                react_1.default.createElement("label", { className: 'flex flex-col mb-10' },
                    react_1.default.createElement("span", { className: 'text-white font-medium mb-4' }, "Mensaje"),
                    react_1.default.createElement("textarea", { rows: 7, name: 'message', value: formik.values.message, onChange: formik.handleChange, onBlur: formik.handleBlur, placeholder: 'Mensaje', className: 'border-none outline-none py-4 px-6 placeholder:text-gray-600 rounded-lg font-medium' }),
                    formik.touched.message && formik.errors.message && (react_1.default.createElement("div", { className: 'text-red-500' }, formik.errors.message))),
                react_1.default.createElement(Button_1.CustomButton, { styles: 'w-full', type: 'submit', handleClick: formik.handleSubmit },
                    react_1.default.createElement("div", { className: 'text-white' }, formik.isSubmitting ? '...' : msg))))));
};
exports.Contact = Contact;
