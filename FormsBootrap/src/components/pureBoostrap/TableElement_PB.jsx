import React, { useState, useEffect } from 'react'
import LabelElement_PB from './LabelElement_PB'
import TextElement_PB from './TextElement_PB'
import NumberElement_PB from './NumberElement_PB'
import DateElement_PB from './DateElement_PB'
import { todayDate } from '../../utils/functions.js'
import '../../sass/components/pureBootstrap/TableElement.scss'


function TableElement_PB({ tabla, toogleResponsive, toogleAddRow }) {
  const { arrayCabeceraTabla, listaElements } = tabla
  const cabeceraTabla = arrayCabeceraTabla.map(elem => elem[0])
  const typeCabTabla = arrayCabeceraTabla.map(elem => elem[1])

  const [valueOfText, setValueOfText] = useState("")
  const [valueOfNumber, setValueOfNumber] = useState(0)
  const [valueOfDate, setValueOfDate] = useState(todayDate())

  function calculateElement(typeOfElement) {
    switch (typeOfElement) {
      case "text":
        return (
          <TextElement_PB
            labelElement={""}
            elementRequired={true}
            response={[""]}
            placeholder={""}
            size={20}
            elementID={""}
            valueOfText={valueOfText}
            setValueOfText={setValueOfText}
            disabled={false}
          />
        )
        break;
      case "date":
        return (
          <DateElement_PB
            labelElement={""}
            elementRequired={true}
            response={[todayDate()]}
            placeholder={todayDate()}
            elementID={""}
            valueOfDate={valueOfDate}
            setValueOfDate={setValueOfDate}
          />
        )
        break;
      case "number":
        return (
          <NumberElement_PB
            labelElement={""}
            elementRequired={true}
            response={[0]}
            placeholder={0}
            size={3}
            elementID={""}
            valueOfNumber={valueOfNumber}
            setValueOfNumber={setValueOfNumber}
          />
        )
        break;
      default:
        break;
    }
  }

  return (
    <div className={toogleResponsive ? "table-responsive" : " "}>
      <table className="table table-sm table-striped table-hover contTable">
        <thead className="table-success contTableHead">
          <tr>
            {cabeceraTabla.map(cab => <th key={cab} scope="col" className="contTH_Head">{cab}</th>)}
          </tr>
        </thead>

        <tbody className="contTableBody">
          {
            toogleResponsive &&
            listaElements.map((elem, jindex) => {
              const arrayElem = Object.entries(elem)
              return (
                <tr key={jindex} className="px-1 contTR_Body">
                  {
                    arrayElem.map((par, index) => <td key={index}>{par[1]}</td>)
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table >
      {
        toogleAddRow &&
        <div className="container-fluid ps-1 mb-2">
          <tr className="row my-1">
            {
              typeCabTabla.map((elem, index) => {
                return (
                  <td key={index} className="col">
                    {calculateElement(elem)}
                  </td>
                )
              })
            }
          </tr>
        </div>
        
      }
    </div>
  )
}

export default TableElement_PB;

