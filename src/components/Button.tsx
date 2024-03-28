import React from 'react';

export const Button = ({styles}: {styles?: string}) => {
	return (
		<button
			type='button'
			className={`py-4 px-6 font-montserrat font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
		>
			Get Started
		</button>
	);
};

type CustomButtonProps = {
	children: React.ReactNode;
	handleClick: () => void;
};

export const CustomButton = ({children, handleClick}: CustomButtonProps) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const hoverStyle = {
		boxShadow: '0px 0px 10px #6d6d6d',
		transition: 'all 0.3s ease',
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<button
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className='p-4 font-montserrat rounded-[10px] border-2 border-gray-500'
			style={{...(isHovered ? hoverStyle : {transition: 'all 0.3s ease'})}}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};
