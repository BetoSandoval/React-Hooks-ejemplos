import React from 'react';
import ReactDOM from 'react-dom';
import FromWithCustomHook from './components/02-useEffect/FormWithCustomHook';

/* import SimpleForm from './components/02-useEffect/SimpleForm'; */
/* import HooksApp from './HooksApp'; */
/* import CounterApp from './components/01-useState/CounterApp'; */
/* import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
 */
ReactDOM.render(
  <React.StrictMode>
    <FromWithCustomHook/>
  </React.StrictMode>,
  document.getElementById('root')
);

