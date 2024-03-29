import React from 'react';
import styles from '../style';
import {CustomButton} from './Button';

export const CtaComponent = () => {
	const redirect = () => {
		window.open('https://booksy.com/es-es/18076_barber-essence_barberia_28176_granada', '_blank');
	};

	return (
		<section id='book' className='pt-28'>
			<h1
				className='text-white text-6xl font-montserrat font-bold'
				style={{textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px'}}
			>
				Reservas
			</h1>
			<div
				className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
			>
				<div className='flex-1 flex flex-col'>
					<h2 className={styles.heading2}>¡Asegura tu Estilo!</h2>
					<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
						No te pierdas la oportunidad de experimentar nuestros servicios de primera y obtener el aspecto que deseas
					</p>
				</div>

				<div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
					<CustomButton handleClick={redirect} styles='text-white'>
						Reservar
					</CustomButton>
				</div>
			</div>
		</section>
	);
};
