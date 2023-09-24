import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import { Router} from 'react-router-dom';

function App() {
return (
	<Router>
	<Navbar />
	</Router>
);
}

export default App;
