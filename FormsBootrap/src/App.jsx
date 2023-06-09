import React, { useState } from 'react'
import HeaderComponent from './components/HeaderComponent.jsx'

/*  ****  Forms and Blocks components            **** */
import FormSurvey from './components/Forms/FormSurvey.jsx'

/*  ****************************************************/
import { BsXSquareFill } from 'react-icons/bs'
import {todayDate} from './utils/functions.js'
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
      name: "BEATRIZ OGALLA, SUAREZ",  //  Mirar en separar name and surname
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
        resultadoAnalisis: "Negativo",
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
  const datosEpidemiologicos = {
    caso: ["Caso Aislado", "Brote Leve", "Brote Masivo", "Epidemia", "Pandemia"],
    tipoCaso: ["Extracomunitario", "Importado"],
    comunidadAutonoma: ["Andalucía", "Aragón", "Islas Baleares", "Canarias", "Cantabria", "Castilla-La Mancha", "Castilla y León",
      "cataluña", "Comunidad de Madrid", "Comunidad Foral de Navarra", "Comunidad Valenciana", "Extremadura", "Galicia", "País Vasco",
      "Principado de Asturias", "Región de Murcia", "La Rioja"],
    pais: ["Portugal", "Andorra La Bella", "Francia", "Italia", "Irlanda", "Reino Unido", "Belgica", "Holanda", "Alemania",
      "Polonia", "Checoslovaquia", "Austria", "Suiza", "Noruega", "Suecia", "Finlandia", "Grecia", "Croacia", "Ucrania", "Rumania",
      "Bulgaria", "Estonia", "Turquia"],
    clasificacionCaso: ["Error Diag", "Pendiente", "En Estudio", "Caso 4"]
  }
  const datosVacunacion = {
    casoVacunacion: ["Sarampión", "Paperas", "Rubeola", "Rotavirus", "Viruela", "Varicela", "Fiebre amarilla", "Hepatitis A", "hepatitis B", "Gripe",
      "Polio", "Rabia", "Enfermedad Hib", "HPV", "Tos ferina", "Tétanos"],
    vacunado: ["SI", "NO"],
    fechaVacunacion: "01/01/2007",
    numDosis: 1,
    presentaDocumento: ["SI", "NO"],
    tablaVacunas: {
      arrayCabeceraTabla: [["Fecha Administrada", "date"], ["Nombre de la vacuna", "text"], ["N° dosis", "number"], 
      ["Lote", "text"], ["Fecha de Caducidad", "date"], ["Laboratorio", "text"], ["Centro", "text"]],
      listaElements: [
        { fecha: "01/10/2010", nombre: "Sarampión", numDosis: 1, lote: "AF35V", fechaCaducidad: "12/12/2030", laboratorio: "laboratorio A", centro: "centro 1" },
        { fecha: "12/03/2014", nombre: "Paperas", numDosis: 3, lote: "GHT4563FG", fechaCaducidad: "12/03/2024", laboratorio: "laboratorio B", centro: "centro 2" },
        { fecha: "16/02/2015", nombre: "Rotavirus", numDosis: 1, lote: "JK8HT5", fechaCaducidad: "16/02/2019", laboratorio: "laboratorio B", centro: "centro 2" },
        { fecha: "07/09/2017", nombre: "Varicela", numDosis: 1, lote: "KSJDL887CS", fechaCaducidad: "07/09/2027", laboratorio: "laboratorio C", centro: "centro 3" },
        { fecha: "31/07/2018", nombre: "Hepatitis A", numDosis: 1, lote: "BVBV877ACSVG5", fechaCaducidad: "31/07/2028", laboratorio: "laboratorio A", centro: "centro 4" },
        { fecha: "28/02/2020", nombre: "Tétanos", numDosis: 2, lote: "89SDABAHDGH5X7S", fechaCaducidad: "28/02/2031", laboratorio: "laboratorio D", centro: "centro 4" },
      ]
    },
    vacunaContrastada: {
      vacuna: "",
      "Vacuna Contrastada": ["SI", "NO"],
      vacunado: ["SI", "NO"],
      fechaVacunacionContrastada: todayDate()
    },
    fechaInicSintomas: "",
    fechaDiagnostico: "",
    anyoEPI: 2000,
    semanaEPI: 20,
    observaciones: ""
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
          identPaciente={identPaciente}
          administration={administration}
          datosLaboratorio={datosLaboratorio}
          datosEpidemiologicos={datosEpidemiologicos}
          datosVacunacion={datosVacunacion}
        />
      </main>

      <footer className="container-fluid py-1 text-center bg-dark text-white">
        <p>Lorem, ipsum dolor.</p>
      </footer>
    </div>
  )
}

export default App;
