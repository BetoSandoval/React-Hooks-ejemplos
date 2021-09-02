import React, {useState, useMemo} from 'react';
import '../02-useEffect/effects.css';
import useCounter from '../../hooks/useCounter';
import { procesoPesado } from'../../helpers/ProcesosPesados'

export default function MemoHook() {

    const { counter, increment } = useCounter( 1000 );
    const [ show, setShow ] = useState( true );

    const memoProcesoPesado = useMemo( () => procesoPesado( counter ), [ counter ] );

    return (
        <div>
            <h1>Memo hook</h1>
            <h3>Counter: <small> value = {counter} </small></h3>
            <hr />

            <p> { memoProcesoPesado } </p>

            <button className="btn btn-primary" onClick={increment}>
                +1
            </button>

            <button
                className="btn btn-outline-primary mx-3"
                onClick={ () => {
                    setShow( !show );
                } }
            >
                Show/hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}