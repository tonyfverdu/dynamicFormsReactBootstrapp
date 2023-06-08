import React, { useState } from 'react'
import NumberElement_PB from '../pureBoostrap/NumberElement_PB'
import DateElement_PB from '../pureBoostrap/DateElement_PB'
import AreaTextElement_PB from '../pureBoostrap/AreaTextElement_PB'
import SelectElement_PB from '../pureBoostrap/SelectElement_PB'
import TableElement_PB from '../pureBoostrap/TableElement_PB'


function DatosDeVacunacion({ casoVacunacion, vacunado, fechaVacunacion, numDosis, presentaDocumento, tablaVacunas, vacunaContrastada,
  fechaInicSintomas, fechaDiagnostico, anyoEPI, semanaEPI, observaciones }) {
  const labelAndText = {
    observacionesLabel: "Observaciones"
  }

  const [toggleVacunas, setToggleVacunas] = useState(false)

  const [valueOfCaso, setValueOfCaso] = useState(casoVacunacion[0])
  const [valueOfVacunado, setValueOfVacunado] = useState(vacunado[1])
  const [valueOfFechaVacunacion, setValueOfFechaVacunacion] = useState(fechaVacunacion)
  const [valueOfNumDosis, setValueOfNumDosis] = useState(numDosis)
  const [valueOfPresentaDocumento, setValueOfPresentaDocumento] = useState(presentaDocumento[0])

  const [valueOfVacunaContrastada, setValueOfVacunaContrastada] = useState(vacunaContrastada[0])
  const [valueOfVacunado2, setValueOfVacunado2] = useState(vacunaContrastada["Vacuna Contrastada"][1])
  const [valueOfFechaVacunacionContrastada, setValueOfFechaVacunacionContrastada] = useState(vacunaContrastada["fechaVacunacionContrastada"])


  const [valueOfFechaInicSintomas, setValueOfFechaInicSintomas] = useState(fechaInicSintomas)
  const [valueOfFechaDiagnostico, setValueOfFechaDiagnostico] = useState(fechaDiagnostico)
  const [valueOfAnyoEPI, setValueOfAnyoEPI] = useState(anyoEPI)
  const [valueOfSemanaEPI, setValueOfSemanaEPI] = useState(semanaEPI)
  const [valueOfObservaciones, setValueOfObservaciones] = useState(observaciones)

  return (
    <section className="container-fluid d-flex flex-wrap justify-content-start align-items-center my-1 py-1 gx-1 border border-2 
    border-dark-subtle border-opacity-75 rounded" >
      <div className="container row gx-1 mb-4 ms-1">
        <div className="col-12 col-md-4">
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
        <div className="col-12 col-md-3">
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
        <div className="col-12 col-md-2">
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
        <div className="col-12 col-md-6">
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

      <div className="container row gx-0 mb-0 mx-1">
        <div className="col-12 container ps-1">
            <TableElement_PB
              tabla={tablaVacunas}
              toogleVariable = {toggleVacunas}
            />
        </div>
      </div>
      <div className="container row gx-0 mb-4 mx-1">
        <div className="col-11 offset-md-8 ">
          <div class="btn-group" role="group" aria-label="Management Vaccines">
            <button type="button" class="btn btn-sm btn-outline-success me-2">Anadir Vacuna</button>
            <button type="button" class="btn btn-sm btn-outline-dark" value={toggleVacunas} onClick={() => setToggleVacunas(!toggleVacunas)}>Listar Vacunas</button>
          </div>
        </div>
      </div>

      <div className="container row gx-1 mb-2 bg-light">
        <div className="col-12 col-lg-4 ps-1">
          <SelectElement_PB
            selectTextLabel={"Vacuna Contrastada:"}
            required={true}
            disabled={false}
            response={[vacunaContrastada["Vacuna Contrastada"][1]]}
            optionsValues={vacunaContrastada["Vacuna Contrastada"]}
            setValue={setValueOfVacunaContrastada}
          />
        </div>
        <div className="col-12 col-lg-4">
          <SelectElement_PB
            selectTextLabel={"Vacunado:"}
            required={true}
            disabled={false}
            response={[vacunaContrastada["vacunado"][1]]}
            optionsValues={vacunaContrastada["vacunado"]}
            setValue={setValueOfVacunado2}
          />
        </div>
        <div className="col-12 col-lg-4">
          <DateElement_PB
            labelElement={"Fecha de inicio de Caducidad:"}
            elementRequired={true}
            response={["01-02-2023"]}
            placeholder={vacunaContrastada.fechaVacunacionContrastada}
            elementID={`id_${vacunaContrastada.fechaVacunacionContrastada}`}
            valueOfDate={valueOfFechaVacunacionContrastada}
            setValueOfDate={setValueOfFechaVacunacionContrastada}
          />
        </div>
      </div>

      <div className="container row gx-1 mb-2 ms-1">
        <div className="col-6 col-lg-4">
          <DateElement_PB
            labelElement={"Fecha de inicio de los primeros sintomas"}
            elementRequired={true}
            response={["01-02-2023"]}
            placeholder={fechaInicSintomas}
            elementID={`id_${fechaInicSintomas}`}
            valueOfDate={valueOfFechaInicSintomas}
            setValueOfDate={setValueOfFechaInicSintomas}
          />
        </div>
        <div className="col-6 col-lg-4">
          <DateElement_PB
            labelElement={"Fecha de diagnostico"}
            elementRequired={true}
            response={["01-02-2023"]}
            placeholder={fechaDiagnostico}
            elementID={`id_${fechaDiagnostico}`}
            valueOfDate={valueOfFechaDiagnostico}
            setValueOfDate={setValueOfFechaDiagnostico}
          />
        </div>
        <div className="col-6 col-lg-2">
          <NumberElement_PB
            labelElement={"Año EPI"}
            elementRequired={true}
            response={[2017]}
            placeholder={2023}
            size={4}
            elementID={`id_${anyoEPI}`}
            valueOfNumber={valueOfAnyoEPI}
            setValueOfNumber={setValueOfAnyoEPI}
          />
        </div>
        <div className="col-6 col-lg-2">
          <NumberElement_PB
            labelElement={"Semana EPI"}
            elementRequired={true}
            response={[20]}
            placeholder={15}
            size={2}
            elementID={`id_${semanaEPI}`}
            valueOfNumber={valueOfSemanaEPI}
            setValueOfNumber={setValueOfSemanaEPI}
          />
        </div>

      </div>
      <div className="container row gx-1 mb-2 ms-1">
        <div className="col-10 ps-1">
          <AreaTextElement_PB
            labelElement={labelAndText.observacionesLabel}
            elementRequired={true}
            response={[""]}
            disabled={false}
            readonly={false}
            placeholder={"Escriba sus observaciones ..."}
            row={2}
            cols={18}
            resize={false}
            elementID={`idAreaText_${labelAndText.observacionesLabel}`}
            valueOfAreaText={valueOfObservaciones}
            setValueOfAreaText={setValueOfObservaciones}
          />
        </div>
      </div>
    </section>
  )
}

export default DatosDeVacunacion