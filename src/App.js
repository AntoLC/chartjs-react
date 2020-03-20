import React from 'react';
import './App.css';
import ChartJS from './pages/ChartJS/ChartJS';
import D3 from './pages/D3/D3';
import SimpleMenu from './component/SimpleMenu/SimpleMenu.component';
import {
	Switch,
	Route
} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function App() {
	return (
		<div className="App">
		<Typography component="div">
			<Box m={1} fontSize="h3.fontSize">
				Some Charts
			</Box>
		</Typography>
		<SimpleMenu/>
		<Switch>
			<Route exact path='/' component={ChartJS}/>
			<Route exact path='/d3' component={D3}/>
		</Switch>
		</div>
	);
}
	
export default App;
