import React from "react";

const FavoriteInput = ( {onChange: onInputChange, id} ) => {
  const inputHandler = (e) => onInputChange(e.target.value);

  return (
    <label htmlFor={id}>
      What is your favorite wild animal?
      <input id={id} onChange={inputHandler} />
    </label>
  )
};

export default FavoriteInput;