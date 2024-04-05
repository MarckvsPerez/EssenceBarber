import React, {
	type ReactNode,
	createContext,
	useState,
	useEffect,
	useContext,
	useRef,
	type MutableRefObject,
} from 'react';
import {type TitulosType, type CategoriaType, type BookType} from '../types';
import {
	downloadFileFromStorage,
	downloadFilesFromStorage,
	fetchBook,
	fetchSchedule,
	fetchServices,
	fetchTitles,
} from '../firebase';
import {LoadingComponent} from '../components/LoadingComponent';

type DataContextType = {
	services: CategoriaType[];
	titles: TitulosType;
	book: BookType;
	schedule: {Info: string};
	url: string;
	gallery: string[];
	loading: MutableRefObject<boolean>;
	setServices: React.Dispatch<React.SetStateAction<CategoriaType[] | undefined>>;
	setTitles: React.Dispatch<React.SetStateAction<TitulosType | undefined>>;
	setBook: React.Dispatch<React.SetStateAction<BookType | undefined>>;
	setSchedule: React.Dispatch<React.SetStateAction<{Info: string} | undefined>>;
	setUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
	setGallery: React.Dispatch<React.SetStateAction<string[] | undefined>>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{children?: ReactNode}> = ({children}) => {
	const loading = useRef(true);
	const [services, setServices] = useState<CategoriaType[] | undefined>(undefined);
	const [titles, setTitles] = useState<TitulosType | undefined>(undefined);
	const [book, setBook] = useState<BookType | undefined>(undefined);
	const [schedule, setSchedule] = useState<{Info: string} | undefined>(undefined);
	const [url, setUrl] = useState<string | undefined>(undefined);
	const [gallery, setGallery] = useState<string[] | undefined>(undefined);

	useEffect(() => {
		if (loading.current) {
			try {
				void fetchServices(setServices);
				void fetchTitles(setTitles);
				void fetchBook(setBook);
				void fetchSchedule(setSchedule);
				void downloadFileFromStorage(setUrl);
				void downloadFilesFromStorage(setGallery);
			} catch (error) {
				throw new Error(error as string);
			}

			loading.current = false;
		}
	}, []);

	if (
		services !== undefined &&
		titles !== undefined &&
		book !== undefined &&
		schedule !== undefined &&
		url !== undefined &&
		gallery !== undefined
	) {
		return (
			<DataContext.Provider
				value={{
					services,
					titles,
					book,
					schedule,
					gallery,
					url,
					loading,
					setServices,
					setTitles,
					setBook,
					setSchedule,
					setGallery,
					setUrl,
				}}
			>
				{children}
			</DataContext.Provider>
		);
	}

	return <LoadingComponent />;
};

export const useData = () => {
	const context = useContext(DataContext);
	if (!context) {
		throw new Error('useData debe ser usado dentro de un DataProvider');
	}

	return context;
};
