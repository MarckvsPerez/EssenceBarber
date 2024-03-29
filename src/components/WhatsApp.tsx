import React from 'react';
import styles from '../style';
import {Cera} from '../assets';

export const WhatsApp = () => {
	return (
		<div className={`${styles.flexCenter} w-[240px]  p-[2px]`}>
			<div className={`${styles.flexStart} flex-col`}>
				<img
					style={{maskImage: ' linear-gradient(black 70%, transparent)'}}
					src={Cera}
					alt='Cera'
				/>
			</div>
		</div>
	);
};
