import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { AboutMePage } from "./components/AboutMePage/AboutMePage";
import { MyWorkPage } from "./components/MyWork/MyWorkPage";
import { Resume } from "./components/Resume_Page/Resume";


class App extends Component {
  render () {
  return (
    <div className="App">
     <Router>
    <Header  /> 
    
    <Switch> 
       <Route path='/' exact component={Resume} /> 

       <Route path='/work' exact component={MyWorkPage} />

      <Route path='/about' exact component={AboutMePage} />  
    </Switch>

      </Router> 
    </div>
  );
}
}

export default App;