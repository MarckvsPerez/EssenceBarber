import React from 'react';
import {Box, LinearProgress} from '@mui/material';
import {LogoEssence} from '../assets';

export const LoadingComponent = () => {
	return (
		<div className='bg-black h-[100vh] w-full flex flex-col items-center justify-center text-white'>
			<img className='w-[60vw] max-h-[410px] max-w-[500px]' src={LogoEssence} alt='Logo' />
			<Box sx={{width: '60vw', maxWidth: ' 500px'}}>
				<LinearProgress color='inherit' />
			</Box>
		</div>
	);
};
