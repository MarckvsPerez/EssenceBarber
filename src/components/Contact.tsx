/* eslint-disable @typescript-eslint/naming-convention */
import React, {useState} from 'react';

import {Form, FormikProvider, useFormik} from 'formik';
import emailjs from '@emailjs/browser';
import {InitialValues, validationSchema} from './ContactSchema';
import {CustomButton} from './Button';
import {type FormData} from './ContactSchema';

export const Contact = () => {
	const [msg, setMsg] = useState<string>('Enviar');
	const onSubmit = async (values: FormData): Promise<void> => {
		try {
			await emailjs.send(
				'service_0ogh5v9',
				'template_xjzmnnp',
				{
					from_name: values.name,
					to_name: 'Essence',
					from_email: values.email,
					to_email: 'essencebarbersbcn@gmail.com',
					message: values.message,
				},
				'YmMqkoIl9QvRX_KIj',
			);
			formik.resetForm();
			setMsg('¡El formulario se envió con éxito!');
		} catch (error) {
			console.error(error);
			formik.resetForm();
			setMsg('¡Hubo un problema al enviar el formulario!');
		} finally {
			setTimeout(() => {
				setMsg('Enviar');
			}, 2000);
		}
	};

	const formik = useFormik({
		initialValues: InitialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<FormikProvider value={formik}>
			<div className='w-full'>
				<Form onSubmit={formik.handleSubmit}>
					<label className='flex flex-col mb-4'>
						<span className='text-white font-medium mb-4'>Nombre</span>
						<input
							type='text'
							name='name'
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder={'Nombre'}
							className='border-none outline-none py-4 px-6 placeholder:text-gray-600 rounded-lg font-medium'
						/>
						{formik.touched.name && formik.errors.name && <div className='text-red-500'>{formik.errors.name}</div>}
					</label>
					<label className='flex flex-col mb-4'>
						<span className='text-white font-medium mb-4'>Correo electrónico</span>
						<input
							type='email'
							name='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder={'Correo'}
							className='border-none outline-none py-4 px-6 placeholder:text-gray-600 rounded-lg font-medium'
						/>
						{formik.touched.email && formik.errors.email && <div className='text-red-500'>{formik.errors.email}</div>}
					</label>
					<label className='flex flex-col mb-10'>
						<span className='text-white font-medium mb-4'>Mensaje</span>
						<textarea
							rows={7}
							name='message'
							value={formik.values.message}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder={'Mensaje'}
							className='border-none outline-none py-4 px-6 placeholder:text-gray-600 rounded-lg font-medium'
						/>
						{formik.touched.message && formik.errors.message && (
							<div className='text-red-500'>{formik.errors.message}</div>
						)}
					</label>

					<CustomButton styles='w-full' type='submit' handleClick={formik.handleSubmit}>
						<div className='text-white'>{formik.isSubmitting ? '...' : msg}</div>
					</CustomButton>
				</Form>
			</div>
		</FormikProvider>
	);
};
