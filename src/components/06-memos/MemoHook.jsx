import React, {useState} from 'react';
import '../02-useEffect/effects.css';
import useCounter from '../../hooks/useCounter'

export default function MemoHook() {

    const { counter, increment } = useCounter( 10 );
    const [ show, setShow ] = useState( true );

    return (
        <div>
            <h1>Memo hook</h1>
            <h3>Counter: <small> value={counter} </small></h3>
            <hr />

            <button className="btn btn-primary" onClick={increment}>
                +1
            </button>

            <button
                className="btn btn-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                } }
            >
                Show/hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}