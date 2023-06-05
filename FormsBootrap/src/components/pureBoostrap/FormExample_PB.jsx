import React from 'react'
import LabelElement_PB from './LabelElement_PB.jsx'
import HeaderOfBlock from './HeaderOfBlock.jsx'
import ListaTextDateElement_PB from './ListaTextDateElement_B.jsx'
import ListaHeridas_Heces_PB from './ListaHeridas_Heces_PB.jsx'
import '../../sass/components/pureBootstrap/FormExample_PB.scss'


function FormExample_PB({ titleOfBlock, labelOfBlock }) {
  return (
    <section className="container-fluid d-flex flex-column justify-content-center align-items-center my-3 py-2 border border-2 
    border-dark-subtle border-opacity-75 rounded">
      <div className="container-fluid row">
        <div className="col-12 mb-1">
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
      <div className="container-fluid row">
        <div className="col-12 mb-1">
          <ListaTextDateElement_PB
            selectTextLabel={"Suero"}
            selectDisabled={false}
            optionsValues={["Negativo", "Positivo"]}
          />
        </div>
      </div>
      <div className="container-fluid row">
        <div className="col-12 justify-content-end mb-1">
          <ListaTextDateElement_PB
            selectTextLabel={"Heces"}
            selectDisabled={false}
            optionsValues={["Negativo", "Positivo"]}
          />
        </div>
      </div>
      <div className="container-fluid row">
        <div className="col-12 justify-content-end mb-1">
          <ListaTextDateElement_PB
            selectTextLabel={"Alimentación"}
            selectDisabled={false}
            optionsValues={["Negativo", "Positivo"]}
          />
        </div>
      </div>

      <div className="container-fluid my-2 row">
        <div className="col-12">
          <ListaHeridas_Heces_PB

          />
        </div>
      </div>

      {/* <div className="col-12 mb-2">
       
      </div>
      <div className="col-12">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-outline-danger fs-6" type="delete" id="btnEdelete">Delete</button>
          <button className="btn btn-outline-secondary w-auto fs-6" type="submit" id="btnEnviar">Submit</button>
        </div>

      </div> */}

      {/* <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true" >
        <div className="d-flex">
          <div className="toast-body">El mensaje a sido entregado correctamente...</div>
          <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" ></button>
        </div>
      </div> */}

    </section >
  )
}

export default FormExample_PB

/*
        <div className="col-12 mb-1 border border-warning ">

          <div className="form-floating col-12 col-md-5 py-1 w-50">
            <input type="email" className="form-control shadow-sm" id="inputEmail" aria-describedby="emailHelp" name="campoEmail" autoFocus />
            <label htmlFor="inputEmail" className="floatingInput te" >Email Address</label>
            <div className="form-text" id="emailHelp">No compartiremos su correo electrónico.</div>
          </div>
          <div className="form-floating col-12 col-md-5 py-1 w-50">
            <input type="password" id="inputPassword" className="form-control shadow-sm" name="campoPassword" />
            <label htmlFor="inputPassword" className="floatingInput" >Password</label>
          </div>
          <div className="col-12 col-md-2 d-flex flex-row justify-content-center align-items-center border-success w-50">
            <input type="checkbox" id="inputCheck" className="form-check-input shadow-sm" name="campoAceptar" />
            <label htmlFor="inputCheck" className="fs-6">Aceptar las condiciones</label>
          </div>
        </div>
*/