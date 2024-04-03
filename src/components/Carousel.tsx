import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import {getStorage, ref} from 'firebase/storage';
import {downloadFilesFromStorage} from '../firebase';

import 'swiper/css';
import 'swiper/css/pagination';
import BasicModal from './Modal';
import {CarouselForm} from './Forms/CarouselForm';
import {CircularProgress} from '@mui/material';

export function Carousel() {
	const storage = getStorage();

	const [images, setImages] = useState<string[] | undefined>(undefined);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const folderRef = ref(storage, 'Galeria');

	const handleKeyDown = (event: {key: string}) => {
		if (event.key === 'º') {
			setIsModalOpen(true);
		}
	};

	useEffect(() => {
		const fetchImages = async () => {
			const downloadUrls = await downloadFilesFromStorage(folderRef);
			setImages(downloadUrls);
		};

		void fetchImages();
	}, [images]);

	return (
		<div onKeyDown={handleKeyDown} tabIndex={0} className='mt-8 h-[450px]'>
			<h2>Galeria</h2>
			{images === undefined ? (
				<CircularProgress />
			) : (
				<>
					<BasicModal open={isModalOpen} setOpen={setIsModalOpen}>
						<CarouselForm images={images} set={setImages} />
					</BasicModal>
					<Swiper
						pagination={{
							dynamicBullets: true,
						}}
						modules={[Pagination]}
						className='mySwiper'
					>
						{images?.map((item, index) => (
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
