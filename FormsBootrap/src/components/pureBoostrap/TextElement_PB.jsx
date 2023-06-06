import React, { useState, useEffect } from 'react'
import '../../sass/components/pureBootstrap/TextElement_PB.scss'


function TextElement_PB({ name, labelElement, elementRequired, response, placeholder, size, elementID, valueOfText, setValueOfText, disabled=false }) {
  const [responseText, setResponseText] = useState(response[0])

  useEffect(() => {
    setValueOfText(placeholder)
  }, [placeholder])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfText(ev.target.value);
  }

  return (
    <div className="contElementText container-fluid d-flex flex-row justify-content-start flex-lg-row p-1">
      <label htmlFor={elementID} className="labelOfForm col-form-label">{labelElement}</label>
      <input name={name} type="text" className="form-control contInputText rounded-0" autoComplete="off" id={elementID} placeholder={placeholder}
        value={valueOfText} onChange={(ev) => handleChange(ev)} size={size} required={elementRequired} disabled={disabled} />
    </div>
  )
}

export default TextElement_PB;

/*
  falta disabled
*/