import React from 'react'
import { Input, Slider } from "@material-tailwind/react";

const Input_custom = ({ input_label, input_type, onChange, value }) => {
	return (
		<>
			<Input
				style={{
					backgroundColor: '#BFC9C1',
					fontSize: 22,
					width: '100%',
					height: 60,
					color: '#fff',
					borderRadius: 15,
				}}
				variant="outlined"
				label={input_label}
				type={input_type}
				color="black"
				size="lg"
				value={value}
				onChange={onChange}
			/>
		</>
	)
}

export default Input_custom