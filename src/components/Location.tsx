import React, {useEffect} from 'react';
import {MapComponent} from './MapComponent';
import {FaMapMarkerAlt, FaExternalLinkAlt} from 'react-icons/fa';
import {motion} from 'framer-motion';
import {CustomButton} from './Button';
import {useInView} from 'react-intersection-observer';
import {sprayTransparent} from '../assets';

export const Location = () => {
	const {ref, inView} = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			console.log('Hola');
		}
	}, [inView]);

	const hola = () => {
		window.open('https://maps.app.goo.gl/Gs5Y3WXDJrS9xeMd6', '_blank');
	};

	return (
		<section id='location' className='py-28  text-white'>
			<h1
				className='text-white text-4xl flex-1 sm:px-16 px-6 font-bold mb-6'
				style={{textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px'}}
			>
				Ubicación
			</h1>
			<div className=' grid  sm:grid-cols-4'>
				<div className='flex'>
					<img className='h-[50vh]' src={sprayTransparent} alt='' />
				</div>
				<div ref={ref} className='col-span-3 sm:pr-16 px-6'>
					<div className='text-center mb-6'>
						<motion.div
							initial={{y: -500, scale: 1, opacity: 0}}
							animate={inView ? {y: 0, scale: 1.2, opacity: 1} : {}}
							transition={{
								duration: 0.5,
							}}
						>
							<FaMapMarkerAlt className='w-full text-white text-center text-[32px] mb-4' />
						</motion.div>
						<p className='mb-8'>
							Carrer de l&apos;Abat Armengol, 22, 08173 Sant Cugat del Vallès,
							Barcelona
						</p>
						<CustomButton handleClick={hola}>
							<div className='flex'>
								<FaExternalLinkAlt className='mr-4' />
								Ver en Maps
							</div>
						</CustomButton>
					</div>
					<MapComponent />
				</div>
			</div>
		</section>
	);
};
