import React from 'react';
import useCounter from '../../hooks/useCounter';
import './counter.css';


export default function CounterWithCustomHook() {

    const {state, increment, decremnt, reset} = useCounter( 100 );

    return (
        <>
           <h1>Counter with Hook: { state } </h1>
           <hr/>

           <button onClick={ () => increment(2) } className="btn"> + 1 </button>
           <button onClick={ reset } className="btn"> Reset </button>
           <button onClick={ () => decremnt(2) } className="btn"> - 1 </button>
        </>
    )
}
