import React from 'react';
import styles from '../style';
import {FaWhatsapp} from 'react-icons/fa';

export const GetStarted = () => {
	return (
		<div
			className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-white p-[2px] cursor-pointer`}
		>
			<div
				className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
			>
				<div className={`${styles.flexStart} flex-col`}>
					<FaWhatsapp className='w-full text-white text-center text-[32px]' />
					<p className='font-montserrat font-medium text-[18px] leading-[23.4px]'>
						<span className='w-full text-white text-center'>Contacta</span>
					</p>
				</div>
			</div>
		</div>
	);
};
