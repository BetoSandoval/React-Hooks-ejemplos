import React, { useEffect, useState } from "react";
import "./effects.css";
import Message from "./Message";

export default function SimpleForm() {
  const [formSate, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formSate;

  useEffect( () => {
      //console.log('hey!');
  } )

  // Se ejecuta algo cuando formSatate cambia
  useEffect(() => {
    /* console.log('Cambio el State'); */
  }, [formSate]);

  // Se ejecuta algo cuando email cambia
  useEffect( () => {
      /* console.log('email cambio'); */
  }, [email] );

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formSate,
      [target.name]: target.value,
      [target.email]: target.value,
    });
  };

  return (
    <>
      <h1> UseEffect </h1>
      <hr />

      <form>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange} //onChage sucede cuando el valor de un elemento cambia
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Tu e-mail"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </div>

        {(name === "123") && <Message/>}
      </form>
    </>
  );
}

/* 
Conclusión:
Podemos utilizar el useEffect para escuchar cambios especificos en alguna parte del state o de la aplicación
*/