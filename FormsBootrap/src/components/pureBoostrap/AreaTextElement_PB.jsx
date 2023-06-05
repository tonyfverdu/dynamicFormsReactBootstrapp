import React, { useState, useEffect } from 'react'


function AreaTextElement_PB({ name, labelElement, elementRequired, response, disabled, readonly, placeholder, row, cols, resize,
  elementID, valueOfAreaText, setValueOfAreaText }) {
  // const [responseText, setResponseText] = useState(response[0])

  useEffect(() => {
    setValueOfAreaText(placeholder)
  }, [placeholder])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfAreaText(ev.target.value);
  }


  return (
    <div className="contElementAreaText container-fluid flex-column flex-lg-row p-1">
      <label htmlFor={elementID} className="labelOfForm form-label">{labelElement}</label>
      <textarea id={elementID} name={name} className="form-control" autoComplete="off" disabled={disabled} readOnly={readonly} resize={resize}
        placeholder={placeholder} rows={row} cols={cols} value={valueOfAreaText} onChange={(ev) => handleChange(ev)} required={elementRequired}
      ></textarea>
    </div>
  )
}

export default AreaTextElement_PB;