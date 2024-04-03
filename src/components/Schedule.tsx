import React from 'react';
import {Tools} from '../assets';
import styles from '../style';
import {FaClock} from 'react-icons/fa';
import SectionWrapper from '../hoc/SectionWrapper';

const Schedule = () => {
	return (
		<div className='text-white w-full font-montserrat relative inline-block h-[400px]'>
			<img src={Tools} className='h-full w-full object-cover' alt='' />
			<div className='w-full top-0 h-full absolute bg-black opacity-85'></div>
			<div className={`${styles.paddingX} absolute top-0 flex flex-col justify-center items-center  z-2 w-full h-full`}>
				<FaClock className='w-full text-white text-center text-[48px] my-2' />
				<div
					className='text-white text-4xl text-center font-bold'
					style={{textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px'}}
				>
					De Martes a Sabado de 09h a 20h{' '}
				</div>
			</div>
		</div>
	);
};

const HeroWrapper = () => {
	return <SectionWrapper Component={Schedule} idName='schedule' />;
};

export default HeroWrapper;
