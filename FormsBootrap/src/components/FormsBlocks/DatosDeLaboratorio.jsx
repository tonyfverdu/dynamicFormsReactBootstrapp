import React, { useState, useEffect } from 'react'
import LabelElement_PB from '../pureBoostrap/LabelElement_PB'
import TextElement_PB from '../pureBoostrap/TextElement_PB'
import SelectElement_PB from '../pureBoostrap/SelectElement_PB'
import DateElement_PB from '../pureBoostrap/DateElement_PB'

/*
const datosLaboratorio = {
    labelInvestigacion: "Investigación de toxina botulínica",
    tablaAnalisisToxinas: [
      {
        analisis: "Suero",
        resultadoAnalisis: "Negativo",
        tipoToxinaIdent: "",
        fechaAnalisis: "11/05/2004"
      },
      {
        analisis: "Heces",
        resultadoAnalisis: "Negativo"
        tipoToxinaIdent: "disabled",
        fechaAnalisis: "0/0/0000"
      },
      {
        analisis: "Alimento",
        resultadoAnalisis: "Negativo",
        tipoToxinaIdent: "",
        fechaAnalisis: "16/05/2004"
      }
    ],
    aislamientoToxina: {
      herida: "",
      heces: ""
    }
  }
*/


function DatosDeLaboratorio({ labelInvestigacion, tablaAnalisisToxinas, aislamientoToxina }) {
  const titleTabla = ["Analisis", "Resultado", "Tipo de toxina identificada", "Fecha"]
  const resultAnalisis = ["Negativo", "Positivo"]
  const optionsAislBotulinum = ["Caso 1", "Caso 2", "Caso 3"]

  const [valueOfSuero, setValueOfSuero] = useState(tablaAnalisisToxinas)
  const [valueOfHeces, setValueOfHeces] = useState(tablaAnalisisToxinas[1])
  const [valueOfAlimento, setValueOfAlimento] = useState(tablaAnalisisToxinas[2])


  const [valueOfAnalisis, setValueOfAnalisis] = useState(resultAnalisis[0])
  const [valueOfTipoToxina, setValueOfTipoToxina] = useState("")
  const [valueDateOfAnalisis, setValueDateOfAnalisis] = useState("11-05-2022")

  const [valueOfBotHerida, setValueOfBotHerida] = useState(optionsAislBotulinum[0])
  const [valueOfBotHeces, setValueOfBotHeces] = useState(optionsAislBotulinum[1])

  useEffect(() => {
    // titleTabla.map(title => console.log("title:  ", title))
    // console.log("tablaAnalisisToxinas:  ", tablaAnalisisToxinas)
    // console.log(tablaAnalisisToxinas.map(toxina => console.log("analisis:  ", toxina.analisis)))
    // // console.log({ tablaAnalisisToxinas, aislamientoToxina })
    // // console.log("valueOfSuero:  ", valueOfSuero)
    // // console.log("valueOfHeces:  ", valueOfHeces)
    // // console.log("valueOfAlimento:  ", valueOfAlimento)
  }, [])


  return (
    <section className="container-fluid d-flex flex-wrap justify-content-start align-items-center my-1 py-1 gx-1 border border-2 
    border-dark-subtle border-opacity-75 rounded" >
      <div className="container-fluid row ">
        <div className="col-11 offset-1">
          <LabelElement_PB
            textOfLabel={labelInvestigacion}
          />
        </div>
      </div>

      <div className="container row">
        <div className="col-11 offset-1">
          <table className="table table-sm table-borderless table-striped table-hover table-responsive">
            <thead className="table-success">
              <tr className="fw-light text-center">
                {
                  titleTabla.map(title => {
                    return <th key={title} scope="col">{title}</th>
                  })
                }
              </tr>
            </thead>
            <tbody className="table-light">
              {
                tablaAnalisisToxinas.map(toxina => {
                  return (
                    <tr key={toxina.analisis}>
                      <th scope="row" className="text-center">{toxina.analisis}</th>
                      <td>
                        <SelectElement_PB
                          selectTextLabel={""}
                          required={true}
                          disabled={false}
                          response={[toxina.resultadoAnalisis]}
                          optionsValues={resultAnalisis}
                          setValue={setValueOfAnalisis}
                        />
                      </td>
                      <td className="text-center">
                        <TextElement_PB
                          name={`name_${toxina.tipoToxinaIdent}`}
                          labelElement={""}
                          elementRequired={false}
                          disabled={true}
                          response={["onabotulinumtoxina A"]}
                          placeholder={""}
                          size={36}
                          elementID={`id_${toxina.tipoToxinaIdent}`}
                          valueOfText={valueOfTipoToxina}
                          setValueOfText={setValueOfTipoToxina}
                        />
                      </td>
                      <td className="text-center">
                        <DateElement_PB
                          name={`name_${toxina.fechaAnalisis}`}
                          labelElement={""}
                          elementRequired={false}
                          response={"2023-04-01"}
                          placeholder={"2023-01-01"}
                          elementID={`id_${toxina.fechaAnalisis}`}
                          valueOfDate={valueDateOfAnalisis}
                          setValueOfDate={setValueDateOfAnalisis}
                        />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>

      <div className="container row">
        <div className="col-4 offset-1">
          <LabelElement_PB
            textOfLabel={"Aislamiento de C. botulinum"}
          />
        </div>
        <div className="col-6 d-flex flex-row col-md-5">
          <SelectElement_PB
            selectTextLabel={"Herida"}
            required={false}
            disabled={false}
            response={[optionsAislBotulinum[2]]}
            optionsValues={optionsAislBotulinum}
            setValue={setValueOfBotHerida}
          />
          <SelectElement_PB
            selectTextLabel={"Heces"}
            required={false}
            disabled={false}
            response={[optionsAislBotulinum[1]]}
            optionsValues={optionsAislBotulinum}
            setValue={setValueOfBotHeces}
          />
        </div>
      </div>
    </section >
  )
}

export default DatosDeLaboratorio;