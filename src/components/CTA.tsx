import React, {useState} from 'react';
import styles from '../style';
import {CustomButton} from './Button';
import SectionWrapper from '../hoc/SectionWrapper';
import {BookForm} from './Forms/BookForm';
import BasicModal from './Modal';
import {useData} from '../context/DataContext';

const CtaComponent = () => {
	const {book} = useData();
	const [isModalOpen, setIsModalOpen] = useState(false);

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

	const redirect = (url: string) => {
		window.open(url, '_blank');
	};

	return (
		<div onTouchStart={touchOpen} onKeyDown={handleKeyDown} tabIndex={0} id='book' className='pt-28'>
			<h1
				className='text-white text-6xl font-montserrat font-bold'
				style={{textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px'}}
			>
				Reservas
			</h1>
			{book && (
				<div
					className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
				>
					<div className='flex-1 flex flex-col'>
						<h2 className={styles.heading2}>{book.Titulo}</h2>
						<p className={`${styles.paragraph} max-w-[470px] mt-5`}>{book.Subtitulo}</p>
					</div>

					<div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
						<CustomButton
							handleClick={() => {
								redirect(book.Url);
							}}
							styles='text-white'
						>
							Reservar
						</CustomButton>
					</div>
					<BasicModal open={isModalOpen} setOpen={setIsModalOpen}>
						<BookForm BookInitialValues={book} />
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
