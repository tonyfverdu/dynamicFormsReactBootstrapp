import React from 'react'

function Por_Cumplimentacion({textAnfag, textEnde, valueCumplimentacion}) {
  return (
    <div className="container-fluid col-12 d-flex justify-content-center align-items-center gx-5 mb-2">
      <span className="fs-6 fw-bold me-3">{textAnfag}</span>
      <span className="h-5 fw-bolder me-3 text-primary"><b>{valueCumplimentacion}</b></span>
      <span className="fs-6 fw-bold">{textEnde}</span>
    </div>
  )
}

export default Por_Cumplimentacion;