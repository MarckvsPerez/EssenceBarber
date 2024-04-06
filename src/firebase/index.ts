import {initializeApp} from 'firebase/app';
import {getFirestore, doc, getDoc, collection, getDocs} from '@firebase/firestore';
import {getStorage, getDownloadURL, type StorageReference, listAll, deleteObject, ref} from 'firebase/storage';

import {type TitulosType, type CategoriaType, type BookType} from '../types';
import {type Dispatch, type SetStateAction} from 'react';

const apiKey: string = import.meta.env.VITE_APP_APIKEY as string;
const authDomain: string = import.meta.env.VITE_APP_AUTHDOMAIN as string;
const projectId: string = import.meta.env.VITE_APP_PROJECTID as string;
const storageBucket: string = import.meta.env.VITE_APP_STORAGEBUCKET as string;
const messagingSenderId: string = import.meta.env.VITE_APP_MESSAGINGSENDERID as string;
const appId: string = import.meta.env.VITE_APP_APPID as string;
const measurementId: string = import.meta.env.VITE_APP_MEASUREMENTID as string;

const firebaseConfig = {
	apiKey,
	authDomain,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
	measurementId,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();

export const fetchServices = async (set: Dispatch<SetStateAction<CategoriaType[] | undefined>>) => {
	const response: CategoriaType[] = [];
	try {
		const querySnapshot = await getDocs(collection(db, 'TipoDeServicio'));
		querySnapshot.forEach((doc) => {
			response.push(doc.data() as CategoriaType);
		});
	} catch (error) {
		console.error('Error fetching documents: ', error);
	} finally {
		if (response.length >= 1) {
			const cabello = response.find((servicio) => servicio.categoria === 'Cabello');
			const barba = response.find((servicio) => servicio.categoria === 'Barba');
			const packs = response.find((servicio) => servicio.categoria === 'Packs');

			const serviciosOrdenados = [];
			if (cabello) serviciosOrdenados.push(cabello);
			if (barba) serviciosOrdenados.push(barba);
			if (packs) serviciosOrdenados.push(packs);

			set(serviciosOrdenados);
		}
	}
};

export const fetchTitles = async (set: Dispatch<SetStateAction<TitulosType | undefined>>) => {
	const docRef = doc(db, 'Títulos', '23qtzkiI2dakfOPH9UPk');
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		set(docSnap.data() as TitulosType);
	} else {
		console.error('No titles document!');
	}
};

export const fetchSchedule = async (set: Dispatch<SetStateAction<{Info: string} | undefined>>) => {
	const docRef = doc(db, 'Horario', 'PELDdcyhR4hi6iy8qKrb');
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		set(docSnap.data() as {Info: string});
	} else {
		console.error('No schedule document!');
	}
};

export const fetchBook = async (set: Dispatch<SetStateAction<BookType | undefined>>) => {
	const docRef = doc(db, 'Reservas', 'M3POu8FLx0KZr8m6Qnob');
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		set(docSnap.data() as BookType);
	} else {
		console.error('No book document!');
	}
};

export const downloadFileFromStorage = async (set: Dispatch<SetStateAction<string | undefined>>) => {
	const starsRef = ref(storage, 'FondoHorario');
	const response = getDownloadURL(starsRef);
	set(await response);
};

export const deleteFileFromStorage = async (starsRef: StorageReference): Promise<void> => {
	try {
		await deleteObject(starsRef);
	} catch (error) {
		console.error('Error al borrar el archivo:', error);
		throw error;
	}
};

export const downloadFilesFromStorage = async (set: Dispatch<SetStateAction<string[] | undefined>>) => {
	const folderRef = ref(storage, 'Galeria');

	try {
		const {items} = await listAll(folderRef);

		const downloadUrls: string[] = [];

		for (const itemRef of items) {
			// eslint-disable-next-line no-await-in-loop
			const downloadUrl = await getDownloadURL(itemRef);
			downloadUrls.push(downloadUrl);
		}

		if (downloadUrls.length >= 1) {
			set(downloadUrls);
		}
	} catch (error) {
		console.error('Error al descargar archivos:', error);
		throw error;
	}
};
