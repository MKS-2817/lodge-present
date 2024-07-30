import React from 'react'

const Navbar = ({ titr }) => {
	return (
		<div className='w-full h-20 px-2 left-0 top-2 fixed z-40 flex items-center justify-center'>
			<div className='w-full h-full flex justify-center items-center text-fontSize_24 text-text_color bg-[#FCC245] rounded-3xl text-center  shadow-xl'>
				<h1 className='w-64 h-full flex justify-center items-center font-bold'>
					{titr}
				</h1>
			</div>
		</div>

	)
}

export default Navbar;