import React, { useState, useEffect } from 'react'
import '../../sass/components/pureBootstrap/AreaTextElement_PB.scss'


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
    <div className="contElementAreaText container-fluid p-1">
      <label htmlFor={elementID} className="form-label labelOfForm">{labelElement}</label>
      <textarea id={elementID} name={name} disabled={disabled} className={disabled ? "form-control areaTextActiv": "form-control areaTextNotActiv"} 
      autoComplete="off" readOnly={readonly} style={{resize:resize}} placeholder={placeholder} rows={row} cols={cols} 
      value={valueOfAreaText} onChange={(ev) => handleChange(ev)} required={elementRequired}
      ></textarea>
    </div>
  )
}

export default AreaTextElement_PB;

/*
"form-control areaText" 
d-flex flex-column flex-lg-row
*/