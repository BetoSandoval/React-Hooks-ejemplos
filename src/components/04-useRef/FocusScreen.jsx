import React, { useRef } from 'react';
import './effects.css';

export default function FocusScreen() {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>

            <input className='form-control' placeholder="Su nombre" ref={ inputRef }/>

            <button 
                className="btn btn-outline-primary mt-5"
                onClick= { handleClick }
            >
                Focus
            </button>
        </div>
    )
}
