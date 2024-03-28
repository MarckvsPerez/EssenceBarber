import React, {useEffect} from 'react';
import {Wrapper, Status} from '@googlemaps/react-wrapper';

import {apiKey} from '../constants';
import {Gamba} from '../assets';

declare global {
	interface Window {
		initMap?: any;
	}
}

export function MapComponent() {
	useEffect(() => {
		const initMap = () => {
			const mapElement = document.getElementById('map');
			const myLatLng = {lat: 41.475444, lng: 2.083139};

			if (mapElement) {
				const map = new window.google.maps.Map(mapElement, {
					zoom: 16,
					center: myLatLng,
				});

				const iconSize = {
					width: 50,
					height: 50,
				};

				const marker = new window.google.maps.Marker({
					position: myLatLng,
					map,
					icon: {
						url: Gamba,
						scaledSize: new window.google.maps.Size(
							iconSize.width,
							iconSize.height,
						),
					},
					animation: google.maps.Animation.DROP,
					title: 'Essence Barber',
				});

				marker.addListener('click', () => {
					console.log('visit');
				});
			} else {
				console.error('Element with ID "map" not found!');
			}
		};

		const script = document.createElement('script');
		script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
		script.async = true;
		window.initMap = initMap;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
			delete window.initMap;
		};
	}, []);

	return <div className='w-full h-[400px] my-20' id='map'></div>;
}
