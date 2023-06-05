import React from 'react'
import BoxDateIntro from './BoxDateIntro.jsx';
// ****  React icons    *************************************   //
import { IconContext } from "react-icons"
import { FaFileAlt, FaStethoscope } from 'react-icons/fa';
// *********************************************************   //
import '../../sass/FormsBlocks/DatosIntroForm.scss'


function DatosIntroForm({ survey, disease, year, week, numberSurvey, parId, code }) {
  const dateIntro = {
    titleOfBlock: "Datos de la Encuesta",
    labelOfBlock: survey,
    enfermedad: disease
  }

  return (
    <section className="container d-flex justify-content-start align-items-center my-1 py-1 gx-2 border border-2 
    border-dark-subtle border-opacity-75 rounded" >
      <div className="row">
        <div className="col-12 col-md-9 p-1 text-center ">
          <BoxDateIntro
            titleOfBlock={dateIntro.titleOfBlock}
            labelOfBlock={dateIntro.labelOfBlock + " de " + dateIntro.enfermedad}
            year={year}
            week={week}
            numberSurvey={numberSurvey}
            parId={parId}
            code={code}
          />
        </div>
        <div className="col-12 col-md-3 p-1 text-center bd-highlight">
          <div className="row d-flex flex-column flex-md-row justify-content-evenly align-items-center gx-2">
            <span className="col-6 p-1 rounded-circle spanIcon">
              <IconContext.Provider value={{ color: "0077b6", className: "iconsClass" }}>
                <FaFileAlt />
              </IconContext.Provider>
            </span>
            <span className="col-6 p-1 rounded-circle spanIcon">
              <IconContext.Provider value={{ color: "0077b6", className: "iconsClass" }}>
                <FaStethoscope />
              </IconContext.Provider>
            </span>
          </div>
        </div>
      </div>
    </section >
  )
}

export default DatosIntroForm

/*
FaUserDoctor  //  Icono de doctor
FaFileAlt  //  icono de documento
*/