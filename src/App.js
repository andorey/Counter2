import React from 'react';
import './App.css';
import SetCounterValue from "./SetCounterValue";
import AppBox from "./AppBox";


class App extends React.Component {

	state = {
		counter: 0,
		maxCounter: 5,
		buttonCount: false,
		buttonRes: false,
		buttonSet: false,
		startValue: 0,
		maxValue: 5
	};


	onClickUp = () => {

		if (this.state.counter < this.state.maxCounter) {
			this.setState({counter: this.state.counter + 1}
			)
		}
		if (this.state.counter === this.state.maxCounter - 1) {
			this.setState({buttonCount: true})
		}
	};

	onClickReset = () => {
		this.setState({
				counter: 0,
				buttonCount: false
			}
		)
	};

	changeValue = () => {

	};

	onChangeStart = (event) => {
		this.setState({startValue: Number(event.currentTarget.value)},
		() => {this.changeValue()}
		)
	};

	onChangeMax = () => {

	};


	render() {
		return (
			<div className="App">
				<SetCounterValue onChangeStart={this.onChangeStart}
								 onChangeMax={this.onChangeMax}
								 state={this.state}/>
				<AppBox state={this.state}
						onClickUp={this.onClickUp}
						onClickReset={this.onClickReset}/>
			</div>
		)
	}
}


export default App;
