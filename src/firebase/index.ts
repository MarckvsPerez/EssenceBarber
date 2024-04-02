import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

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
