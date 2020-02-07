import React from 'react';
import './App.css';
import Buttons from "./Buttons";



const SetCounterValue = (props) => {

		return (
				<div className="App-header">
					<div className="box">
						<div className="boxInput">
						<form action="">
							<label>Start number</label>
							<input type="number" min={0}
								   value={props.state.startValue}
								   onChange={props.onChangeStart}/> <br/>
							<label>End number</label>
							<input type="number" min={0}
								   value={props.state.maxValue}
								   onChange={props.onChangeMax}/>
						</form>
						</div>
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
