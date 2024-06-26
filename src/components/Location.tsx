import React from 'react';
import MapComponent from './MapComponent';
import {FaMapMarkerAlt, FaExternalLinkAlt} from 'react-icons/fa';
import {CustomButton} from './Button';
import {useInView} from 'react-intersection-observer';
import {sprayTransparent} from '../assets';
import SectionWrapper from '../hoc/SectionWrapper';

const Location = () => {
	const {ref} = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const image: string = sprayTransparent;

	const redirect = () => {
		window.open('https://maps.app.goo.gl/Gs5Y3WXDJrS9xeMd6', '_blank');
	};

	return (
		<div className='pt-28  text-white font-montserrat'>
			<h1
				className='text-white text-6xl flex-1 sm:px-16 px-6 font-bold mb-6'
				style={{textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px'}}
			>
				Ubicación
			</h1>
			<div className='grid  relative sm:grid-cols-4'>
				<div className='flex '>
					{sprayTransparent !== null && <img className='h-[400px] object-contain' src={image} alt='' />}
					<div className='absolute z-[0] w-[60%] h-[60%] -right-[30%] rounded-full blue__gradient' />
				</div>
				<div ref={ref} className='sm:col-span-3 sm:pr-16 px-6'>
					<div className='text-center mb-6'>
						<div>
							<FaMapMarkerAlt className='w-full text-white text-center text-[32px] mb-4' />
						</div>
						<p className='mb-8'>Carrer de l&apos;Abat Armengol, 22, 08173 Sant Cugat del Vallès, Barcelona</p>
						<CustomButton handleClick={redirect}>
							<div className='flex'>
								<FaExternalLinkAlt className='mr-4' />
								Ver en Maps
							</div>
						</CustomButton>
					</div>
					<MapComponent />
				</div>
			</div>
		</div>
	);
};

const HeroWrapper = () => {
	return <SectionWrapper Component={Location} idName='location' />;
};

export default HeroWrapper;
