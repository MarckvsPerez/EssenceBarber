import React from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import {apiKey} from '../constants';

export const MapComponent = () => (
	<APIProvider apiKey={apiKey}>
		<Map
			className='w-full h-[400px]'
			defaultCenter={{lat: 22.54992, lng: 0}}
			defaultZoom={3}
			gestureHandling={'greedy'}
		/>
	</APIProvider>
);
