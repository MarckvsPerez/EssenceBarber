import React, {useState} from 'react';
import {Form, FormikProvider, useFormik} from 'formik';
import {CustomButton} from '../Button';
import {validationSchema} from './BookFormSchema';
import {type BookType} from '../../types';
import {doc, updateDoc} from 'firebase/firestore';
import {db} from '../../firebase';
import {useData} from '../../context/DataContext';

export const BookForm = ({BookInitialValues}: {BookInitialValues: BookType}) => {
	const [msg, setMsg] = useState<string>('Enviar');
	const {setBook} = useData();

	const onSubmit = async (values: BookType): Promise<void> => {
		try {
			const docRef = doc(db, 'Reservas', 'M3POu8FLx0KZr8m6Qnob');
			await updateDoc(docRef, values);
			setBook(values);
			setMsg('¡El formulario se envió con éxito!');
		} catch (error) {
			console.error(error);
			setMsg('¡Hubo un problema al enviar el formulario!');
		} finally {
			setMsg('Enviar');
		}
	};

	const formik = useFormik({
		initialValues: BookInitialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<div>
			<FormikProvider value={formik}>
				<div className='w-full'>
					<Form onSubmit={formik.handleSubmit}>
						<label className='flex flex-col mb-4'>
							<span className='text-white font-medium mb-4'>Titulo</span>
							<input
								type='text'
								name='Titulo'
								value={formik.values.Titulo}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								placeholder={'Titulo'}
								className='border-none outline-none py-4 px-6 placeholder:text-gray-600 rounded-lg font-medium'
							/>
							{formik.touched.Titulo && formik.errors.Titulo && (
								<div className='text-red-500'>{formik.errors.Titulo}</div>
							)}
						</label>
						<label className='flex flex-col mb-4'>
							<span className='text-white font-medium mb-4'>Subtitulo</span>
							<textarea
								rows={7}
								name='Subtitulo'
								value={formik.values.Subtitulo}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								placeholder={'Subtitulo'}
								className='border-none outline-none py-4 px-6 placeholder:text-gray-600 rounded-lg font-medium'
							/>
							{formik.touched.Subtitulo && formik.errors.Subtitulo && (
								<div className='text-red-500'>{formik.errors.Subtitulo}</div>
							)}
						</label>
						<label className='flex flex-col mb-4'>
							<span className='text-white font-medium mb-4'>Url</span>
							<input
								type='text'
								name='Url'
								value={formik.values.Url}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								placeholder={'Url'}
								className='border-none outline-none py-4 px-6 placeholder:text-gray-600 rounded-lg font-medium'
							/>
							{formik.touched.Url && formik.errors.Url && <div className='text-red-500'>{formik.errors.Url}</div>}
						</label>
						<CustomButton styles='w-full' type='submit' handleClick={formik.handleSubmit}>
							<div className='text-white'>{formik.isSubmitting ? '...' : msg}</div>
						</CustomButton>
					</Form>
				</div>
			</FormikProvider>
		</div>
	);
};
