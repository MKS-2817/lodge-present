import React from 'react'

const Input_custom = ({ onChange, value }) => {
	return (
		<>
			<input
				style={{
					backgroundColor: '#BFC9C1',
					fontSize: 22,
					width: '100%',
					height: 60,
					color: '#fff',
					borderRadius: 15,
				}}
				value={value}
				onChange={onChange}
			/>
		</>
	)
}

export default Input_custom