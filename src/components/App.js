import React from 'react';
import {  BrowserRouter,Switch, Route } from "react-router-dom";
import Badges from './Badges';
import BadgeNew from './BadgeNew';

function App(){
 return(
     <BrowserRouter>
     <Switch>

     
     <Route exact path="/badges" component={Badges}/>
     <Route exact path="/badges/new" component={BadgeNew}  />
     </Switch>
     </BrowserRouter>
 );
}

export default App;