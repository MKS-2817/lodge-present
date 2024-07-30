import React from 'react'
import './style/style.css'
const Button_custom = ({ button_text, onClick }) => {
	return (
		<>
			<md-filled-button
				id="md-filled-button_custom"
				onClick={onClick}
				style={{ width: '12rem', height:50 }}
			>
				{button_text}
			</md-filled-button>
		</>
	)
}

export default Button_custom