import { Component } from 'react';

class AppClass extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
			show: false,
		};
	}

	showHide = () => {
		this.setState({
			count: this.state.count,
			show: this.state.show === true ? false : true,
		});
	};

	handleInc = () => {
		this.setState({
			count: this.state.count <= 9 ? this.state.count + 1 : this.state.count,
			show: this.state.show,
		});
	};

	render() {
		return (
			<>
				<button id="click-me" onClick={this.showHide}>
					Click Me
				</button>

				<div id="box" className={this.state.show ? 'show' : 'hide'}>
					<button onClick={this.showHide} id="remove">
						Remove
					</button>
				</div>

				<button onClick={this.handleInc}>Inc</button>
				<p id="my-p">count is {this.state.count}</p>
			</>
		);
	}
}

export default AppClass;

/* Lifecycle of a component */
