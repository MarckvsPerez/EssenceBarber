import React, {useEffect, useState} from 'react';
import styles from '../style';
import {CustomButton} from './Button';
import SectionWrapper from '../hoc/SectionWrapper';
import {type BookType} from '../types';
import {fetchBook} from '../firebase';
import {BookForm} from './Forms/BookForm';
import BasicModal from './Modal';

const CtaComponent = () => {
	const [data, setData] = useState<BookType | undefined>(undefined);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleKeyDown = (event: {key: string}) => {
		if (event.key === 'º') {
			setIsModalOpen(true);
		}
	};

	useEffect(() => {
		void fetchBook(setData);
	}, []);

	const redirect = (url: string) => {
		window.open(url, '_blank');
	};

	return (
		<div onKeyDown={handleKeyDown} tabIndex={0} id='book' className='pt-28'>
			<h1
				className='text-white text-6xl font-montserrat font-bold'
				style={{textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px'}}
			>
				Reservas
			</h1>
			{data && (
				<div
					className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
				>
					<div className='flex-1 flex flex-col'>
						<h2 className={styles.heading2}>{data.Titulo}</h2>
						<p className={`${styles.paragraph} max-w-[470px] mt-5`}>{data.Subtitulo}</p>
					</div>

					<div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
						<CustomButton
							handleClick={() => {
								redirect(data.Url);
							}}
							styles='text-white'
						>
							Reservar
						</CustomButton>
					</div>
					<BasicModal open={isModalOpen} setOpen={setIsModalOpen}>
						<BookForm BookInitialValues={data} setValues={setData} />
					</BasicModal>
				</div>
			)}
		</div>
	);
};

const HeroWrapper = () => {
	return <SectionWrapper Component={CtaComponent} idName='book' />;
};

export default HeroWrapper;
