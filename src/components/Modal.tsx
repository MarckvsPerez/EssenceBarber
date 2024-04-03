import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useState} from 'react';
import {FormikProvider, Form, useFormik} from 'formik';
import {CustomButton} from './Button';
import * as Yup from 'yup';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'black',
	border: '2px solid #fff',
	boxShadow: 24,
	borderRadius: '20px',
	p: 4,
	overflow: 'scroll',
	maxHeight: '90vh',
	minWidth: '40vw',
	maxWidth: '95vw',
	'::-webkit-scrollbar': {
		display: 'none',
	},
	scrollbarWidth: 'none',
};

type Props = {
	children: string | JSX.Element;
	open: boolean;
	setOpen: (open: boolean) => void;
};
export const validationSchema: Yup.Schema<{pass: string}> = Yup.object().shape({
	pass: Yup.string().required('El campo es requerido'),
});

const initialValues = {
	pass: '',
};

const Password: string = import.meta.env.VITE_APP_PASSWORD as string;

export default function BasicModal({children, open, setOpen}: Props) {
	const [auth, setauth] = useState<boolean>(false);

	const onSubmit = (values: {pass: string}): void => {
		if (values.pass === Password) {
			setauth(true);
		} else {
			formik.resetForm();
		}
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				{auth ? (
					<Box sx={style}>{children}</Box>
				) : (
					<Box sx={style}>
						<FormikProvider value={formik}>
							<div className='w-full'>
								<Form onSubmit={formik.handleSubmit}>
									<label className='flex flex-col mb-4'>
										<span className='text-white font-medium mb-4'>Contraseña</span>
										<input
											type='password'
											name='pass'
											value={formik.values.pass}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											placeholder={'Contraseña'}
											className='border-none outline-none py-4 px-6 placeholder:text-gray-600 rounded-lg font-medium'
										/>
										{formik.touched.pass && formik.errors.pass && (
											<div className='text-red-500'>{formik.errors.pass}</div>
										)}
									</label>

									<CustomButton styles='w-full' type='submit' handleClick={formik.handleSubmit}>
										<div className='text-white'>{formik.isSubmitting ? '...' : 'Enviar'}</div>
									</CustomButton>
								</Form>
							</div>
						</FormikProvider>
					</Box>
				)}
			</Modal>
		</div>
	);
}
