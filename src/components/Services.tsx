import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {type CategoriaType} from '../types';
import {collection, getDocs} from '@firebase/firestore';
import {db} from '../firebase';
import BasicModal from './Modal';
import {ServicesForm} from './ServicesForm';
import SectionWrapper from '../hoc/SectionWrapper';

const Services = () => {
	const [servicios, setServicios] = useState<CategoriaType[] | undefined>(undefined);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const {ref, inView} = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const handleKeyDown = (event: {key: string}) => {
		if (event.key === 'º') {
			setIsModalOpen(true);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const response: CategoriaType[] = [];
			try {
				const querySnapshot = await getDocs(collection(db, 'TipoDeServicio'));
				querySnapshot.forEach((doc) => {
					response.push(doc.data() as CategoriaType);
				});
			} catch (error) {
				console.error('Error fetching documents: ', error);
			} finally {
				setServicios(response);
			}
		};

		void fetchData();
	}, []);

	return (
		<div
			id='services'
			ref={ref}
			onKeyDown={handleKeyDown}
			tabIndex={0}
			className={'font-montserrat flex-row flex-wrap  pt-28 justify-start'}
		>
			<h1 className='text-white text-6xl font-bold' style={{textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px'}}>
				Servicios
			</h1>
			{servicios?.map((item, ind) => (
				<div key={ind} className='my-4 p-4 flex-col rounded-[20px] '>
					<BasicModal open={isModalOpen} setOpen={setIsModalOpen}>
						<ServicesForm ServiceInitialValues={servicios} setValues={setServicios} />
					</BasicModal>
					{item.contenido.length > 0 && <h2 className='text-white text-2xl font-bold'>{item.categoria}</h2>}
					{item.contenido.map((contenido, ind2) => (
						<motion.div
							initial={{x: -100, opacity: 0}}
							animate={inView ? {x: 0, opacity: 1} : {}}
							transition={{duration: 1, delay: ind * 0.4 + ind2 * 0.1}}
							key={ind2}
						>
							<div className='flex text-white w-full pt-4'>
								<div className='whitespace-nowrap max-w-[80%] overflow-hidden overflow-ellipsis text-regular pr-4'>
									{contenido.nombre}
								</div>
								<div className='flex-1 border-b border-white'></div>
								<div className='text-xl pl-4'>{contenido.precio}</div>
							</div>
							<div className='text-gray-400 pt-1'>{contenido.descripcion}</div>
						</motion.div>
					))}
				</div>
			))}
		</div>
	);
};

const HeroWrapper = () => {
	return <SectionWrapper Component={Services} idName='services' />;
};

export default HeroWrapper;
