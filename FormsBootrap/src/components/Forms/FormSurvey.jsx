import React, { useState } from 'react'
import HeaderOfBlock from '../pureBoostrap/HeaderOfBlock.jsx'
import DatosIntroForm from '../FormsBlocks/DatosIntroForm.jsx'
import LabelElement_PB from '../pureBoostrap/LabelElement_PB.jsx'
import Por_Cumplimentacion from '../pureBoostrap/Por_Cumplimentacion.jsx'

import DatosOfDeclarante from '../FormsBlocks/DatosOfDeclarante.jsx'
import AsignacionDelCaso from '../FormsBlocks/AsignacionDelCaso.jsx'
import DatosDeIdentificacion from '../FormsBlocks/DatosDeIdentificacion.jsx'
import DatosDeAdministracion from '../FormsBlocks/DatosDeAdministracion.jsx'
import DatosDeLaboratorio from '../FormsBlocks/DatosDeLaboratorio.jsx'
import DatosEpidemiologicos from '../FormsBlocks/DatosEpidemiologicos.jsx'
import DatosDeVacunacion from '../FormsBlocks/DatosDeVacunacion.jsx'


function FormSurvey({ survey, disease, declarante, identPaciente, administration, datosLaboratorio, datosEpidemiologicos, datosVacunacion }) {
  const [valueCumplimentacion, setValueCumplimentacion] = useState(0)

  const { dateOfDeclaration, declarant, jobCenter, telephone, municipality, departament, closedSurvey, originOfDeclaration,
    pointOfDeclaration } = declarante
  const { namePatient, surname1Patient, surname2Patient, sex, dateofBirth, age, typeAge, address, SIP, h_Clínica } = identPaciente;
  const arrayIdentPaciente = Object.entries(identPaciente)
  const { assignedJobCenter, assignedProfessional } = administration
  const { labelInvestigacion, tablaAnalisisToxinas, aislamientoToxina } = datosLaboratorio
  const { caso, tipoCaso, comunidadAutonoma, pais, clasificacionCaso } = datosEpidemiologicos
  const { casoVacunacion, vacunado, fechaVacunacion, numDosis, presentaDocumento, tablaVacunas, vacunaContrastada, fechaInicSintomas,
    fechaDiagnostico, anyoEPI, semanaEPI, observaciones } = datosVacunacion;


  return (
    <form className="container border border-secondary rounded p-3 my-2">
      <div className="form-group">

        {/* <!--    BLOQUE: DATOS INICIO DEL FORMULARIO   ---------------- > */}
        <div className="accordion accordion-flush" id="datosInicioID" >
          <div className="row accordion-item">
            <div className="accordion-header col-12 container mb-2" id="headingDatosInicio">
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
        <div className="accordion accordion-flush" id="datosDeclaranteID" >
          <div className="accordion-item row">
            <div className="accordion-header col-12 container mb-2" id="headingDatosDeclarante">
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
        <div className="accordion accordion-flush" id="asignacionCasoID" >
          <div className="row accordion-item">
            <div className="accordion-header col-12 container mb-2" id="headingAsignacionCaso">
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
        <div className="accordion accordion-flush" id="datosIdentificacionID" >
          <div className="accordion-item row">
            <div className="accordion-header col-12 container mb-2" id="headingDatosIdentificacion">
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
                  <DatosDeIdentificacion
                    arrayIdentPaciente={arrayIdentPaciente}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>


        {/* <!--    BLOQUE: DATOS DE ADMINISTRACIÓN DEL FORMULARIO   ---------------- > */}
        <div className="accordion accordion-flush my-1" id="datosAdministracionID" >
          <div className="accordion-item row">
            <div className="accordion-header col-12 container mb-2" id="headingDatosAdministracion">
              <button className="accordion-button btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDatosAdministracion"
                aria-expanded="false" aria-controls="collapseDatosAdministracion">
                <HeaderOfBlock
                  titleOfBlock={`DATOS DE ADMINISTRACIÓN`}
                />
              </button>
            </div>
            <div id="collapseDatosAdministracion" className="accordion-collapse collapse" aria-labelledby="headingDatosAdministracion" >
              <section className="row accordion-item">
                <div className="col-12 mb-1">
                  <DatosDeAdministracion
                    assignedJobCenter={assignedJobCenter}
                    assignedProfessional={assignedProfessional}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* <!--    BLOQUE: DATOS DE LABORATORIO DEL FORMULARIO   ---------------- > */}
        <div className="accordion accordion-flush my-1" id="datosAdministracionID" >
          <div className="accordion-item row">
            <div className="accordion-header col-12 container mb-2" id="headingDatosLaboratorio">
              <button className="accordion-button btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDatosLaboratorio"
                aria-expanded="false" aria-controls="collapseDatosLaboratorio">
                <HeaderOfBlock
                  titleOfBlock={`DATOS DE LABORATORIO`}
                />
              </button>
            </div>
            <div id="collapseDatosLaboratorio" className="accordion-collapse collapse" aria-labelledby="headingDatosLaboratorio" >
              <section className="row accordion-item">
                <div className="col-12 mb-1">
                  <DatosDeLaboratorio
                    labelInvestigacion={labelInvestigacion}
                    tablaAnalisisToxinas={tablaAnalisisToxinas}
                    aislamientoToxina={aislamientoToxina}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* <!--    BLOQUE: DATOS EPIDEMIOLÓGICOS DEL FORMULARIO   ---------------- > */}
        <div className="accordion accordion-flush my-1" id="datosEpidemiologicosID" >
          <div className="accordion-item row">
            <div className="accordion-header col-12 container mb-2" id="headingDatosEpidemiologicos">
              <button className="accordion-button btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDatosEpidemiologicos"
                aria-expanded="false" aria-controls="collapseDatosEpidemiologicos">
                <HeaderOfBlock
                  titleOfBlock={`DATOS EPIDEMIOLÓGICOS`}
                />
              </button>

            </div>
            <div id="collapseDatosEpidemiologicos" className="accordion-collapse collapse" aria-labelledby="headingDatosEpidemiologicos" >
              <section className="row accordion-item">
                <div className="col-12 mb-1">
                  <DatosEpidemiologicos
                    caso={caso}
                    tipoCaso={tipoCaso}
                    comunidadAutonoma={comunidadAutonoma}
                    pais={pais}
                    clasificacionCaso={clasificacionCaso}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* <!--    BLOQUE: DATOS DE VACUNACIÓN DEL FORMULARIO   ---------------- > */}
        <div className="accordion accordion-flush" id="datosDeVacunacionID" >
          <div className="accordion-item row">
            <div className="accordion-header col-12 container mb-2" id="headingDatosVacunacion">
              <button className="accordion-button btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDatosVacunacion"
                aria-expanded="false" aria-controls="collapseDatosVacunacion">
                <HeaderOfBlock
                  titleOfBlock={`DATOS DE VACUNACIÓN`}
                />
              </button>
            </div>
            <div id="collapseDatosVacunacion" className="accordion-collapse collapse" aria-labelledby="headingDatosVacunacion" >
              <section className="row accordion-item">
                <div className="col-12 mb-1">
                  <DatosDeVacunacion
                    casoVacunacion={casoVacunacion}
                    vacunado={vacunado}
                    fechaVacunacion={fechaVacunacion}
                    numDosis={numDosis}
                    presentaDocumento={presentaDocumento}
                    tablaVacunas={tablaVacunas}
                    vacunaContrastada={vacunaContrastada}
                    fechaInicSintomas={fechaInicSintomas}
                    fechaDiagnostico={fechaDiagnostico}
                    anyoEPI={anyoEPI}
                    semanaEPI={semanaEPI}
                    observaciones={observaciones}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>

      </div>
    </form>
  )
}

export default FormSurvey