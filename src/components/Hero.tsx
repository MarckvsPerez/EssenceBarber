import React, {useState} from 'react';
import styles from '../style';
import {Wall} from '../assets';
import {WhatsApp} from './WhatsApp';
import {FaCalendar} from 'react-icons/fa';
import BasicModal from './Modal';
import {HeroForm} from './Forms/HeroForm';
import SectionWrapper from '../hoc/SectionWrapper';
import {useData} from '../context/DataContext';

const Hero = (): JSX.Element => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const {titles} = useData();

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

	if (titles !== undefined) {
		return (
			<div
				onKeyDown={handleKeyDown}
				onTouchStart={touchOpen}
				tabIndex={0}
				className={'flex md:flex-row flex-col mt-28'}
			>
				<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
					<BasicModal open={isModalOpen} setOpen={setIsModalOpen}>
						<HeroForm HeroInitialValues={titles} />
					</BasicModal>
					<div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
						<FaCalendar className='text-white' />
						<p className={`${styles.paragraph} ml-2`}>
							<span className='text-white'>Próxima apertura</span>
						</p>
					</div>

					<div className='flex flex-row justify-between items-center w-full'>
						<h1 className='font-montserrat font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full'>
							{titles.Titulo} <br className='sm:block' />{' '}
							<span className='font-extrabold text-gradient tracking-tighter'>
								{titles.Marca} <br />
							</span>
							{titles.Subtitulo}
						</h1>

						<div className='ss:flex hidden md:mx-4 mr-0'>
							<WhatsApp />
						</div>
					</div>

					<p className={`${styles.paragraph} max-w-[470px] mt-5`}>{titles.Texto}</p>
				</div>

				<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
					<img
						src={Wall}
						alt='billing'
						className='w-[100%] h-[100%] max-h-[900px] relative z-[5] object-contain'
						style={{maskImage: ' linear-gradient(black 80%, transparent)'}}
					/>

					<div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
					<div className='absolute z-[1] w-[50%] h-[50%] rounded-full white__gradient bottom-40' />
					<div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
				</div>

				<div className={`ss:hidden ${styles.flexCenter}`}>
					<WhatsApp />
				</div>
			</div>
		);
	}

	return <h2>Cargando</h2>;
};

const HeroWrapper = () => {
	return <SectionWrapper Component={Hero} idName='home' />;
};

export default HeroWrapper;
