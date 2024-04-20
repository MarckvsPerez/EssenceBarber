import React, {useState} from 'react';
import styles from '../style';
import {FaClock} from 'react-icons/fa';
import SectionWrapper from '../hoc/SectionWrapper';
import BasicModal from './Modal';
import {ScheduleForm} from './Forms/ScheduleForm';
import {useData} from '../context/DataContext';

const Schedule = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const {url, schedule} = useData();

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

	return (
		<div
			onTouchStart={touchOpen}
			onKeyDown={handleKeyDown}
			tabIndex={0}
			className='text-white w-full font-montserrat relative inline-block h-[400px]'
		>
			{schedule === undefined ? (
				<h2>Cargando</h2>
			) : (
				<>
					<BasicModal open={isModalOpen} setOpen={setIsModalOpen}>
						<ScheduleForm ScheduleInitialValues={schedule} />
					</BasicModal>
					{url && <img src={url} className='h-full w-full object-cover' alt='' />}
					<div className='w-full top-0 h-full absolute bg-black opacity-65'></div>
					<div
						className={`${styles.paddingX} absolute top-0 flex flex-col justify-center items-center z-2 w-full h-full`}
					>
						<FaClock className='w-full text-white text-center text-[48px] my-2' />
						<div
							className='text-white text-4xl'
							style={{textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px'}}
							dangerouslySetInnerHTML={{__html: schedule.Info}}
						></div>
					</div>
				</>
			)}
		</div>
	);
};

const HeroWrapper = () => {
	return <SectionWrapper Component={Schedule} idName='schedule' />;
};

export default HeroWrapper;
