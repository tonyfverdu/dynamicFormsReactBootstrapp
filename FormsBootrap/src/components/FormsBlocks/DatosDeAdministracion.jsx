import React, { useState } from 'react'
import AreaTextElement_PB from '../pureBoostrap/AreaTextElement_PB'


function DatosDeAdministracion({ assignedJobCenter, assignedProfessional }) {
  const [valueAssignedJobCenter, setValueAssignedJobCenter] = useState(assignedJobCenter.name)
  const [valueAssignedProfessional, setValueAssignedProfessional] = useState(assignedProfessional.name)


  return (
    <section className="container-fluid d-flex flex-wrap justify-content-start align-items-center my-1 py-1 gx-1 border border-2 
    border-dark-subtle border-opacity-75 rounded" >
      <div className="container-fluid row gx-1">
        <div className="col-12 col-lg-6">
          <AreaTextElement_PB
            name={""}
            labelElement={"Centro asignado: "}
            elementRequired={true}
            response={[assignedJobCenter.name]}
            disabled={assignedJobCenter.disabled}
            readonly={assignedJobCenter.readonly}
            placeholder={assignedJobCenter.name}
            row={2}
            cols={18}
            resize={assignedJobCenter.resize}
            elementID={"jobCenterAssignedId"}
            valueOfAreaText={valueAssignedJobCenter}
            setValueOfAreaText={setValueAssignedJobCenter}
          />
        </div>
        <div className="col-12 col-lg-6">
          <AreaTextElement_PB
            name={""}
            labelElement={"Profesional asignado: "}
            elementRequired={true}
            response={[assignedProfessional.name]}
            disabled={assignedProfessional.disabled}
            readonly={assignedProfessional.readonly}
            placeholder={assignedProfessional.name}
            row={2}
            cols={18}
            resize={assignedJobCenter.resize}
            elementID={"jobCenterAssignedId"}
            valueOfAreaText={valueAssignedProfessional}
            setValueOfAreaText={setValueAssignedProfessional}
          />
      </div>
    </div>
    </section >
  )
}

export default DatosDeAdministracion