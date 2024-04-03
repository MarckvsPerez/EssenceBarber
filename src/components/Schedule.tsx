import React, {useEffect, useState} from 'react';
import styles from '../style';
import {FaClock} from 'react-icons/fa';
import SectionWrapper from '../hoc/SectionWrapper';
import {downloadFileFromStorage, fetchSchedule, storage} from '../firebase';
import BasicModal from './Modal';
import {ScheduleForm} from './Forms/ScheduleForm';
import {ref} from 'firebase/storage';

const starsRef = ref(storage, 'FondoHorario');

const Schedule = () => {
	const [schedule, setSchedule] = useState<{Info: string} | undefined>(undefined);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [url, setUrl] = useState<string | undefined>(undefined);

	const handleKeyDown = (event: {key: string}) => {
		if (event.key === 'º') {
			setIsModalOpen(true);
		}
	};

	useEffect(() => {
		void fetchSchedule(setSchedule);
		const fetchImage = async () => {
			const url = await downloadFileFromStorage(starsRef);
			setUrl(url);
		};

		void fetchImage();
	}, [schedule]);

	return (
		<div
			onKeyDown={handleKeyDown}
			tabIndex={0}
			className='text-white w-full font-montserrat relative inline-block h-[400px]'
		>
			{schedule === undefined ? (
				<h2>Cargando</h2>
			) : (
				<>
					<BasicModal open={isModalOpen} setOpen={setIsModalOpen}>
						<ScheduleForm ScheduleInitialValues={schedule} setValues={setSchedule} />
					</BasicModal>
					{url && <img src={url} className='h-full w-full object-cover' alt='' />}
					<div className='w-full top-0 h-full absolute bg-black opacity-85'></div>
					<div
						className={`${styles.paddingX} absolute top-0 flex flex-col justify-center items-center z-2 w-full h-full`}
					>
						<FaClock className='w-full text-white text-center text-[48px] my-2' />
						<div
							className='text-white text-4xl text-center font-bold'
							style={{textShadow: 'rgba(255,255,255,0.65) 0px 0px 13px'}}
						>
							{schedule.Info}
						</div>
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
