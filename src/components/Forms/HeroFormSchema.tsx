import * as Yup from 'yup';

export type HeroFormData = {
	Marca: string;
	Titulo: string;
	Subtitulo: string;
	Texto: string;
};

export const validationSchema: Yup.Schema<HeroFormData> = Yup.object().shape({
	Marca: Yup.string().required('El campo es requerido'),
	Titulo: Yup.string().required('El campo es requerido'),
	Subtitulo: Yup.string().required('El campo es requerido'),
	Texto: Yup.string().required('El campo es requerido'),
});

export const HeroInitialValues = {
	Marca: '',
	Titulo: '',
	Subtitulo: '',
	Texto: '',
};
