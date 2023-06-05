import React, { useState } from 'react'
import LabelElement_PB from '../pureBoostrap/LabelElement_PB.jsx'
import TextElement_PB from '../pureBoostrap/TextElement_PB.jsx'
import NumberElement_PB from '../pureBoostrap/NumberElement_PB.jsx'
import DateElement_PB from '../pureBoostrap/DateElement_PB.jsx'
import HeaderOfBlock from '../pureBoostrap/HeaderOfBlock.jsx'
import '../../sass/FormsBlocks/BoxDateIntro.scss'

function BoxDateIntro({ titleOfBlock, labelOfBlock, year, week, numberSurvey, parId, code }) {
  const dateBoxIntro = {
    anyo: "1972",
    week: "30",
    updateDate: "12/07/2023",
    numberSurvey: numberSurvey,
    IdDate: parId,
    code: code
  }
  const [valueOfNumberAnyo, setValueOfNumberAnyo] = useState(2023)
  const [valueOfNumberSemana, setValueOfNumberSemana] = useState(1)
  const [valueOfDateAct, setValueOfDateAct] = useState('2023-01-01')
  const [valueOfNumberSurvey, setValueOfNumberSurvey] = useState(3596)
  const [valueOfIdSurvey, setValueOfIdSurvey] = useState("07A7422")
  const [valueOfCodeSurvey, setValueOfCodeSurvey] = useState("D7A7422")


  return (
    <section className="sectionInfoSurvay container-fluid d-flex flex-column justify-content-center align-items-center w-75">
      <div className="container-fluid row">
        <div className="col-12">
          <HeaderOfBlock
            titleOfBlock={titleOfBlock}
          />
        </div>
        <div className="col-12">
          <LabelElement_PB
            textOfLabel={labelOfBlock}
          />
        </div>
      </div>
      <div className="container-fluid row gx-2">
        <div className="row d-flex mb-2">
          <div className="col-12 col-lg-3">
            <NumberElement_PB
              name={""}
              labelElement={"Año: "}
              elementRequired={true}
              response={2022}
              placeholder={2023}
              size={4}
              elementID={"anyoId"}
              valueOfNumber={valueOfNumberAnyo}
              setValueOfNumber={setValueOfNumberAnyo}
            />
          </div>
          <div className="col-12 col-lg-3">
            <NumberElement_PB
              name={""}
              labelElement={"Semana: "}
              elementRequired={true}
              response={29}
              placeholder={30}
              size={2}
              elementID={"weekId"}
              valueOfNumber={valueOfNumberSemana}
              setValueOfNumber={setValueOfNumberSemana}
            />
          </div>
          <div className="col-12 col-lg-6">
          <DateElement_PB
              name={""}
              labelElement={"Fecha actualización: "}
              elementRequired={true}
              response={"2023-04-01"}
              placeholder={"2023-01-01"}
              elementID={"fechaActId"}
              valueOfDate={valueOfDateAct}
              setValueOfDate={setValueOfDateAct}
            />
          </div>
        </div>
        <div className="row d-flex gx-2">
          <div className="col-12 col-lg-4">
            <NumberElement_PB
              name={""}
              labelElement={"N°: "}
              elementRequired={true}
              response={3595}
              placeholder={3596}
              size={10}
              elementID={"numberSurveyId"}
              valueOfNumber={valueOfNumberSurvey}
              setValueOfNumber={setValueOfNumberSurvey}
            />
          </div>
          <div className="col-12 col-lg-4">
            <TextElement_PB
              name={""}
              labelElement={"Id: "}
              elementRequired={true}
              response={""}
              placeholder={"07A7422"}
              size={20}
              elementID={"anyoId"}
              valueOfText={valueOfIdSurvey}
              setValueOfText={setValueOfIdSurvey}
            />
          </div>
          <div className="col-12 col-lg-4">
            <TextElement_PB
              name={""}
              labelElement={"Código: "}
              elementRequired={true}
              response={""}
              placeholder={"D7A7422"}
              size={20}
              elementID={"anyoId"}
              valueOfText={valueOfCodeSurvey}
              setValueOfText={setValueOfCodeSurvey}
            />
          </div>
        </div>
      </div>
    </section >
  )
}

export default BoxDateIntro;


