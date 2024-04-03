import * as Yup from 'yup';

export type BookFormData = {
	Titulo: string;
	Subtitulo: string;
	Url: string;
};

export const validationSchema: Yup.Schema<BookFormData> = Yup.object().shape({
	Titulo: Yup.string().required('El campo es requerido'),
	Subtitulo: Yup.string().required('El campo es requerido'),
	Url: Yup.string().required('El campo es requerido'),
});
