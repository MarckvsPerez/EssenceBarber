import React from 'react';
import {Tools} from '../assets';
import styles from '../style';
import {FaCalendar, FaClock} from 'react-icons/fa';

export const Schedule = () => {
	return (
		<section
			className='text-white w-full font-montserrat relative h-[400px]'
			style={{
				backgroundImage: `url(${Tools})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundBlendMode: 'multiply',
			}}
		>
			<div
				className='w-full h-full  absolute bg-black opacity-85'
				style={{
					mixBlendMode: 'multiply',
				}}
			></div>
			<div className={`${styles.paddingX} flex flex-col justify-center items-center relative z-2 w-full h-full`}>
				<FaClock className='w-full text-white text-center text-[48px] my-2' />
				<div
					className='text-white text-4xl text-center font-bold'
					style={{textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px'}}
				>
					De Martes a Sabado de 09h a 20h{' '}
				</div>
			</div>
		</section>
	);
};
