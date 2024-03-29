import * as Yup from 'yup';

export type FormData = {
	name: string;
	email: string;
	message: string;
};

export const validationSchema: Yup.Schema<FormData> = Yup.object().shape({
	name: Yup.string().required('El nombre es requerido'),
	email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
	message: Yup.string().required('El mensaje es requerido'),
});

export const InitialValues = {
	name: '',
	email: '',
	message: '',
};
