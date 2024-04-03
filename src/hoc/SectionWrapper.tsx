import React from 'react';
import {motion} from 'framer-motion';

import {staggerContainer} from '../utils/motion';

type StarWrapperProps = {
	Component: React.FC;
	idName: string;
};

const StarWrapper: React.FC<StarWrapperProps> = ({Component, idName}) => {
	return (
		<motion.section
			variants={staggerContainer()}
			initial='hidden'
			whileInView='show'
			viewport={{once: true, amount: 0.25}}
		>
			<span className='hash-span' id={idName}>
				&nbsp;
			</span>

			<Component />
		</motion.section>
	);
};

export default StarWrapper;
