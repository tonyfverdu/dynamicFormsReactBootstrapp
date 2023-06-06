import React, { useState } from 'react'
import NumberElement_PB from '../pureBoostrap/NumberElement_PB'
import DateElement_PB from '../pureBoostrap/DateElement_PB'
import SelectElement_PB from '../pureBoostrap/SelectElement_PB'


function DatosDeVacunacion({ casoVacunacion, vacunado, fechaVacunacion, numDosis, presentaDocumento, tablaVacunas, vacunaContrastada, fechaInicSintomas,
  fechaDiagnostico, anyoEPI, semanaEPI, observaciones }) {
  const [valueOfCaso, setValueOfCaso] = useState(casoVacunacion[0])
  const [valueOfVacunado, setValueOfVacunado] = useState(vacunado[1])
  const [valueOfFechaVacunacion, setValueOfFechaVacunacion] = useState(fechaVacunacion)
  const [valueOfNumDosis, setValueOfNumDosis] = useState(numDosis)
  const [valueOfPresentaDocumento, setValueOfPresentaDocumento] = useState(presentaDocumento[0])

  return (
    <section className="container-fluid d-flex flex-wrap justify-content-start align-items-center my-1 py-1 gx-1 border border-2 
    border-dark-subtle border-opacity-75 rounded" >
      <div className="container-fluid row gx-0 mb-2">
        <div className="col-12 col-md-2">
          <SelectElement_PB
            selectTextLabel={"Caso"}
            required={true}
            disabled={false}
            response={[casoVacunacion[0]]}
            optionsValues={casoVacunacion}
            setValue={setValueOfCaso}
          />
        </div>
        <div className="col-12 col-md-3">
          <SelectElement_PB
            selectTextLabel={"Ha recibido vacuna?"}
            required={true}
            disabled={false}
            response={[vacunado[0]]}
            optionsValues={vacunado}
            setValue={setValueOfVacunado}
          />
        </div>
        <div className="col-12 col-md-2">
          <DateElement_PB
            name={`name_${fechaVacunacion}`}
            labelElement={"Fecha de Vacunación"}
            elementRequired={true}
            response={"2023-04-01"}
            placeholder={"2023-01-01"}
            elementID={`id_${fechaVacunacion}`}
            valueOfDate={valueOfFechaVacunacion}
            setValueOfDate={setValueOfFechaVacunacion}
          />
        </div>
        <div className="col-12 col-md-1">
          <NumberElement_PB
            name={`name_${"NumDosis"}`}
            labelElement={"N°Dosis"}
            elementRequired={true}
            response={[1]}
            placeholder={0}
            size={2}
            elementID={`id_${"NumDosis"}`}
            valueOfNumber={valueOfNumDosis}
            setValueOfNumber={setValueOfNumDosis}
          />
        </div>
        <div className="col-12 col-md-4">
          <SelectElement_PB
            selectTextLabel={"Presenta documento de vacunación?"}
            required={true}
            disabled={false}
            response={[presentaDocumento[0]]}
            optionsValues={presentaDocumento}
            setValue={setValueOfPresentaDocumento}
          />
        </div>
      </div>
    </section>
  )
}

export default DatosDeVacunacion