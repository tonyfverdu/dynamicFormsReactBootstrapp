import React, { useState } from 'react'
import SelectElement_PB from './SelectElement_PB.jsx'
import TextElement_PB from './TextElement_PB.jsx'
import DateElement_PB from './DateElement_PB.jsx'
import LabelElement_PB from './LabelElement_PB.jsx'
import "../../sass/components/pureBootstrap/ListaTextDateElement_B.scss";


function ListaTextDateElement_B({ analisis }) {
  const [valueOfText, setValueOfText] = useState("")
  const [valueOfDate, setValueOfDate] = useState("01/01/2023")

  return (
    <>
      <div className="contElement row p-1 mb-1 ms-1">
        <div className="col-12 col-md-4 col-lg-3">
          <SelectElement_PB
            textLabel={analisis}
            disabled={false}
            optionsValues={["Negativo", "Positivo"]}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <TextElement_PB
            name={"text1"}
            labelElement={"Tipo de toxina identificada"}
            elementRequired={false}
            response={["Una toxina que no se que es"]}
            placeholder={""}
            size={100}
            elementID={"text1"}
            valueOfText={valueOfText}
            setValueOfText={setValueOfText}
          />
        </div>
        <div className="col-12 col-md-2 col-lg-3">
          <DateElement_PB
            name={"date1"}
            labelElement={"Fecha"}
            elementRequired={false}
            response={["01/01/2023"]}
            elementID={"date1"}
            valueOfText={valueOfDate}
            setValueOfText={setValueOfDate}
          />
        </div>
      </div>
    </>
  )
}

export default ListaTextDateElement_B