import React, {useState} from 'react';
import {Form, FormikProvider, useFormik} from 'formik';
import {CustomButton} from '../Button';
import {validationSchema} from './ScheduleFormSchema';
import {doc, updateDoc} from 'firebase/firestore';
import {db, downloadFileFromStorage} from '../../firebase';
import {UploadFile} from '../UploadFile';
import {useData} from '../../context/DataContext';

export const ScheduleForm = ({ScheduleInitialValues}: {ScheduleInitialValues: {Info: string}}) => {
	const [msg, setMsg] = useState<string>('Enviar');
	const {setSchedule, setUrl} = useData();
	const onSubmit = async (values: {Info: string}): Promise<void> => {
		try {
			const docRef = doc(db, 'Horario', 'PELDdcyhR4hi6iy8qKrb');
			await updateDoc(docRef, values);
			setSchedule(values);
			setMsg('¡El formulario se envió con éxito!');
		} catch (error) {
			console.error(error);
			setMsg('¡Hubo un problema al enviar el formulario!');
		} finally {
			setMsg('Enviar');
		}
	};

	const formik = useFormik({
		initialValues: ScheduleInitialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<div>
			<FormikProvider value={formik}>
				<div className='w-full'>
					<Form onSubmit={formik.handleSubmit}>
						<label className='flex flex-col mb-4'>
							<span className='text-white font-medium mb-4'>Horario</span>
							<input
								type='text'
								name='Info'
								value={formik.values.Info}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								placeholder={'Info'}
								className='border-none outline-none py-4 px-6 placeholder:text-gray-600 rounded-lg font-medium'
							/>
							{formik.touched.Info && formik.errors.Info && <div className='text-red-500'>{formik.errors.Info}</div>}
						</label>

						<CustomButton styles='w-full' type='submit' handleClick={formik.handleSubmit}>
							<div className='text-white'>{formik.isSubmitting ? '...' : msg}</div>
						</CustomButton>
					</Form>
				</div>
			</FormikProvider>

			<UploadFile fileDir='FondoHorario' update={async () => downloadFileFromStorage(setUrl)} />
		</div>
	);
};
