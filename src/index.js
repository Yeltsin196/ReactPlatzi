import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import Badges from './components/Badges';
import Navbar from './components/Navbar';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';

/*import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* serviceWorker.unregister(); */

const container = document.getElementById('root');
/* ReactDOM.render(<Badge firstName="Yeltsin" lastName="Ramirez"
 jobTittle="Web Enginner"
 avatar="https://www.gravatar.com/avatar?d=identicon"
 twitter="@yeez196" />, container); */
 ReactDOM.render(<App/>,container);
/* 
 ReactDOM.render(<Badgeform/>,container); */