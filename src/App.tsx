import React from 'react';
import styles from './style';
import {Navbar, Client, CtaComponent, Footer, Hero, Schedule, Location, Services} from './components';
import {BrowserRouter} from 'react-router-dom';
import {Carousel} from './components/Carousel';
import {DataProvider} from './context/DataContext';

export const App = () => {
	return (
		<BrowserRouter>
			<div className='bg-primary w-full  overflow-hidden'>
				<div className={`shadow-lg fixed w-full bg-primary z-10 ${styles.paddingX} ${styles.flexCenter}`}>
					<div className={`${styles.boxWidth}`}>
						<Navbar />
					</div>
				</div>
				<DataProvider>
					<div className={`bg-primary mt-10 ${styles.flexStart}`}>
						<div className={`${styles.boxWidth}`}>
							/<Hero />
						</div>
					</div>

					<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
						<div className={`${styles.boxWidth}`}>
							<Services />
						</div>
					</div>

					<div className={`bg-primary mt-10 ${styles.flexStart}`}>
						<div className={`${styles.boxWidth}`}>
							<Schedule />
							<Location />
							<Carousel />
						</div>
					</div>

					<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
						<div className={`${styles.boxWidth}`}>
							<CtaComponent />
							<Client />
							<Footer />
						</div>
					</div>
				</DataProvider>
			</div>
		</BrowserRouter>
	);
};
