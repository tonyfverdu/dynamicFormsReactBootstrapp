import React from "react";
import '../../sass/components/pureBootstrap/SelectElement_PB.scss';


function SelectElement_PB({ textLabel, disabled, optionsValues }) {

  return (
    <div className="contSelect container d-flex justify-content-start">
      <label forHTML="exampleSelect" className="form-label col-3 mx-2 labelOfSelect">{textLabel}</label>
      <select className="form-select-sm col-9 bg-secundary select_B" id="exampleSelect" name="exampleSelect" size="1"
        defaultValue="Open this select menu" aria-label=".form-select-sm"  disabled={disabled} >
        <option value="" >Select option</option>
        {
          optionsValues.map((element, index) => <option key={index} value={element} >{element}</option>)
        }
      </select>
    </div>
  );
}

export default SelectElement_PB;