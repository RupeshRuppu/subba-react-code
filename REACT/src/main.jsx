import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AppClass from './AppClass.jsx';

const root = document.getElementById('root');

/* JSX */
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		{/* <App /> */}
		<AppClass />
	</React.StrictMode>
);
