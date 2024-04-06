import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import BasicModal from './Modal';
import {CarouselForm} from './Forms/CarouselForm';
import {CircularProgress} from '@mui/material';
import {useData} from '../context/DataContext';

export function Carousel() {
	const {gallery} = useData();
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

	return (
		<div onTouchStart={touchOpen} onKeyDown={handleKeyDown} tabIndex={0} className='mt-8 h-[450px]'>
			{gallery === undefined ? (
				<CircularProgress />
			) : (
				<>
					<BasicModal open={isModalOpen} setOpen={setIsModalOpen}>
						<CarouselForm images={gallery} />
					</BasicModal>
					<Swiper
						pagination={{
							dynamicBullets: true,
						}}
						modules={[Pagination]}
						className='mySwiper'
					>
						{gallery?.map((item, index) => (
							<SwiperSlide key={index}>
								<img src={item} alt='' />
							</SwiperSlide>
						))}
					</Swiper>
				</>
			)}
		</div>
	);
}
