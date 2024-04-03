import React, {useState} from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	TextField,
	Button,
	CircularProgress,
} from '@mui/material';
import {type CategoriaType, type ServicioType} from '../../types';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {CustomButton} from '../Button';
import {doc, updateDoc} from '@firebase/firestore';
import {db} from '../../firebase';

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
});

export const ServicesForm = ({
	ServiceInitialValues,
	setValues,
}: {
	ServiceInitialValues: CategoriaType[];
	setValues: React.Dispatch<React.SetStateAction<CategoriaType[] | undefined>>;
}) => {
	const [editedServices, setEditedServices] = useState(ServiceInitialValues);
	const [loading, setLoading] = useState<boolean>(false);

	const handleEdit = (categoriaIndex: number, serviceIndex: number, field: string, value: string) => {
		const updatedServices = [...editedServices];
		updatedServices[categoriaIndex].contenido[serviceIndex][field] = value;
		setEditedServices(updatedServices);
	};

	const handleSave = () => {
		setValues(editedServices);
	};

	const handleDeleteRow = (categoriaIndex: number, serviceIndex: number) => {
		const updatedServices = [...editedServices];
		updatedServices[categoriaIndex].contenido.splice(serviceIndex, 1);
		setEditedServices(updatedServices);
	};

	const handleAddRow = (categoriaIndex: number) => {
		const updatedServices = [...editedServices];
		updatedServices[categoriaIndex].contenido.push({
			nombre: '',
			descripcion: '',
			precio: '',
		});
		setEditedServices(updatedServices);
	};

	const save = () => {
		handleSave();
		void updateData(editedServices);
	};

	const updateData = async (updatedData: CategoriaType[]) => {
		setLoading(true);
		try {
			updatedData.forEach(async (categoria) => {
				const docRef = doc(db, 'TipoDeServicio', categoria.id);
				await updateDoc(docRef, categoria);
			});
			console.log('Documentos actualizados exitosamente.');
		} catch (error) {
			console.error('Error actualizando documentos: ', error);
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<div className='text-white'>
				{editedServices.map((categoriaData, categoriaIndex) => (
					<div className='mb-8' key={categoriaIndex}>
						<div className='flex justify-between py-2'>
							<h2 className='text-2xl mb-2'>{categoriaData.categoria}</h2>
							<Button
								onClick={() => {
									handleAddRow(categoriaIndex);
								}}
								variant='outlined'
								color='warning'
							>
								Añadir Fila
							</Button>
						</div>
						<TableContainer sx={{width: '80vw'}} component={Paper}>
							<Table aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell style={{width: '20%'}}>Nombre</TableCell>
										<TableCell style={{width: '60%'}}>Descripción</TableCell>
										<TableCell style={{width: '10%'}}>Precio</TableCell>
										<TableCell style={{width: '10%'}}>Acciones</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{categoriaData.contenido.map((servicio: ServicioType, serviceIndex: number) => (
										<TableRow key={serviceIndex}>
											<TableCell>
												<TextField
													style={{width: '100%'}}
													value={servicio.nombre}
													onChange={(e) => {
														handleEdit(categoriaIndex, serviceIndex, 'nombre', e.target.value);
													}}
												/>
											</TableCell>
											<TableCell>
												<TextField
													style={{width: '100%'}}
													value={servicio.descripcion}
													onChange={(e) => {
														handleEdit(categoriaIndex, serviceIndex, 'descripcion', e.target.value);
													}}
												/>
											</TableCell>
											<TableCell>
												<TextField
													value={servicio.precio}
													onChange={(e) => {
														handleEdit(categoriaIndex, serviceIndex, 'precio', e.target.value);
													}}
												/>
											</TableCell>
											<TableCell>
												<Button
													onClick={() => {
														handleDeleteRow(categoriaIndex, serviceIndex);
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
					</div>
				))}

				{loading ? (
					<div className='w-full text-center'>
						<CircularProgress />
					</div>
				) : (
					<CustomButton styles='w-full ' handleClick={save}>
						Guardar
					</CustomButton>
				)}
			</div>
		</ThemeProvider>
	);
};
