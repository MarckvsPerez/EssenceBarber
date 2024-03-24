import React from 'react';
import styles from '../style';
import {discount, Tools} from '../assets';
import {GetStarted} from './GetStarted';
import {FaCalendar} from 'react-icons/fa';

export const Hero = () => {
	return (
		<section id='inicio' className={'flex md:flex-row flex-col py-16'}>
			<div
				className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
			>
				<div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
					<FaCalendar className='text-white' />
					<p className={`${styles.paragraph} ml-2`}>
						<span className='text-white'>Próxima apertura</span>
					</p>
				</div>

				<div className='flex flex-row justify-between items-center w-full'>
					<h1 className='font-montserrat font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full'>
						Barbershop <br className='sm:block' />{' '}
						<span className='font-extrabold text-gradient tracking-tighter'>
							ESSENCE <br />
						</span>
						Sant Cugat
					</h1>

					<div className='ss:flex hidden md:mx-4 mr-0'>
						<GetStarted />
					</div>
				</div>

				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Nuestro equipo de expertos identifica los estilos de corte que mejor
					se adapten a ti. Examinamos las últimas tendencias en cortes de
					cabello, técnicas de barbería y estilos más demandados por nuestros
					clientes.
				</p>
			</div>

			<div
				className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
			>
				<img
					src={Tools}
					alt='billing'
					className='w-[100%] h-[100%] relative z-[5] object-contain'
					style={{maskImage: ' linear-gradient(black 80%, transparent)'}}
				/>

				<div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
				<div className='absolute z-[1] w-[50%] h-[50%] rounded-full white__gradient bottom-40' />
				<div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
			</div>

			<div className={`ss:hidden ${styles.flexCenter}`}>
				<GetStarted />
			</div>
		</section>
	);
};
