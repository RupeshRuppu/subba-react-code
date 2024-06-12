import { useState } from 'react';
import './App.css';

function Child(props) {
	const { count, setCount } = props;
	return (
		<>
			<button
				onClick={function () {
					if (count <= 9) {
						setCount(count + 1);
					}
				}}
			>
				Inc
			</button>
			<p id="my-p">count is {count}</p>
		</>
	);
}

function App() {
	const [show, setShow] = useState(false);
	const [count, setCount] = useState(0);

	function showHide() {
		setShow(show === true ? false : true);
	}

	return (
		<>
			<button id="click-me" onClick={showHide}>
				Click Me
			</button>

			<div id="box" className={show ? 'show' : 'hide'}>
				<button id="remove">Remove</button>
			</div>

			<Child count={count} setCount={setCount} />
		</>
	);
}

export default App;
