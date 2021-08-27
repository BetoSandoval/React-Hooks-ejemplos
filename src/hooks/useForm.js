import { useState } from "react";

export default function useFrom(initialState = {}) {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
      [target.email]: target.value,
      [target.password]: target.value,
    });
  };

  return [values, handleInputChange, reset];
}
