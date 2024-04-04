import {CircularProgress} from '@mui/material';
import React from 'react';

export const LoadingComponent = () => {
	return (
		<div className='bg-black h-[100vh] w-full flex items-center justify-center text-white'>
			<CircularProgress style={{color: 'white'}} />
		</div>
	);
};
