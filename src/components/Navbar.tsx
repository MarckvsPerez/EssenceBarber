import React, {useState} from 'react';
import {LogoEssence, close, menu} from '../assets';
import {navLinks} from '../constants';

export const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);

	return (
		<nav className='w-full flex py-6 justify-between items-center navbar'>
			<img src={LogoEssence} alt='Essence' className='h-[50px] w-[320px] object-cover rounded-lg' />

			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((nav) => (
					<li
						key={nav.id}
						onClick={() => {
							setActive(nav.id);
						}}
					>
						<div
							className={`${
								active === nav.id ? 'text-white' : 'text-gray-400'
							} hover:text-white text-[18px] font-medium cursor-pointer mx-2`}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</div>
					</li>
				))}
			</ul>

			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img
					src={toggle ? close : menu}
					alt='menu'
					className='min-w-[28px] w-[28px] h-[28px] object-contain cursor-pointer'
					onClick={() => {
						setToggle((prev) => !prev);
					}}
				/>
				<div
					className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className='list-none flex flex-col justify-end items-center flex-1'>
						{navLinks.map((nav) => (
							<li
								key={nav.id}
								onClick={() => {
									setActive(nav.id);
								}}
							>
								<div
									className={`${
										active === nav.id ? 'text-white' : 'text-gray-400'
									} hover:text-white text-[18px] font-medium cursor-pointer mt-2`}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
