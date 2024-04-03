import {initializeApp} from 'firebase/app';
import {getFirestore, doc, getDoc, collection, getDocs} from '@firebase/firestore';
import {getStorage, getDownloadURL, type StorageReference, uploadBytes, ref, listAll} from 'firebase/storage';

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
		set(response);
	}
};

export const fetchTitles = async (set: Dispatch<SetStateAction<TitulosType | undefined>>) => {
	const docRef = doc(db, 'Títulos', '23qtzkiI2dakfOPH9UPk');
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		set(docSnap.data() as TitulosType);
	} else {
		console.log('No such document!');
	}
};

export const fetchSchedule = async (set: Dispatch<SetStateAction<{Info: string} | undefined>>) => {
	const docRef = doc(db, 'Horario', 'PELDdcyhR4hi6iy8qKrb');
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		set(docSnap.data() as {Info: string});
	} else {
		console.log('No such document!');
	}
};

export const fetchBook = async (set: Dispatch<SetStateAction<BookType | undefined>>) => {
	const docRef = doc(db, 'Reservas', 'M3POu8FLx0KZr8m6Qnob');
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		console.log(docSnap.data());
		set(docSnap.data() as BookType);
	} else {
		console.log('No such document!');
	}
};

export const downloadFileFromStorage = async (starsRef: StorageReference): Promise<string> => {
	return getDownloadURL(starsRef);
};

export const downloadFilesFromStorage = async (folderRef: StorageReference): Promise<string[]> => {
	try {
		const {items} = await listAll(folderRef);

		const downloadUrls: string[] = [];

		for (const itemRef of items) {
			// eslint-disable-next-line no-await-in-loop
			const downloadUrl = await getDownloadURL(itemRef);
			downloadUrls.push(downloadUrl);
		}

		return downloadUrls;
	} catch (error) {
		console.error('Error al descargar archivos:', error);
		throw error;
	}
};
