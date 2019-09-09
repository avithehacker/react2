import React from 'react';
import veeerybook1 from './veeerybook1';
import veeerybook2 from './veeerybook2';

import veeerybook3 from './veeerybook3';
import veeerybook4 from './veeerybook4';

import book from './book';
import logo from './logo.svg';
import './App.css';
import './3book.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	// body...
return(
	
<Router>
<div> 
<a href="/veeerybook1">veeerybook1</a>
<br></br>

<a href="/veeerybook2">veeerybook2</a>

	</div>
<div className='App'>

<Route path="/veeerybook1" component={veeerybook1} />

<Route path="/veeerybook2" component={veeerybook2} />

<Route path="/veeerybook3" component={veeerybook3} />
<Route path="/veeerybook4" component={veeerybook4} />
<Route path="/book" component={book} />
</div>	




</Router>




	);



}

export default App;
