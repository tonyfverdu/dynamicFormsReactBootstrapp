import React, { useState } from 'react'
import HeaderComponent from './components/HeaderComponent.jsx'
/*  ****  Pure Bootstrap HTML Elmenets Componets **** */
import TextElement_PB from './components/pureBoostrap/TextElement_PB.jsx'
import SelectElement_PB from './components/pureBoostrap/SelectElement_PB.jsx'
import FormExample_PB from './components/pureBoostrap/FormExample_PB.jsx'
/*  ****************************************************/
import { BsXSquareFill } from 'react-icons/bs'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './sass/App.scss'


function App() {
  //  Constantes - variables
  const title = 'MERN App: React, Bootstrap, NodeJS, Express and MongoDB';
  const titleMemoListHeader = 'Dynamic Forms with Bootstrap from JSON';
  const subtitleMemoListHeader = 'MERN App (Bootstrap-React-NodeJS-Express-MongoDB)';

  //Usestates variables: toggleHeader, 
  const [toggleHeader, setToggleHeader] = useState(true);

  //  Function for to exit of the header
  function handleonClickExit(ev) {
    setToggleHeader(!toggleHeader)
  }


  return (
    <div className="container-fluid contApp">
      {/* <div className="contIconExit" onClick={(ev) => handleonClickExit(ev)}>
        <BsXSquareFill />
      </div>
      <HeaderComponent
        title={titleMemoListHeader}
        subtitle={subtitleMemoListHeader}
      />

      <div className="container-fluid contCentral">
        {toggleHeader &&
          <div className="container row contLogosHeader">
            <div className="col-sm-4 contLogos">
              <figure className="MERNFigure">
                <img className="imgLogo" src={`./src/assets/images/logos/React_logo.png`} alt='Logo React' />
              </figure>
              <figure className="MERNFigure">
                <img className="imgLogo" src={`./src/assets/images/logos/Bootstrap-5-1.svg`} alt='Logo Bootstrap 5' />
              </figure>
              <figure className="MERNFigure">
                <img className="imgLogo" src={`./src/assets/images/logos/NodeJS.png`} alt='Logo NodeJS' />
              </figure>
              <figure className="MERNFigure">
                <img className="imgLogo" src={`./src/assets/images/logos/nodeJSExpress.png`} alt='Logo Express' />
              </figure>
              <figure className="MERNFigure">
                <img className="imgLogo" src={`./src/assets/images/logos/mongoDB.webp`} alt='Logo MongoDB' />
              </figure>
            </div>
            <div className="col-sm-8 headerPrincipal">
              <h2>{title}</h2>
            </div>
          </div>
        }
      </div> */}
      {/* <form>
          {/* Input email * /}
          <div className="row mb-1">
            <label htmlFor="exampleInputEmail1" className="form-label mx-2">Email address</label>
            <input type="email" className="form-control-md" id="exampleInputEmail1" name="exampleInputEmail1"
              placeholder="Example:  name@example.com" aria-describedby="emailHelp" size="25" autoFocus required />
            <span id="emailHelp" className="form-text fs-6">We'll never share your email with anyone else.</span>
          </div>
          {/* Input password * /}
          <div className="row mb-1">
            <label htmlFor="exampleInputPassword1" className="form-label mx-2">Password</label>
            <input type="password" className="form-control-md" id="exampleInputPassword1" name="exampleInputPassword1" size="25" aria-describedby="passwordHelp" required />
            <span id="passwordHelpBlock" className="form-text fs-6">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</span>
          </div>
          {/* Input checkbox * /}
          <div className="row mb-1 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label mx-2" htmlForm="exampleCheck1">Check me out</label>
          </div>

          {/* Input text disabled * /}
          <div className="row mb-1">
            <input className="form-control-sm" id="disabledInput" type="text" placeholder="Disabled input here..." disabled></input>
          </div>
          {/* Select Component * /}
          <SelectElement_B
            textLabel={"Example of Select with datalist"}
            disabled={false}
            optionsValues={["Madrid", "Valencia", "Sevilla", "Bilbao", "Barcelona", "Murcia", "Cuenca", "Hamburg"]}
          />

          {/* Button submit * /}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form> */}

      <FormExample_PB

      />
      
      <footer className="container-fluid py-1 text-center bg-dark text-white">
        <p>Lorem, ipsum dolor.</p>
      </footer>
    </div>
  )
}

export default App
