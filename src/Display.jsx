import React from 'react';
import './App.css';

const Display = (props) => {

		return (
			<div
				className={props.state.counter < props.state.maxCounter ? 'display' : 'maxValueClass'}>
				<div>
					{props.state.counter}
				</div>

			</div>
		)
	};


export default Display;
