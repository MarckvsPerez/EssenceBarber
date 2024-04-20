import React from 'react';
import styles from './style';
import {Navbar, Client, CtaComponent, Footer, Hero, Schedule, Location, Services} from './components';
import {BrowserRouter} from 'react-router-dom';
import {Carousel} from './components/Carousel';

export const App = () => {
	return (
		<BrowserRouter>
			<div className='bg-primary-o w-full overflow-hidden'>
				<div className={`bg-primary shadow-lg fixed w-full z-10 ${styles.paddingX} ${styles.flexCenter}`}>
					<div className={`${styles.boxWidth}`}>
						<Navbar />
					</div>
				</div>
				<div className={`mt-10 ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<Hero />
					</div>
				</div>

				<div className={`${styles.paddingX} ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<Services />
					</div>
				</div>

				<div className={`mt-10 ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<Schedule />
						<Location />
						<Carousel />
					</div>
				</div>

				<div className={`${styles.paddingX} ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<CtaComponent />
						<Client />
						<Footer />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};
