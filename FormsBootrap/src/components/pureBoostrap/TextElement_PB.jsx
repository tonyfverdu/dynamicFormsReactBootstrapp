import React, { useState, useEffect } from 'react'
import '../../sass/components/pureBootstrap/TextElement_PB.scss'


function TextElement_PB({ name, labelElement, elementRequired, response, placeholder, size, elementID, valueOfText, setValueOfText}) {
  const [responseText, setResponseText] = useState(response[0])

  useEffect(() => {
    setValueOfText(placeholder)
  }, [placeholder])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfText(ev.target.value);
  }

  return (
    <div className="contElementText container-fluid flex-row flex-lg-row p-1">
      <label htmlFor={elementID} className="labelOfForm">{labelElement}</label>
      <input name={name} type="text" className="contInputText" autoComplete="off" id={elementID} placeholder={placeholder} onChange={(ev) => handleChange(ev)}
        value={valueOfText} size={size} required={elementRequired} />
    </div>
  )
}

export default TextElement_PB;

/*
  falta disabled
*/