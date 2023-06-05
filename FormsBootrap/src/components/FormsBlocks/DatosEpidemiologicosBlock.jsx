import React, { useState, useEffect } from 'react'
import HeaderOfBlock from '../pureBoostrap/HeaderOfBlock.jsx'
import LabelElement_PB from '../pureBoostrap/LabelElement_PB.jsx'
import SelectElement_PB from '../pureBoostrap/SelectElement_PB.jsx'
import '../../sass/FormsBlocks/DatosEpidemiologicosBlock.scss'


function DatosEpidemiologicosBlock({ titleOfBlock, labelOfBlock }) {
  const [tipoCaso, setTipoCaso] = useState("")
  const [localidad, setLocalidad] = useState("")

  useEffect(() => {
    setTipoCaso("Intracomunitario")
    setLocalidad("Comunidad Valenciana")
  }, [])

  function localityCalculation() {
    tipoCaso === "Intracomunitario" ? setLocalidad("Comunidad Autonoma") :
      tipoCaso === "Extracomunitario" ? setLocalidad("País") : ""
  }

  useEffect(() => {
    localityCalculation()
  }, [tipoCaso])


  return (
    <section className="container d-flex flex-column justify-content-center align-items-center my-1 py-2 border border-2 
    border-dark-subtle border-opacity-75 rounded">
      <div className="container-fluid row align-items-center">
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
      <div className="container-fluid row align-items-center">
        <div className="col-12 col-md-3 border border-danger">
          <SelectElement_PB
            selectTextLabel={"Caso"}
            required={true}
            disabled={false}
            response={["Caso Aislado"]}
            optionsValues={["Caso Aislado", "Brote Leve", "Brote Masivo", "Epidemia", "Pandemia"]}
          />
        </div>
        <div className="col-12 col-md-3">
          <SelectElement_PB
            selectTextLabel={"Tipo de Caso"}
            required={true}
            disabled={false}
            response={["Intracomunitario"]}
            setValue={setTipoCaso}
            optionsValues={["Intracomunitario", "Extracomunitario"]}
          />
        </div>
        <div className="col-12 col-md-4">
          {tipoCaso === "Intracomunitario" ?
            <SelectElement_PB
              selectTextLabel={"Comunidad Autonoma"}
              required={true}
              disabled={false}
              response={["Comunidad Valenciana"]}
              optionsValues={["Andalucía", "Aragón", "Islas Baleares", "Canarias", "Cantabria", "Castilla-La Mancha", "Castilla y León",
                "Cataluña", "Comunidad de Madrid", "Comunidad Foral de Navarra", "Comunidad Valenciana", "Extremadura", "Galicia", "País Vasco",
                "Principado de Asturias", "Región de Murcia", "La Rioja"]}
            />
            : tipoCaso === "Extracomunitario" ?
              <SelectElement_PB
                selectTextLabel={"País"}
                required={true}
                disabled={false}
                response={["Portugal"]}
                optionsValues={["Portugal", "Andorra La Bella", "Francia", "Italia", "Irlanda", "Reino Unido", "Belgica", "Holanda", "Alemania",
                  "Polonia", "Checoslovaquia", "Austria", "Suiza", "Noruega", "Suecia", "Finlandia", "Grecia", "Croacia", "Ucrania", "Rumania",
                  "Bulgaria", "Estonia", "Turquia"]}
              />
              : <></>
          }
        </div>
      </div>
      <div className="col-12">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-outline-danger fs-6" type="delete" id="btnEdelete">Delete</button>
          <button className="btn btn-outline-secondary w-auto fs-6" type="submit" id="btnEnviar">Submit</button>
        </div>
      </div>

    </section>
  )
}

export default DatosEpidemiologicosBlock;

