import React from 'react';
import styles from './style';
import {
	Navbar,
	Billing,
	Business,
	CardDeal,
	Client,
	CtaComponent,
	Footer,
	Hero,
	Stats,
	Testimonials,
} from './components';

export const App = () => {
	return (
		<div className='bg-primary w-full  overflow-hidden'>
			<div
				className={`shadow-lg  fixed w-full bg-primary z-10 ${styles.paddingX} ${styles.flexCenter}`}
			>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div className={`bg-primary mt-10 ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					/<Hero />
				</div>
			</div>

			<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Stats />
					<Business />
					<Billing />
					<CardDeal />
					<Testimonials />
					<Client />
					<CtaComponent />
					<Footer />
				</div>
			</div>
		</div>
	);
};
