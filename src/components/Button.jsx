import React from 'react'
import { Button } from "@material-tailwind/react";

const Button_custom = ({ button_text, onClick, btn_span }) => {
	return (
		<>
			<Button
				variant="outlined"
				className='w-44 h-14 bg-button border-none'
				style={{ color: 'white', fontSize: 18 }}
				onClick={onClick}
			>
				<span>{btn_span}</span>
				{button_text}
			</Button>
		</>
	)
}

export default Button_custom