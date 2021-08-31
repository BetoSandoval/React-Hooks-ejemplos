import React, {useState} from 'react';
import MultipleCustomHooks from '../03-exammples/MultipleCustomHooks';
import './effects.css';

export default function RealExampleRef() {

    const [show, setShow] = useState(false);

    return (
        <div>
            { show && <MultipleCustomHooks/>}

            <button
                className = "btn btn-primary mt-5"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}
