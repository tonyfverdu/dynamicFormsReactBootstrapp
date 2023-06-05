import React from 'react'
import LabelElement_PB from './LabelElement_PB.jsx'
import SelectElement_PB from './SelectElement_PB.jsx'


function ListaHeridas_Heces_PB() {
  return (
    <div className="contElementHH row p-1 mb-1 ms-1 border-success">
      <div className="col-12 col-md-4 col-lg-6">
        <LabelElement_PB
          textOfLabel={"Aislamiento de C. botulinum"}
        />
      </div>
      <div className="col-6 col-md-4 col-lg-3">
        <SelectElement_PB
          selectTextLabel={"Herida"}
          disabled={false}
          optionsValues={["Leve", "Superficial", "Moderada", "Grave", "Muy Grave"]}
        />
      </div>
      <div className="col-6 col-md-4 col-lg-3">
        <SelectElement_PB
          selectTextLabel={"Heces"}
          disabled={false}
          optionsValues={["Liquida", "Semiliquida", "Normal", "Sangrado"]}
        />
      </div>
    </div>
  )
}

export default ListaHeridas_Heces_PB