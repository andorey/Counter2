import React from 'react';
import './App.css';
import Buttons from "./Buttons";



const SetCounterValue = (props) => {

		return (
				<div className="App-header">
					<div className="box">
						<form action="">
							<input type="number" step="1"
								   value={props.state.startValue}
							onChange={props.onChangeStart}/>
							<input type="number" step="1"
								   value={props.state.maxValue}
							onChange={props.onChangeMax}/>
						</form>
						<div className="boxButton">
							<div className="button">
								<Buttons>
									Set
								</Buttons>
							</div>
						</div>
					</div>
				</div>
		)
}


export default SetCounterValue;
