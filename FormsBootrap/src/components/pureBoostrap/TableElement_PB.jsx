import React from 'react'
import '../../sass/components/pureBootstrap/TableElement.scss'


function TableElement_PB({ tabla, toogleVariable }) {
  const { cabeceraTabla, listaElements } = tabla


  return (
    <div className="table-responsive">
      <table className="table table-sm table-striped table-hover contTable">
        <thead className="table-success contTableHead">
          <tr>
            {cabeceraTabla.map(cab => <th key={cab} scope="col"
              className="contTH_Head">
              {cab}</th>)}
          </tr>
        </thead>
        <tbody className="contTableBody">
          {
            toogleVariable &&
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
    </div>
  )
}

export default TableElement_PB

/*
for (const prop in elem) {
                  <td key={elem[prop]}>{elem[prop]}</td>
                })
*/