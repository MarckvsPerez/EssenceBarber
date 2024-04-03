import React from 'react';
import styles from '../style';
import {LogoEssence} from '../assets';
import {contact, socialMedia} from '../constants';
import {Contact} from './Contact';
import SectionWrapper from '../hoc/SectionWrapper';

const Footer = () => {
	return (
		<div className={'flex-col mt-28'}>
			<h1
				className='text-white text-6xl font-montserrat font-bold'
				style={{textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px'}}
			>
				Contacta
			</h1>
			<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
				<div className='flex flex-col w-full justify-start mr-10'>
					<img src={LogoEssence} alt='LogoEssence' className='w-full object-contain' />
				</div>
				<Contact />
			</div>
			<div className='flex-[1.5] w-full flex xs:flex-row flex-col gap-2 mb-6 md:mt-0 mt-10'>
				{contact.map((item) => (
					<div key={item.id} className={'flex flex-col ss:my-0 my-4 flex-1'}>
						<h4 className='font-montserrat font-medium text-white flex items-center'>
							<div className='h-[1px] w-[40px] mr-2 bg-white'></div>
							<span className='texto'>{item.id}</span>
						</h4>
						<div className='mt-4 text-ellipsis overflow-hidden'>
							<p className='font-montserrat font-normal text-dimWhite 							'>{item.value}</p>
						</div>
					</div>
				))}
			</div>

			<div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
				<p className='font-montserrat font-normal text-center text-[18px] leading-[27px] text-white'>
					Copyright Ⓒ 2024. All Rights Reserved.
				</p>

				<div className='flex flex-row md:mt-0 mt-6'>
					{socialMedia.map((social, index) => (
						<img
							key={social.id}
							src={social.icon}
							alt={social.id}
							className={`w-[21px] h-[21px] object-contain cursor-pointer ${
								index === socialMedia.length - 1 ? 'mr-0' : 'mr-6'
							}`}
							onClick={() => window.open(social.link)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

const HeroWrapper = () => {
	return <SectionWrapper Component={Footer} idName='contact' />;
};

export default HeroWrapper;
