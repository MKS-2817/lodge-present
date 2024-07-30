import React, { useContext } from 'react'
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import OpacityAnimetedPage from './../../components/animation/SetOpacityAnimatedPage';
import { Button } from '@material-tailwind/react';
import { AppContext } from '../../contexts/AppContext';

const Home = () => {

	const { saveFiled } = useContext(AppContext);

	return (
		<OpacityAnimetedPage motion_div_className={'bg-background_color w-full h-dvh flex justify-center overflow-hidden pt-24'}>

			<div className='container h-full md:w-[50%] lg:w-[40%] xl:w-[35%] overflow-hidden'>

				<Navbar
					titr={' گیلانه جان '}
				/>

				<div className='scroll_hide w-full h-full flex flex-col gap-8 p-4 overflow-y-scroll pb-56' dir='rtl'>

					<img
						className='fixed w-72 -right-20 top-[15%] -rotate-12 blur-sm'
						src={require('../../assets/shape.png')}
						alt="shape.jpg"
					/>
					<img
						className='fixed w-72 -left-28 top-[60%] -rotate-12 blur-sm'
						src={require('../../assets/shap2.png')}
						alt="shape.jpg"
					/>

					{
						saveFiled.map((item, index) => (

							<div className='w-full h-44 p-2 flex items-center justify-between gap-2 bg-white/30 border border-white rounded-3xl backdrop-blur-3xl shadow-lg'
								key={index}
							>
								<div className='flex flex-col justify-center gap-8 w-1/2 h-32 text-center rounded-3xl'>

									<div
										className='w-full flex flex-col items-center justify-center text-fontSize_10'
									>
										نام نام خانوادگی :
										<p className='flex gap-2 text-fontSize_18 font-bold'>
											<span className='text-text_color'>{item.name}</span>
											<span className='text-text_color'>{item.lastName}</span>
										</p>
									</div>

									<p
										className=' w-full flex flex-col'
									>
										اتاق رزرو :
										<span className='text-text_color text-fontSize_18 font-bold'>{item.reservationRoom}</span>
									</p>
								</div>

								<div className='flex flex-col justify-center gap-8 w-1/2 h-32 text-center rounded-3xl'>
									<p
										className=' w-full flex flex-col'
									>
										تاریخ ورود :
										<span className='text-text_color text-fontSize_18 font-bold'>{item.entrance}</span>
									</p>
									<p
										className=' w-full flex flex-col'
									>
										تاریخ خروج :
										<span className='text-text_color text-fontSize_18 font-bold'>{item.left}</span>
									</p>

								</div>

							</div>
						))
					}

				</div>

				<div className='flex items-center justify-center absolute bottom-16 right-6 overflow-hidden'>
					<Link
						className='footer h-50 justify-center'
						to={'/createfrom'}
					>

						<Button className='bg-button w-16 h-16 rounded-2xl' style={{ color: 'white', fontSize: 20 }}>
							<i className="fas fa-plus" />
						</Button>

					</Link>
				</div>

			</div>
		</OpacityAnimetedPage>
	)
}

export default Home;