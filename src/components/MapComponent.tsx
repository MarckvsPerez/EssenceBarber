import React, {useState} from 'react';
import {
	APIProvider,
	Map,
	AdvancedMarker,
	InfoWindow,
	useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import {apiKey} from '../constants';

export function MapComponent() {
	const position = {lat: 41.475444, lng: 2.083139};
	const [markerRef, marker] = useAdvancedMarkerRef();

	const [open, setOpen] = useState(false);

	return (
		<APIProvider apiKey={apiKey}>
			<div
				className='w-full h-[300px] my-4'
				style={{
					outline: 'none',
					borderColor: '#9ecaed',
					boxShadow: '0 0 10px #9ecaed',
				}}
			>
				<Map defaultZoom={15} defaultCenter={position} mapId='map'>
					<AdvancedMarker
						ref={markerRef}
						position={position}
						onClick={() => {
							setOpen((prev) => !prev);
						}}
					/>

					{open && (
						<InfoWindow
							anchor={marker}
							onCloseClick={() => {
								setOpen((prev) => !prev);
							}}
						>
							<h1 className='text-xl text-gray-800 font-bold font-montserrat'>
								Essence Barber
							</h1>
							<a
								href='https://maps.app.goo.gl/Gs5Y3WXDJrS9xeMd6'
								target='_blank'
								style={{
									color: 'blue',
									textDecoration: 'underline',
									fontWeight: 'bold',
								}}
								rel='noreferrer'
							>
								Ver en Google Maps
							</a>
						</InfoWindow>
					)}
				</Map>
			</div>
		</APIProvider>
	);
}
