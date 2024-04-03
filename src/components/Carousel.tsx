import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import {getStorage, ref} from 'firebase/storage';
import {downloadFilesFromStorage} from '../firebase';

import 'swiper/css';
import 'swiper/css/pagination';

export function Carousel() {
	const [images, setimages] = useState<string[] | undefined>(undefined);
	const storage = getStorage();
	const folderRef = ref(storage, 'Galeria');

	useEffect(() => {
		const fetchImages = async () => {
			const downloadUrls = await downloadFilesFromStorage(folderRef);
			setimages(downloadUrls);
		};

		void fetchImages();
	}, []);

	return (
		<div className='mt-8 h-[450px]'>
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
		</div>
	);
}
