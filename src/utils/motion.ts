export const textVariant = (delay: string) => {
	return {
		hidden: {
			y: -50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				duration: 1.25,
				delay,
			},
		},
	};
};

export const fadeIn = (direction: string, type: string, delay: string, duration: string) => {
	return {
		hidden: {
			x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
			y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type,
				delay,
				duration,
				ease: 'easeOut',
			},
		},
	};
};

export const zoomIn = (delay: string, duration: string) => {
	return {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: 'tween',
				delay,
				duration,
				ease: 'easeOut',
			},
		},
	};
};

export const slideIn = (direction: string, type: string, delay: string, duration: string) => {
	return {
		hidden: {
			x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
			y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
		},
		show: {
			x: 0,
			y: 0,
			transition: {
				type,
				delay,
				duration,
				ease: 'easeOut',
			},
		},
	};
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.2) => {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren,
				delayChildren,
			},
		},
	};
};
