import React, { useState, useEffect } from 'react'
import '../../sass/components/pureBootstrap/AreaTextElement_PB.scss'


function AreaTextElement_PB({ labelElement, elementID, elementRequired, response, disabled, readonly, placeholder, row, cols, resize,
  valueOfAreaText, setValueOfAreaText }) {
  const [responseText, setResponseText] = useState(response[0])

  useEffect(()=> {
    setValueOfAreaText(placeholder)
  }, [])
  

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfAreaText(ev.target.value);
    console.log("Area de texto:  ", valueOfAreaText)
  }


  return (
    <div className="form-floating p-1 contElementAreaText">
      <label htmlFor={elementID} className="form-label labelOfForm">{labelElement}</label>
      <textarea id={elementID} required={elementRequired} disabled={disabled} className={disabled ? "form-control areaTextNotActiv" : "form-control areaTextActiv"}
        autoComplete="off" readOnly={readonly} style={{ resize: resize }} placeholder={placeholder} rows={row} cols={cols}
        value={valueOfAreaText} onChange={(ev) => handleChange(ev)}></textarea>
    </div>
  )
}

export default AreaTextElement_PB;

/*
"form-control areaText" 
d-flex flex-column flex-lg-row
*/