import React, { useCallback, useState } from 'react'
import {ShowIncrement} from './ShowIncrement';
import '../02-useEffect/effects.css';


export default function CalbbackHook() {

    const [counter, setCounter] = useState( 10 );

/*     const increment = () => {
        setCounter( counter + 1 );
    } */

    const increment = useCallback( ( num ) => {
        setCounter( c => c + num );
    }, [ setCounter ]);

    return (
        <div>
            <h1>UseCallback hook: {counter} </h1>
            <hr></hr>

            <ShowIncrement increment={ increment }/>
        
        </div>
    )
}
