import { useState } from 'react';
import './App.css';

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

export default App;

/*

   useState
   useEffect 
   useRef
   useReducer (Redux easy)

   useMemo,
   useCallBack

*/
