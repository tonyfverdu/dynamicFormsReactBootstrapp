import React, { useState, useEffect } from 'react'
import SelectElement_PB from '../pureBoostrap/SelectElement_PB'


function DatosEpidemiologicos({ caso, tipoCaso, comunidadAutonoma, pais, clasificacionCaso }) {
  const [valueOfCaso, setValueOfCaso] = useState(caso[0])
  const [valueOfTipoCaso, setValueOfTipoCaso] = useState(tipoCaso[0])
  const [valueOfComunidadAutonoma, setValueOfComunidadAutonoma] = useState(comunidadAutonoma[0])
  const [valueOfPais, setValueOfPais] = useState(pais[0])
  const [valueOfClasificacionCaso, setValueOfClasificacionCaso] = useState(clasificacionCaso[0])


  return (
    <section className="container-fluid d-flex flex-wrap justify-content-start align-items-center my-1 py-1 gx-1 border border-2 
    border-dark-subtle border-opacity-75 rounded" >
      <div className="container-fluid row gx-1">
        <div className="col-12 col-md-3">
          <SelectElement_PB
            selectTextLabel={"Caso:"}
            required={true}
            disabled={false}
            response={[caso[0]]}
            optionsValues={caso}
            setValue={setValueOfCaso}
          />
        </div>
        <div className="col-12 col-md-3">
          <SelectElement_PB
            selectTextLabel={"Tipo Caso*: "}
            required={true}
            disabled={false}
            response={[tipoCaso[0]]}
            optionsValues={tipoCaso}
            setValue={setValueOfTipoCaso}
          />
        </div>

        <div className="col-12 col-md-6">
          {
            valueOfTipoCaso !== "Extracomunitario" ?
              <SelectElement_PB
                selectTextLabel={"País: "}
                required={true}
                disabled={false}
                response={[pais[0]]}
                optionsValues={pais}
                setValue={setValueOfPais}
              />
              :
              <SelectElement_PB
                selectTextLabel={"Comunidad autónoma: "}
                required={true}
                disabled={false}
                response={[comunidadAutonoma[0]]}
                optionsValues={comunidadAutonoma}
                setValue={setValueOfComunidadAutonoma}
              />
          }
        </div>
      </div>

      <div className="container-fluid row gx-1">
        <div className="col-12 col-md-4">
          <SelectElement_PB
            selectTextLabel={"Clasificación Caso*: "}
            required={true}
            disabled={false}
            response={[clasificacionCaso[0]]}
            optionsValues={clasificacionCaso}
            setValue={setValueOfClasificacionCaso}
          />
        </div>
      </div>
    </section>
  )
}

export default DatosEpidemiologicos;