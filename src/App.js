import React from 'react';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import './App.css';
import Home from './components';
import Resume from './components/Resume'



function App() {
  return (
    <>
<CssBaseline />
<Route exact path="/" component={Home} />
<Route path='/resume' component={Resume} />
</>
  );

  


}

export default App;
