import React, { useState, useEffect } from 'react'
import '../../sass/components/pureBootstrap/DateElement_PB.scss'


function DateElement_PB({ name, labelElement, elementRequired, response, placeholder, elementID, valueOfDate, setValueOfDate }) {
  const [responseSelect, setResponseSelect] = useState(response[0])

  useEffect(() => {
    setValueOfDate(placeholder)
  }, [placeholder])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfDate(ev.target.value);
  }

  return (
    <div className="contElementDate container-fluid p-1">
      <label htmlFor={elementID} className="labelOfForm">{labelElement}</label>
      <input name={name} type="date" className="contInputDate" id={elementID} placeholder={placeholder}
        onChange={(ev) => handleChange(ev)} value={valueOfDate} required={elementRequired} />
    </div>
  )
}

export default DateElement_PB;