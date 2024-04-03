import * as Yup from 'yup';

export type ScheduleFormData = {
	Info: string;
};

export const validationSchema: Yup.Schema<ScheduleFormData> = Yup.object().shape({
	Info: Yup.string().required('El campo es requerido'),
});
