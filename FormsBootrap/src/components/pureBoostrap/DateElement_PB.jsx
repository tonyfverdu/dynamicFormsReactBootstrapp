import React, {useState} from 'react'
import '../../sass/components/pureBootstrap/DateElement_PB.scss'


function DateElement_PB({ name, labelElement, elementRequired, response, elementID, valueOfDate}) {
  const [responseSelect, setResponseSelect] = useState(response[0])

  return (
    <div className="contElementDate container-fluid p-1">
      <label htmlFor={elementID} className="labelOfForm">{labelElement}</label>
      <input name={name} type="date" className="contInputDate" id={elementID} pattern="\d{2}-\d{2}-\d{4}" onChange={(ev) => handleChange(ev)}
        value={valueOfDate} required={elementRequired} />
    </div>
  )
}

export default DateElement_PB;