import React from 'react';
import ReactDOM from 'react-dom';

// import { Padre } from './components/07-tarea-memo/Padre';
/* import CalbbackHook from './components/06-memos/CallbackHook'; */
/* import MemoHook from './components/06-memos/MemoHook'; */
/* import Memorize from './components/06-memos/Memorize'; */
/* import Layout from '../src/components/05-useLayotEffect/Layout'; */
/* import RealExampleRef from './components/04-useRef/RealExampleRef'; */
/* import FocusScreen from './components/04-useRef/FocusScreen'; */
/* import MultipleCustomHooks from './components/03-exammples/MultipleCustomHooks'; */
/* import FromWithCustomHook from './components/02-useEffect/FormWithCustomHook'; */
/* import SimpleForm from './components/02-useEffect/SimpleForm'; */
/* import HooksApp from './HooksApp'; */
/* import CounterApp from './components/01-useState/CounterApp'; */
/* import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
 */
// import './components/08-useReducer/intro-reducer';
import TodoApp from './components/08-useReducer/TodoApp';


ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

