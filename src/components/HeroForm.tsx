import React, {useState} from 'react';
import {Form, FormikProvider, useFormik} from 'formik';
import {CustomButton} from './Button';
import {validationSchema} from './HeroFormSchema';
import {type TitulosType} from '../types';
import {doc, updateDoc} from 'firebase/firestore';
import {db} from '../firebase';

export const HeroForm = ({
	HeroInitialValues,
	setValues,
}: {
	HeroInitialValues: TitulosType;
	setValues: React.Dispatch<React.SetStateAction<TitulosType | undefined>>;
}) => {
	const [msg, setMsg] = useState<string>('Enviar');

	const onSubmit = async (values: TitulosType): Promise<void> => {
		try {
			const docRef = doc(db, 'Títulos', '23qtzkiI2dakfOPH9UPk');
			await updateDoc(docRef, values);
			setValues(values);
			setMsg('¡El formulario se envió con éxito!');
		} catch (error) {
			console.error(error);
			setMsg('¡Hubo un problema al enviar el formulario!');
		} finally {
			setTimeout(() => {
				setMsg('Enviar');
			}, 2000);
		}
	};

	const formik = useFormik({
		initialValues: HeroInitialValues,
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
							<span className='text-white font-medium mb-4'>Texto</span>
							<input
								type='text'
								name='Marca'
								value={formik.values.Marca}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								placeholder={'Marca'}
								className='border-none outline-none py-4 px-6 placeholder:text-gray-600 rounded-lg font-medium'
							/>
							{formik.touched.Marca && formik.errors.Marca && <div className='text-red-500'>{formik.errors.Marca}</div>}
						</label>
						<label className='flex flex-col mb-4'>
							<span className='text-white font-medium mb-4'>Subtitulo</span>
							<input
								type='text'
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
							<span className='text-white font-medium mb-4'>Texto</span>
							<textarea
								rows={7}
								name='Texto'
								value={formik.values.Texto}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								placeholder={'Texto'}
								className='border-none outline-none py-4 px-6 placeholder:text-gray-600 rounded-lg font-medium'
							/>
							{formik.touched.Texto && formik.errors.Texto && <div className='text-red-500'>{formik.errors.Texto}</div>}
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
