import React, {useEffect} from 'react';
import {services} from '../constants';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

export const Services = () => {
	const {ref, inView} = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<section
			id='services'
			ref={ref}
			className={'font-montserrat flex-row flex-wrap  pt-28 justify-start'}
		>
			<h1
				className='text-white text-6xl font-bold'
				style={{textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px'}}
			>
				Serivicios
			</h1>
			{services.map((categoria, ind) => (
				<div key={ind} className='my-4 p-4 flex-col rounded-[20px] '>
					<h2 className='text-white text-2xl font-bold'>
						{categoria.categoria}
					</h2>
					{categoria.contenido.map((contenido, ind2) => (
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
		</section>
	);
};
