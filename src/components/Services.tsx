import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import BasicModal from './Modal';
import {ServicesForm} from './Forms/ServicesForm';
import SectionWrapper from '../hoc/SectionWrapper';
import {useData} from '../context/DataContext';

const Services = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const {services} = useData();

	const {ref, inView} = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'º') {
			setIsModalOpen(true);
		}
	};

	const touchOpen = (event: React.TouchEvent) => {
		if (event.touches.length === 3) {
			setIsModalOpen(true);
		}
	};

	return (
		<div
			id='services'
			ref={ref}
			onKeyDown={handleKeyDown}
			onTouchStart={touchOpen}
			tabIndex={0}
			className={'font-montserrat flex-row flex-wrap  pt-28 justify-start'}
		>
			<h1 className='text-white text-6xl font-bold' style={{textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px'}}>
				services
			</h1>
			{services?.map((item, ind) => (
				<div key={ind} className='my-4 p-4 flex-col rounded-[20px] '>
					<BasicModal open={isModalOpen} setOpen={setIsModalOpen}>
						<ServicesForm ServiceInitialValues={services} />
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
