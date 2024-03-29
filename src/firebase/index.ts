import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCCs9x6p3-0_Ay1JrC3WT2UNd14JVSkMsI',
	authDomain: 'essence-b7023.firebaseapp.com',
	projectId: 'essence-b7023',
	storageBucket: 'essence-b7023.appspot.com',
	messagingSenderId: '609104083028',
	appId: '1:609104083028:web:3cd04050fb030965bf95c1',
	measurementId: 'G-BMH4MSVYN7',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
