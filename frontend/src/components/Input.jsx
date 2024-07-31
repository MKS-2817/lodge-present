import React from 'react'
import './style/style.css';

const Input_custom = ({ onChange, value, placeholder, type }) => {
	return (
		<>
			<input
				className='bg-input_color text-fontSize_16 p-2 w-full h-14 rounded-3xl text-white mt-4 focus:ring-4 ring-ring_color duration-300 outline-none'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				type={type}
			/>
		</>
	)
}

export default Input_custom