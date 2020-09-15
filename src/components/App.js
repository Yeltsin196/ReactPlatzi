import React from 'react';
import {  BrowserRouter,Switch, Route } from "react-router-dom";
import Badges from './Badges';
import BadgeNew from './BadgeNew';
import BadgeEdit from './BadgeEdit';
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import BadgeDetailsContainer from './BadgeDetailsContainer';

function App(){
 return(
     <BrowserRouter>
     <Layout>

     
     <Switch>
     <Route exact path="/badges" component={Badges}/>
     <Route exact path="/badges/new" component={BadgeNew}  />
     <Route exact path="/badges/:badgeId" component={ BadgeDetailsContainer }  />
     <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}  />
     
     <Route component={NotFound}  />
     </Switch>
     </Layout>
     </BrowserRouter>
 );
}

export default App;