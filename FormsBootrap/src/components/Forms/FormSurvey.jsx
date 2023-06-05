import React, { useState, useEffect } from 'react'
import HeaderOfBlock from '../pureBoostrap/HeaderOfBlock.jsx'
import DatosIntroForm from '../FormsBlocks/DatosIntroForm.jsx'
import LabelElement_PB from '../pureBoostrap/LabelElement_PB.jsx'
import Por_Cumplimentacion from '../pureBoostrap/Por_Cumplimentacion.jsx'

import DatosOfDeclarante from '../FormsBlocks/DatosOfDeclarante.jsx'
import AsignacionDelCaso from '../FormsBlocks/AsignacionDelCaso.jsx'

import DatosDeAdministracion from '../FormsBlocks/DatosDeAdministracion.jsx'


function FormSurvey({ survey, disease, declarante, administration }) {
  const [valueCumplimentacion, setValueCumplimentacion] = useState(0)

  const { dateOfDeclaration, declarant, jobCenter, telephone, municipality, departament, closedSurvey, originOfDeclaration,
    pointOfDeclaration } = declarante
  const { assignedJobCenter, assignedProfessional } = administration

  useEffect(() => {
    // console.log({ survey, disease, jobCenter, })
  }, [])


  return (
    <form className="container border border-secondary rounded p-3 mt-3">

      {/* <!--    BLOQUE: DATOS INICIO DEL FORMULARIO   ---------------- > */}
      <div className="accordion accordion-flush mb-2" id="datosInicioID" >
        <div className="row accordion-item ">
          <div className="accordion-header col-12 container" id="headingDatosInicio">
            <button className="accordion-button btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDatosInicio"
              aria-expanded="true" aria-controls="collapseDatosInicio">
              <HeaderOfBlock
                titleOfBlock={`Encuesta ${survey} de ${disease}`}
              />
            </button>
          </div>
          <div id="collapseDatosInicio" className="accordion-collapse collapse show" aria-labelledby="headingDatosInicio" >
            <section className="row accordion-item" >
              <div className="col-12 mb-1">
                <DatosIntroForm
                  survey={survey}
                  disease={disease}
                  year={2017}
                  week={30}
                  numberSurvey={3596}
                  parId={"07A742"}
                  code={"D7A7422"}
                />
              </div>
              <div className="col-12 ms-5 mb-3">
                <LabelElement_PB
                  textOfLabel={"(*) Campos obligatorios"}
                />
              </div>
              <div className="col-12">
                <Por_Cumplimentacion
                  textAnfag={"Porcentaje de cumplimentación: "}
                  textEnde="%"
                  valueCumplimentacion={valueCumplimentacion}
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* <!--    BLOQUE: DATOS DEL DECLARANTE DEL FORMULARIO   ---------------- > */}
      <div className="accordion accordion-flush mb-2" id="datosDeclaranteID" >
        <div className="accordion-item row">
          <div className="accordion-header col-12 container" id="headingDatosDeclarante">
            <button className="accordion-button btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDatosDeclarante"
              aria-expanded="false" aria-controls="collapseDatosDeclarante">
              <HeaderOfBlock
                titleOfBlock={`DATOS DEL DECLARANTE`}
              />
            </button>
          </div>
          <div id="collapseDatosDeclarante" className="accordion-collapse collapse" aria-labelledby="headingDatosDeclarante" >
            <section className="row accordion-item">
              <div className="col-12 mb-1">
                <DatosOfDeclarante
                  dateOfDeclaration={dateOfDeclaration}
                  declarant={declarant}
                  jobCenter={jobCenter}
                  telephone={telephone}
                  municipality={municipality}
                  departament={departament}
                  closedSurvey={closedSurvey}
                  originOfDeclaration={originOfDeclaration}
                  pointOfDeclaration={pointOfDeclaration}
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* <!--    BLOQUE: ASIGNACION DEL CASO DEL FORMULARIO   ---------------- > */}
      <div className="accordion accordion-flush mb-2" id="asignacionCasoID" >
        <div className="row accordion-item">
          <div className="accordion-header col-12 container" id="headingAsignacionCaso">
            <button className="accordion-button btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAsignacionCaso"
              aria-expanded="false" aria-controls="collapseAsignacionCaso">
              <HeaderOfBlock
                titleOfBlock={`ASIGNACIÓN DEL CASO, referido territorio de riesgo`}
              />
            </button>
          </div>
          <div id="collapseAsignacionCaso" className="accordion-collapse collapse" aria-labelledby="headingAsignacionCaso" >
            <section className="row accordion-item">
              <div className="col-12 mb-1">
                <AsignacionDelCaso
                  municipality={municipality}
                  departament={departament}
                  jobCenter={jobCenter}
                />
              </div>
            </section>
          </div>
        </div>
      </div>


      {/* <!--    BLOQUE: DATOS DE IDENTIFICACIÓN DEL FORMULARIO   ---------------- > */}
      <div className="accordion accordion-flush mb-2" id="datosIdentificacionID" >
        <div className="accordion-item row">
          <div className="accordion-header col-12 container" id="headingDatosIdentificacion">
            <button className="accordion-button btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDatosIdentificacion"
              aria-expanded="false" aria-controls="collapseDatosIdentificacion">
              <HeaderOfBlock
                titleOfBlock={`DATOS DE IDENTIFICACIÓN`}
              />
            </button>
          </div>
          <div id="collapseDatosIdentificacion" className="accordion-collapse collapse" aria-labelledby="headingDatosIdentificacion" >
            <section className="row accordion-item">
              <div className="col-12 mb-1">

              </div>
            </section>
          </div>
        </div>
      </div>


      {/* <!--    BLOQUE: DATOS DE ADMINISTRACIÓN DEL FORMULARIO   ---------------- > */}
      <div className="accordion accordion-flush mb-2" id="datosAdministracionID" >
        <div className="accordion-item row">
          <div className="accordion-header col-12 container" id="headingDatosAdministracion">
            <button className="accordion-button btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDatosAdministracion"
              aria-expanded="false" aria-controls="collapseDatosAdministracion">
              <HeaderOfBlock
                titleOfBlock={`DATOS DE ADMINISTRACIÓN`}
              />
            </button>
          </div>
          <div id="collapseDatosAdministracion" className="accordion-collapse collapse" aria-labelledby="headingDatosAdministracion" >
            <section className="row accordion-item">
              {/* <DatosDeAdministracion
                assignedJobCenter={assignedJobCenter}
                assignedProfessional={assignedProfessional}
              /> */}
            </section>
          </div>
        </div>
      </div>
      <section className="row">

      </section>

      {/* <!--    BLOQUE: DATOS EPIDEMIOLÓGICOS DEL FORMULARIO   ---------------- > */}
      <div className="accordion accordion-flush mb-2" id="datosEpidemiologicosID" >
        <div className="accordion-item row">
          <div className="accordion-header col-12 container" id="headingDatosEpidemiologicos">
            <button className="accordion-button btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDatosEpidemiologicos"
              aria-expanded="false" aria-controls="collapseDatosEpidemiologicos">
              <HeaderOfBlock
                titleOfBlock={`DATOS EPIDEMIOLÓGICOS`}
              />
            </button>

          </div>
          <div id="collapseDatosEpidemiologicos" className="accordion-collapse collapse" aria-labelledby="headingDatosEpidemiologicos" >

          </div>
        </div>
      </div>
      <section className="row">

      </section>

      {/* <!--    BLOQUE: DATOS DE VACUNACIÓN DEL FORMULARIO   ---------------- > */}
      <div className="accordion accordion-flush mb-2" id="datosDeVacunacionID" >
        <div className="accordion-item row">
          <div className="accordion-header col-12 container" id="headingDatosVacunacion">
            <button className="accordion-button btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDatosVacunacion"
              aria-expanded="false" aria-controls="collapseDatosVacunacion">
              <HeaderOfBlock
                titleOfBlock={`DATOS DE VACUNACIÓN`}
              />
            </button>
          </div>
          <div id="collapseDatosVacunacion" className="accordion-collapse collapse" aria-labelledby="headingDatosVacunacion" >

          </div>
        </div>
      </div>
      <section className="row">

      </section>

    </form>
  )
}

export default FormSurvey