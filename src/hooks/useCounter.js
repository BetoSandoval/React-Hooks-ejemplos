import { useState } from "react";


export default function useCounter( initialState = 10 ) {
    const [counter, setCounter] = useState( initialState );
    
    const increment = () => {
        setCounter( counter + 1 );
    }

    const reset = () => {
        setCounter(initialState);
    }

    const decremnt = () => {
        setCounter( counter - 1 );
    }

    return {
        counter,
        increment,
        decremnt,
        reset,
    }
}
