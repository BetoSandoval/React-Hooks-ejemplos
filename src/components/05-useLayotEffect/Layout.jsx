import React, { useLayoutEffect, useRef } from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "./layout.css";

export default function Layout() {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0]; // si no existe la data trae el elemento cero del array

  const pTag = useRef();

  useLayoutEffect(() => {
    console.log("hey");
  }, []);

  return (
    <div>
      <h1>BreackingBad Quotes</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p 
          className="mb-0"
          ref={pTag}
        >
          {quote}
          </p>
        <footer className="blockquote-footer mt-auto"> {author} </footer>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
}
