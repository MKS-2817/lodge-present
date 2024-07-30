import React, { useContext } from 'react'
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import OpacityAnimetedPage from './../../components/animation/SetOpacityAnimatedPage';
import { AppContext } from '../../contexts/AppContext';
import './style/home.css';

const Home = () => {

	const { saveFiled } = useContext(AppContext);

	return (
		<OpacityAnimetedPage motion_div_className={'bg-background_color w-full h-dvh flex justify-center overflow-hidden pt-24'}>

			<img
				className='fixed w-dvh h-full object-cover blur-sm'
				src={require('../../assets/فایل جدید.png')}
				alt="shape.jpg"
			/>

			<div className='container h-full md:w-[50%] lg:w-[40%] xl:w-[35%] overflow-hidden'>

				<Navbar
					titr={' گیلانه جان '}
				/>


				<div className='scroll_hide w-full h-full flex flex-col gap-8 px-10 overflow-y-scroll pb-56 pt-4' dir='rtl'>
					{
						saveFiled.map((item, index) => (

							<div className='w-full h-36 p-2 flex items-center justify-between gap-2 bg-white/30 border border-white rounded-3xl backdrop-blur-3xl shadow-lg'
								key={index}
							>
								<div className='flex flex-col justify-center gap-8 w-1/2 h-32 text-center rounded-3xl'>

									<div
										className='w-full flex flex-col items-center justify-center text-fontSize_12'
									>
										نام نام خانوادگی :
										<p className='flex gap-2 text-fontSize_14 font-bold'>
											<span className='text-card_text'>{item.name}</span>
											<span className='text-card_text'>{item.lastName}</span>
										</p>
									</div>

									<p
										className=' w-full flex flex-col text-fontSize_12'
									>
										اتاق رزرو :
										<span className='text-card_text text-fontSize_14 font-bold'>{item.reservationRoom}</span>
									</p>
								</div>

								<div className='flex flex-col justify-center gap-8 w-1/2 h-32 text-center rounded-3xl text-fontSize_12'>
									<p
										className=' w-full flex flex-col'
									>
										تاریخ ورود :
										<span className='text-card_text text-fontSize_14 font-bold'>{item.entrance}</span>
									</p>
									<p
										className=' w-full flex flex-col'
									>
										تاریخ خروج :
										<span className='text-card_text text-fontSize_14 font-bold'>{item.left}</span>
									</p>

								</div>

							</div>
						))
					}
				</div>

				<div className='flex items-center justify-center absolute bottom-16 right-6 overflow-hidden'>
					<Link
						className='footer w-auto h-50 justify-center'
						to={'/createfrom'}
					>

						<md-fab aria-label="add" id='fab-custom_1' size="medium">
							<md-icon slot="icon" id='fab-custom_2'>add</md-icon>
						</md-fab>

					</Link>
				</div>

			</div>
		</OpacityAnimetedPage>
	)
}

export default Home;