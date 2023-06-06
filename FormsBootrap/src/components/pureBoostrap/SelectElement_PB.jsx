import React, { useState, useEffect } from "react";
import '../../sass/components/pureBootstrap/SelectElement_PB.scss';


function SelectElement_PB({ selectTextLabel, required, disabled, response, optionsValues, setValue }) {
  const [valueSelect, setValueSelect] = useState(response[0])
  const [responseSelect, setResponseSelect] = useState(response[0])

  useEffect(() => {
    setValueSelect(response[0])
  }, [])

  function handleOnChangeSelect(ev) {
    ev.preventDefault();
    setValueSelect(ev.target.value)
    setValue(valueSelect)
  }


  return (
    <div className="contSelect container d-flex justify-content-start">
      <label htmlFor="selectId" className="form-label me-2 labelOfSelect">{selectTextLabel}</label>
      <select id={`idSelect_${selectTextLabel}`} className="form-select-sm bg-light select_B rounded-0" size="1" aria-label=".form-select-sm" 
      disabled={disabled} required={required} value={valueSelect} onChange={(ev) => handleOnChangeSelect(ev)} >
        <option value="" className="fw-bold text-secondary">Select option</option>
        {
          optionsValues.map((element, index) => <option key={index} value={element} >{element}</option>)
        }
      </select>
    </div>
  );
}

export default SelectElement_PB;