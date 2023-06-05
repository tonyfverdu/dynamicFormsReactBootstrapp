import React, { useState, useEffect } from 'react'
import '../../sass/components/pureBootstrap/TelefElement_PB.scss'


function TelefElement_PB({ name, labelElement, elementRequired, response, placeholder, size, elementID, valueOfTelephone, setValueOfTelephone }) {
  const [responseTelf, setResponseTelef] = useState(response[0])

  useEffect(() => {
    setValueOfTelephone(placeholder)
  }, [placeholder])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfTelephone(ev.target.value);
  }

  return (
    <div className="contElementTelef container-fluid flex-row flex-lg-row p-1">
      <label htmlFor={elementID} className="labelOfForm col-form-label">{labelElement}</label>
      <input name={name} type="tel" className="form-control contInputTelef rounded-0" autoComplete="off" id={elementID} pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}" placeholder={placeholder}
        onChange={(ev) => handleChange(ev)} value={valueOfTelephone} size={size} maxLength="12" required={elementRequired} list="defaultTels" />
      <datalist id="defaultTels">
        <option value="96-111-1111"></option>
        <option value="96-222-2222"></option>
        <option value="91-333-3333"></option>
        <option value="93-444-4444"></option>
      </datalist>
    </div>
  )
}

export default TelefElement_PB;

/*

*/