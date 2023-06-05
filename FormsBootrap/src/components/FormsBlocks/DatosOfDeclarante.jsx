import { useState, useEffect } from 'react'
import DateElement_PB from '../pureBoostrap/DateElement_PB'
import TelefElement_PB from '../pureBoostrap/TelefElement_PB'
import TextElement_PB from '../pureBoostrap/TextElement_PB'
import NumberElement_PB from '../pureBoostrap/NumberElement_PB'
import SelectElement_PB from '../pureBoostrap/SelectElement_PB'


function DatosOfDeclarante({ dateOfDeclaration, declarant, jobCenter, telephone, municipality, departament, closedSurvey, originOfDeclaration,
  pointOfDeclaration }) {
  const [valueOfDateDecl, setValueOfDateDecl] = useState(dateOfDeclaration)
  const [valueOfDeclarant, setValueOfDeclarant] = useState(declarant)
  const [valueOfTelephone, setValueOfTelephone] = useState(telephone)

  const [valueOfJobCenter, setValueOfJobCenter] = useState(jobCenter)
  const [valueMunicipality, setValueMunicipality] = useState(municipality)
  const [valueDepartament, setValueDepartament] = useState(departament)

  const [valueClosedSurvey, setValueClosedSurvey] = useState(closedSurvey)
  const [valueOriginOfDeclaration, setValueOriginOfDeclaration] = useState(originOfDeclaration)
  const [valuePointOfDeclaration, setValuePointOfDeclaration] = useState(parseInt(pointOfDeclaration, 10))

  useEffect(() => {
    // console.log({
    //   dateOfDeclaration, declarant, jobCenter, telephone, municipality, departament, closedSurvey, originOfDeclaration,
    //   pointOfDeclaration
    // })
  }, [])

  return (
    <section className="container-fluid d-flex flex-wrap justify-content-start align-items-center my-1 py-1 gx-1 border border-2 
    border-dark-subtle border-opacity-75 rounded" >
      <div className="container-fluid row gx-1">
        <div className="col-12 col-lg-4">
          <DateElement_PB
            name={""}
            labelElement={"Fecha de declaracion: "}
            elementRequired={true}
            response={"2023-04-01"}
            placeholder={"2023-01-01"}
            elementID={"fechaDeclaracionId"}
            valueOfDate={valueOfDateDecl}
            setValueOfDate={setValueOfDateDecl}
          />
        </div>
        <div className="col-12 col-lg-4">
          <TextElement_PB
            name={""}
            labelElement={"Declarante: "}
            elementRequired={true}
            response={""}
            placeholder={declarant}
            size={40}
            elementID={"declaranteId"}
            valueOfText={valueOfDeclarant}
            setValueOfText={setValueOfDeclarant}
          />
        </div>
        <div className="col-12 col-lg-4">
          <TelefElement_PB
            name={""}
            labelElement={"Telefono: "}
            elementRequired={true}
            response={""}
            placeholder={"96-123-4567"}
            size={12}
            elementID={"telefDeclaranteId"}
            valueOfTelephone={valueOfTelephone}
            setValueOfTelephone={setValueOfTelephone}
          />
        </div>
      </div>

      <div className="container-fluid row gx-1">
        <div className="col-12 col-md-12 col-lg-6">
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
        <div className="col-12 col-md-6 col-lg-3">
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
        <div className="col-12 col-md-6 col-lg-3">
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
      </div>

      <div className="container-fluid row gx-1">
        <div className="col-12 col-md-12 col-lg-4">
          <SelectElement_PB
            selectTextLabel={"Encuesta cerrada: "}
            required={true}
            disabled={false}
            response={["NO"]}
            optionsValues={["SI", "NO"]}
            setValue={setValueClosedSurvey}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <SelectElement_PB
            selectTextLabel={"Procedencia de la declaración: "}
            required={true}
            disabled={false}
            response={["SIA"]}
            optionsValues={["CIA", "SIA", "MVD", "SGDM", "Otro"]}
            setValue={setValueOriginOfDeclaration}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <NumberElement_PB
            name={""}
            labelElement={"Punto de la declaracion: "}
            elementRequired={true}
            response={["070601"]}
            placeholder={"070601"}
            size={6}
            elementID={"ptoDeclId"}
            valueOfNumber={valuePointOfDeclaration}
            setValueOfNumber={setValuePointOfDeclaration}
          />
        </div>
      </div>
    </section>
  )
}

export default DatosOfDeclarante