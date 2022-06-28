import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './blocks/Header';
import Home from './Home';
import Search from './Search';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        
        <Route path="/search" component={Search}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;