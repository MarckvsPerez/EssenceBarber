import React, {type ChangeEvent, useState, useRef} from 'react';
import {getStorage, ref, uploadBytes} from 'firebase/storage';
import {Button, Paper, Alert} from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
});

export const UploadFile = ({fileDir, update}: {fileDir: string; update?: () => void}) => {
	const [file, setFile] = useState<File | undefined>(undefined);
	const [alert, setAlert] = useState<string | undefined>(undefined);
	const [uploading, setUploading] = useState(false);
	const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);

	const inputFileRef = useRef(null);

	const storage = getStorage();
	const storageRef = ref(storage, fileDir);

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files ? e.target.files[0] : null;
		if (!selectedFile) {
			return;
		}

		if (selectedFile.type !== 'image/png' && selectedFile.type !== 'image/jpeg') {
			setAlert('Porfavor sergio, sube una imagen');
		} else {
			setFile(selectedFile);
			const reader = new FileReader();
			reader.onload = (event) => {
				if (event.target) {
					setPreviewUrl(event.target.result as string);
				}
			};

			reader.readAsDataURL(selectedFile);
			setAlert(undefined);
		}
	};

	const handleUpload = async () => {
		try {
			if (!file) {
				console.error('No se ha seleccionado ningún archivo.');
				return;
			}

			setUploading(true);
			await uploadBytes(storageRef, file).then();
		} catch (error) {
			console.error('Error al subir el archivo:', error);
		} finally {
			setUploading(false);
			if (inputFileRef.current) {
				(inputFileRef.current as HTMLInputElement).value = '';
				setPreviewUrl(undefined);
			}

			if (update !== undefined) {
				update();
			}
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Paper className='mt-4 '>
				<input ref={inputFileRef} type='file' onChange={handleFileChange} className='w-full p-4' />
				{previewUrl && (
					<>
						<div className='p-4'>
							<img src={previewUrl} alt='Preview' className='w-full h-[100px] object-cover' />
						</div>
						<div className='p-4 text-center'>
							<Button variant='contained' onClick={handleUpload} disabled={uploading}>
								{uploading ? 'Subiendo...' : 'Subir Archivo'}
							</Button>
						</div>
					</>
				)}
			</Paper>

			{alert && (
				<Alert className='m-4' severity='error'>
					{alert}
				</Alert>
			)}
		</ThemeProvider>
	);
};
