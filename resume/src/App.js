import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { MyWork } from "./components/MyWork/MyWorkPage";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";


class App extends Component {
  render () {
  return (
    <div className="App">
     <Router>
    <Header  /> 
    
    <Switch> 
       <Route path='/' exact component={Home} /> 


       <Route path='/work' exact component={MyWork} />

      <Route path='/contact' exact component={Contact} />  

       <Route path='/skills' exact component={Skills} /> 
    </Switch>

      </Router> 
    </div>
  );
}
}

export default App;