import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import { doggos } from './Doggos';
import 'tachyons';

ReactDOM.render(
  <div>
    <Card id={doggos[0].id} name={doggos[0].name} about={doggos[0].about}/>
    <Card id={doggos[1].id} name={doggos[1].name} about={doggos[1].about}/>
    <Card id={doggos[2].id} name={doggos[2].name} about={doggos[2].about}/>
  </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
