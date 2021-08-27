import { useState } from "react";


export default function useCounter( initialState = 10 ) {
    const [state, setState] = useState( initialState );
    
    const increment = ( factor = 1 ) => {
        setState( state + factor );
    }

    const reset = () => {
        setState(initialState);
    }

    const decremnt = ( factor = 1 ) => {
        setState( state - factor );
    }

    return {
        state,
        increment,
        decremnt,
        reset,
    }
}
