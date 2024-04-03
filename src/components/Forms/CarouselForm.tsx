import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {getStorage, ref, deleteObject} from 'firebase/storage';
import {UploadFile} from '../UploadFile';
const storage = getStorage();

export const CarouselForm = ({
	images,
	set,
}: {
	images: string[];
	set: React.Dispatch<React.SetStateAction<string[] | undefined>>;
}) => {
	const theme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

	const handleDeleteRow = (img: string) => {
		const fileRef = ref(storage, img);
		void deleteObject(fileRef);

		const updatedUrls = images.filter((url) => url !== img);
		set(updatedUrls);
	};

	const random = () => {
		const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
		const randomString = randomNumber.toString();
		const randomDigits = randomString.substring(0, 8);

		return randomDigits;
	};

	const update = () => {
		console.log('hola');
	};

	return (
		<ThemeProvider theme={theme}>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Imagen</TableCell>
							<TableCell sx={{width: '20%'}}>Eliminar</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{images.map((image, index) => (
							<TableRow key={index}>
								<TableCell>
									<img src={image} alt={`Imagen ${index}`} className='object-cover h-[100px]' />
								</TableCell>
								<TableCell>
									<Button
										onClick={() => {
											handleDeleteRow(image);
										}}
										variant='outlined'
										color='error'
									>
										Eliminar
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<div className='p-4'>
				<UploadFile fileDir={`Galeria/${random()}`} update={update} />
			</div>
		</ThemeProvider>
	);
};
