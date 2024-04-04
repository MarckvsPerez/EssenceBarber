import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {getStorage, ref, deleteObject} from 'firebase/storage';
import {UploadFile} from '../UploadFile';
import {downloadFilesFromStorage} from '../../firebase';
import {useData} from '../../context/DataContext';
const storage = getStorage();

export const CarouselForm = ({images}: {images: string[]}) => {
	const theme = createTheme({
		palette: {
			mode: 'dark',
		},
	});
	const {setGallery} = useData();

	const handleDeleteRow = (img: string) => {
		const fileRef = ref(storage, img);
		void deleteObject(fileRef);

		const updatedUrls = images.filter((url) => url !== img);
		setGallery(updatedUrls);
	};

	const random = () => {
		const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
		const randomString = randomNumber.toString();
		const randomDigits = randomString.substring(0, 8);

		return randomDigits;
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
				<UploadFile fileDir={`Galeria/${random()}`} update={async () => downloadFilesFromStorage(setGallery)} />
			</div>
		</ThemeProvider>
	);
};
