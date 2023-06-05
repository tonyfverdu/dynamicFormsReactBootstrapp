import React, { useState } from 'react'
import TextElement_PB from '../pureBoostrap/TextElement_PB'


function AsignacionDelCaso({ municipality, departament, jobCenter }) {
  const [valueMunicipality, setValueMunicipality] = useState(municipality)
  const [valueDepartament, setValueDepartament] = useState(departament)
  const [valueOfJobCenter, setValueOfJobCenter] = useState(jobCenter)


  return (
    <section className="container-fluid d-flex flex-wrap justify-content-start align-items-center my-1 py-1 gx-1 border border-2 
    border-dark-subtle border-opacity-75 rounded" >
      <div className="container-fluid row gx-1 mb-2">
        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
          <TextElement_PB
            name={""}
            labelElement={"Municipio: "}
            elementRequired={true}
            response={""}
            placeholder={municipality}
            size={18}
            elementID={"municipalityId"}
            valueOfText={valueMunicipality}
            setValueOfText={setValueMunicipality}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
          <TextElement_PB
            name={""}
            labelElement={"Departamento: "}
            elementRequired={true}
            response={""}
            placeholder={departament}
            size={15}
            elementID={"departamentId"}
            valueOfText={valueDepartament}
            setValueOfText={setValueDepartament}
          />
        </div>
        <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-center">
          <TextElement_PB
            name={""}
            labelElement={"Centro de Trabajo: "}
            elementRequired={true}
            response={""}
            placeholder={jobCenter}
            size={30}
            elementID={"jobCenterId"}
            valueOfText={valueOfJobCenter}
            setValueOfText={setValueOfJobCenter}
          />
        </div>
      </div>

      <div className="container-fluid row gx-1 mb-1">
        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
          <button type="button" className="btn btn-outline-dark btn-sm border border-3 border-dark fw-bold">Cambiar de Municipio</button>
        </div>
        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
          <button type="button" className="btn btn-outline-dark btn-sm border border-3 border-dark fw-bold">Compartir Encuesta</button>
        </div>
        <div className="col-12 col-md-6 offset-1 col-lg-3 d-flex justify-content-center">
          <button type="button" className="btn btn-outline-dark btn-sm border border-3 border-dark fw-bold">Asignar 3 Ambito</button>
        </div>
      </div>
    </section>
  )
}

export default AsignacionDelCaso