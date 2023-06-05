import React, { useState, useEffect } from 'react';
import '../../sass/components/pureBootstrap/NumberElement_PB .scss'


function NumberElement_PB({ name, labelElement, elementRequired, response, placeholder, size, elementID, valueOfNumber, setValueOfNumber}) {
  const [responseNumber, setResponseNumber] = useState(response[0])

  useEffect(() => {
    setValueOfNumber(placeholder)
  }, [placeholder])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfNumber(ev.target.value);
  }

  return (
    <div className="contElementNumber container-fluid flex-row flex-lg-row p-1">
      <label htmlFor={elementID} className="labelOfForm">{labelElement}</label>
      <input name={name} type="number" className="contInputNumber" id={elementID} placeholder={placeholder} onChange={(ev) => handleChange(ev)}
        value={valueOfNumber} min="0" max={Math.pow(10, size) - 1} size={size} required={elementRequired} />
    </div>
  )
}

export default NumberElement_PB;

/*

*/