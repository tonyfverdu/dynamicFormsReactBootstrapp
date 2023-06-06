import React, { useState } from 'react'
import HeaderComponent from './components/HeaderComponent.jsx'

/*  ****  Pure Bootstrap HTML Elements Components **** */
import TextElement_PB from './components/pureBoostrap/TextElement_PB.jsx'
import SelectElement_PB from './components/pureBoostrap/SelectElement_PB.jsx'

/*  ****  Forms and Blocks components            **** */
import FormSurvey from './components/Forms/FormSurvey.jsx'
import FormExample_PB from './components/pureBoostrap/FormExample_PB.jsx'
import DatosEpidemiologicosBlock from './components/FormsBlocks/DatosEpidemiologicosBlock.jsx'

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
  const titleOfBlocksForm = [
    {
      "block": 1,
      "titleBlock": "DATOS DEL DECLARANTE",
      "labelBlock": "Datos del Paciente y Centro de Trabajo"
    },
    {
      "block": 2,
      "titleBlock": "ASIGNACIÓN DEL CASO (REFERIDO AL TERRITORIO DE RIESGO)",
      "labelBlock": "Datos del Municipio, Departamento y Centro de Trabajo"
    },
    {
      "block": 3,
      "titleBlock": "DATOS DE IDENTIFICACIÓN",
      "labelBlock": "Datos del Paciente"
    },
    {
      "block": 4,
      "titleBlock": "DATOS DE ADMINISTRACIÓN",
      "labelBlock": "Datos del Centro de Trabajo y del Profesional Asignado"
    },
    {
      "block": 5,
      "titleBlock": "DATOS EPIDEMIOLÓGICOS",
      "labelBlock": "Datos de Epidemiológia. Vacunas"
    },
    {
      "block": 6,
      "titleBlock": "DATOS DE LABORATORIO",
      "labelBlock": "Investigación de toxina botulínica"
    }
  ]

  const declarante = {
    dateOfDeclaration: "01-01-2023",
    declarant: "ORTUNO GARCIA, LAURA MARIA",
    jobCenter: "CENTRO DE SALUD DE QUART DE POBLET",
    telephone: "962764565",
    municipality: "QUART DE POBLET",
    departament: "MANISES",
    closedSurvey: "NO",
    originOfDeclaration: "SIA",
    pointOfDeclaration: "070601"
  }
  const administration = {
    assignedJobCenter: {
      name: "CENTRO DE SALUD DE QUART DE POBLET",
      dissabled: true,
      readonly: true,
      resize: "none"
    },
    assignedProfessional: {
      name: "BEATRIZ OGALLA SUAREZ",  //  Mirar en separar name and surname
      dissabled: true,
      readonly: true,
      resize: "none"
    }
  }
  const identPaciente = {
    Nombre: "Nerea",
    "Primer apellido": "Aguilar",
    "Segundo apellido": "Berbel",
    Sexo: "Mujer",
    "Fecha de nacimiento": "31-06-200",
    Edad: 23,
    typeAge: ["días", "meses", "años"],
    SIP: 11446102,
    "Historia clínica": "",
    Direccion: {
      Calle: "CARRE ROSSINYOL 14",
      Municipio: "QUART DE POBLET",
      CP: 46930,
      Provincia: "Valencia",
      País: "España"
    },
    Telefonos: ["961547806", "637325223"],
  }
  const datosEpidemiologicos = {
    caso: ["Caso Aislado", "Brote Leve", "Brote Masivo", "Epidemia", "Pandemia"],
    tipoCaso: ["Extracomunitario", "Importado"],
    comunidadAutonoma: ["Andalucía", "Aragón", "Islas Baleares", "Canarias", "Cantabria", "Castilla-La Mancha", "Castilla y León",
      "cataluña", "Comunidad de Madrid", "Comunidad Foral de Navarra", "Comunidad Valenciana", "Extremadura", "Galicia", "País Vasco",
      "Principado de Asturias", "Región de Murcia", "La Rioja"],
    pais: ["Portugal", "Andorra La Bella", "Francia", "Italia", "Irlanda", "Reino Unido", "Belgica", "Holanda", "Alemania",
      "Polonia", "Checoslovaquia", "Austria", "Suiza", "Noruega", "Suecia", "Finlandia", "Grecia", "Croacia", "Ucrania", "Rumania",
      "Bulgaria", "Estonia", "Turquia"],
    clasificacionCaso: ["Error Diag", "Caso 2", "Caso 3", "Caso 4"]
  }

  //Usestates variables: toggleHeader, 
  const [toggleHeader, setToggleHeader] = useState(true);

  //  Function for to exit of the header
  function handleonClickExit(ev) {
    setToggleHeader(!toggleHeader)
  }


  return (
    <div className="container-fluid contApp">
      <div className="contIconExit" onClick={(ev) => handleonClickExit(ev)}>
        <BsXSquareFill />
      </div>
      <HeaderComponent
        title={titleMemoListHeader}
        subtitle={subtitleMemoListHeader}
      />
      <div className="contCentral container-fluid">
        {toggleHeader &&
          <div className="container-fluid row py-3 contLogosHeader">
            <div className="col-12 col-lg-3 d-flex justify-content-between contLogos">
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
            <div className="col-12 col-lg-8 d-flex justify-content-center py-3 headerPrincipal">
              <h2>{title}</h2>
            </div>
          </div>
        }
      </div>

      <main className="container-fluid my-2">
        <FormSurvey
          survey={"Epidemiológica"}
          disease={"Varicela"}
          declarante={declarante}
          administration={administration}
          identPaciente={identPaciente}
          datosEpidemiologicos={datosEpidemiologicos}
        />
      </main>



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

      {/* <section className="container">
        <div className="row">
          <div className="col-12">
            <FormExample_PB
              titleOfBlock={titleOfBlocksForm[5].titleBlock}
              labelOfBlock={titleOfBlocksForm[5].labelBlock}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <DatosEpidemiologicosBlock
              titleOfBlock={titleOfBlocksForm[4].titleBlock}
              labelOfBlock={titleOfBlocksForm[4].labelBlock}
            />
          </div>
        </div>
      </section> */}


      <footer className="container-fluid py-1 text-center bg-dark text-white">
        <p>Lorem, ipsum dolor.</p>
      </footer>
    </div>
  )
}

export default App
