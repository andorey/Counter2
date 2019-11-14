import React from 'react';
import './App.css';
import Display from "./Display";
import Buttons from "./Buttons";


const AppBox = (props) => {


		return (
				<div className="App-header">
					<div className="box">

						<Display state={props.state}/>

						<div className="boxButton">
							<div className="button">
								<Buttons state={props.state} onClick={props.onClickUp} disabled={props.state.buttonCount}>
									int
								</Buttons>
								<Buttons state={props.state} onClick={props.onClickReset} disabled={props.state.buttonRes}>
									rst
								</Buttons>
							</div>
						</div>
					</div>
				</div>
		)
};


export default AppBox;
