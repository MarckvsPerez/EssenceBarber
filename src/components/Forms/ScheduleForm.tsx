import React, {useState} from 'react';
import {Form, FormikProvider, useFormik} from 'formik';
import {Editor} from '@tinymce/tinymce-react';

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

	const handleEditorChange = (newContent: string) => {
		void formik.setFieldValue('Info', newContent);
	};

	return (
		<div className='w-full'>
			<FormikProvider value={formik}>
				<div className='w-full'>
					<Form onSubmit={formik.handleSubmit}>
						<label className='flex flex-col mb-4'>
							<span className='text-white font-medium mb-4'>Horario</span>
							<Editor
								apiKey='kqouulohyugx37iuagjwuixko0dug6ht4ktgzuryyaatthcv'
								initialValue={ScheduleInitialValues.Info}
								init={{
									height: '500px',
									menubar: true,
									plugins: [
										'advlist',
										'autolink',
										'lists',
										'link',
										'image',
										'charmap',
										'preview',
										'anchor',
										'searchreplace',
										'visualblocks',
										'code',
										'fullscreen',
										'insertdatetime',
										'media',
										'table',
										'help',
										'wordcount',
									],
									toolbar:
										'undo redo | blocks | ' +
										'bold italic backcolor | alignleft aligncenter ' +
										'alignright alignjustify | bullist numlist outdent indent | ' +
										'removeformat | help',
								}}
								onEditorChange={handleEditorChange}
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
