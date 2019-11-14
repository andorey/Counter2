import React from 'react';
import './App.css';


const Buttons = (props) => {
	return (
		<button
			onClick={props.onClick}
			disabled={props.disabled}>

			{props.children}

		</button>
	)
}


export default Buttons;
