import React, { useState } from "react";

export default function CounterApp() {
  const [ state, setCounter ]  = useState( {
      counter1: 10,
      counter2: 20,
      counter3: 30,
      counter4: 40,
  } );

  const { counter1, counter2 } = state;
  /* console.log( counter ); */

  return (
    <div>
      <h1>{counter1}</h1>
      <h1>{counter2}</h1>
      <hr />

      <button 
      className='btn btn-primary'
      onClick = { () => {
        setCounter( {
            ...state, // El operador spread nos ayuda a crear una copia anterior de taodos los valores, esto es util con Redux
            counter1: counter1 + 1 // Acutaliza el valor solo de este atributo
        } );
      }}
      >
        +1
      </button>
    </div>
  );
}
