import React, { useState } from 'react'
import TextElement_PB from '../pureBoostrap/TextElement_PB'
import NumberElement_PB from '../pureBoostrap/NumberElement_PB'
import SelectElement_PB from '../pureBoostrap/SelectElement_PB'
import DateElement_PB from '../pureBoostrap/DateElement_PB'


function DatosDeIdentificacion({ arrayIdentPaciente }) {
  const [valueOfArrayIdentPaciente, setValueOfArrayIdentPaciente] = useState(arrayIdentPaciente)

  const [valueOfNamePatient, setValueOfNamePatient] = useState(arrayIdentPaciente[0][1])
  const [valueOfSurname1Patient, setValueOfSurname1Patient] = useState(arrayIdentPaciente[1][1])
  const [valueOfSurname2Patient, setValueOfSurname2Patient] = useState(arrayIdentPaciente[2][1])
  const [valueOfSex, setValueOfSex] = useState(arrayIdentPaciente[3][1])
  const [valueOfDateofBirth, setValueOfDateofBirth] = useState(arrayIdentPaciente[4][1])
  const [valueOfAge, setValueOfAge] = useState(arrayIdentPaciente[5][1])
  const [valueOfTypeAge, setValueOfTypeAge] = useState(arrayIdentPaciente[6][1])
  const [valueOfSIP, setValueOfSIP] = useState(arrayIdentPaciente[7][1])
  const [valueOfh_Clínica, setValueOfh_Clínica] = useState(arrayIdentPaciente[8][1])

  const keysOfAddress = Object.keys(arrayIdentPaciente[9][1])
  const [valueOfAddress, setValueOfAddress] = useState(arrayIdentPaciente[9][1])
  const [valueOfCalle, setValueOfCalle] = useState(valueOfAddress.Calle)
  const [valueOfMunicipio, setValueOfMunicipio] = useState(valueOfAddress.Municipio)
  const [valueOfCP, setValueOfCP] = useState(valueOfAddress.CP)
  const [valueOfProvincia, setValueOfProvincia] = useState(valueOfAddress.Provincia)
  const [valueOfPais, setValueOfPais] = useState(valueOfAddress.País)

  const [valueOfPhones, setValueOfPhones] = useState(arrayIdentPaciente[10][1].toString())


  return (
    <section className="container-fluid d-flex flex-wrap justify-content-start align-items-center my-1 py-1 gx-1 border border-2 
        border-dark-subtle border-opacity-75 rounded" >
      <div className="container-fluid row gx-1 mb-2">
        <div className="col-12 col-md-3">
          <TextElement_PB
            name={`name_${arrayIdentPaciente[0][0]}`}
            labelElement={arrayIdentPaciente[0][0]}
            elementRequired={true}
            response={""}
            placeholder={arrayIdentPaciente[0][1]}
            size={20}
            elementID={`id_${arrayIdentPaciente[0][0]}`}
            valueOfText={valueOfNamePatient}
            setValueOfText={setValueOfNamePatient}
          />
        </div>
        <div className="col-12 col-md-3">
          <TextElement_PB
            name={`name_${arrayIdentPaciente[1][0]}`}
            labelElement={arrayIdentPaciente[1][0]}
            elementRequired={true}
            response={""}
            placeholder={arrayIdentPaciente[1][1]}
            size={20}
            elementID={`id_${arrayIdentPaciente[1][0]}`}
            valueOfText={valueOfSurname1Patient}
            setValueOfText={setValueOfSurname1Patient}
          />
        </div>
        <div className="col-12 col-md-3">
          <TextElement_PB
            name={`name_${arrayIdentPaciente[2][0]}`}
            labelElement={arrayIdentPaciente[2][0]}
            elementRequired={true}
            response={""}
            placeholder={arrayIdentPaciente[2][1]}
            size={20}
            elementID={`id_${arrayIdentPaciente[2][0]}`}
            valueOfText={valueOfSurname2Patient}
            setValueOfText={setValueOfSurname2Patient}
          />
        </div>
        <div className="col-12 col-md-3">
          <SelectElement_PB
            selectTextLabel={arrayIdentPaciente[3][0]}
            required={true}
            disabled={false}
            response={[arrayIdentPaciente[3][1]]}
            optionsValues={["Mujer", "Hombre"]}
            setValue={setValueOfSex}
          />
        </div>
      </div>

      <div className="container-fluid row gx-1">
        <div className="col-12 col-md-3">
          <DateElement_PB
            name={`name_${arrayIdentPaciente[4][0]}`}
            labelElement={arrayIdentPaciente[4][0]}
            elementRequired={true}
            response={"2023-04-01"}
            placeholder={"2023-01-01"}
            elementID={`id_${arrayIdentPaciente[4][0]}`}
            valueOfDate={valueOfDateofBirth}
            setValueOfDate={setValueOfDateofBirth}
          />
        </div>
        <div className="col-12 col-md-1">
          <NumberElement_PB
            name={`name_${arrayIdentPaciente[5][0]}`}
            labelElement={arrayIdentPaciente[5][0]}
            elementRequired={true}
            response={[arrayIdentPaciente[5][1]]}
            placeholder={arrayIdentPaciente[5][1]}
            size={3}
            elementID={`id_${arrayIdentPaciente[5][0]}`}
            valueOfNumber={valueOfAge}
            setValueOfNumber={setValueOfAge}
          />
        </div>
        <div className="col-12 col-md-2">
          <SelectElement_PB
            selectTextLabel={""}
            required={true}
            disabled={false}
            response={[arrayIdentPaciente[6][1]]}
            optionsValues={["dias", "meses", "anos"]}
            setValue={setValueOfTypeAge}
          />
        </div>
        <div className="col-12 col-md-2">
          <NumberElement_PB
            name={`name_${arrayIdentPaciente[7][0]}`}
            labelElement={arrayIdentPaciente[7][0]}
            elementRequired={true}
            response={[arrayIdentPaciente[7][1]]}
            placeholder={arrayIdentPaciente[7][1]}
            size={6}
            elementID={`id_${arrayIdentPaciente[7][0]}`}
            valueOfNumber={valueOfSIP}
            setValueOfNumber={setValueOfSIP}
          />
        </div>
        <div className="col-12 col-md-4">
          <TextElement_PB
            name={`name_${arrayIdentPaciente[8][0]}`}
            labelElement={arrayIdentPaciente[8][0]}
            elementRequired={true}
            response={""}
            placeholder={arrayIdentPaciente[8][1]}
            size={20}
            elementID={`id_${arrayIdentPaciente[8][0]}`}
            valueOfText={valueOfh_Clínica}
            setValueOfText={setValueOfh_Clínica}
          />
        </div>
      </div>

      <div className="container-fluid row gx-1">
        <div className="col-12 col-md-3">
          <TextElement_PB
            name={`name_${keysOfAddress[0]}`}
            labelElement={keysOfAddress[0]}
            elementRequired={true}
            response={[arrayIdentPaciente[9][1].Calle]}
            placeholder={arrayIdentPaciente[9][1].Calle}
            size={25}
            elementID={`id_${keysOfAddress[0]}`}
            valueOfText={valueOfCalle}
            setValueOfText={setValueOfCalle}
          />
        </div>
        <div className="col-12 col-md-3">
          <TextElement_PB
            name={`name_${keysOfAddress[1]}`}
            labelElement={keysOfAddress[1]}
            elementRequired={true}
            response={[arrayIdentPaciente[9][1].Municipio]}
            placeholder={arrayIdentPaciente[9][1].Municipio}
            size={25}
            elementID={`id_${keysOfAddress[1]}`}
            valueOfText={valueOfMunicipio}
            setValueOfText={setValueOfMunicipio}
          />
        </div>
        <div className="col-12 col-md-2">
          <NumberElement_PB
            name={`name_${keysOfAddress[2]}`}
            labelElement={keysOfAddress[2]}
            elementRequired={true}
            response={[arrayIdentPaciente[9][1].CP]}
            placeholder={arrayIdentPaciente[9][1].CP}
            size={6}
            elementID={`id_${keysOfAddress[2]}`}
            valueOfNumber={valueOfCP}
            setValueOfNumber={setValueOfCP}
          />
        </div>
        <div className="col-12 col-md-2">
          <TextElement_PB
            name={`name_${keysOfAddress[3]}`}
            labelElement={keysOfAddress[3]}
            elementRequired={true}
            response={[arrayIdentPaciente[9][1].Provincia]}
            placeholder={arrayIdentPaciente[9][1].Provincia}
            size={15}
            elementID={`id_${keysOfAddress[3]}`}
            valueOfText={valueOfProvincia}
            setValueOfText={setValueOfProvincia}
          />
        </div>
        <div className="col-12 col-md-2">
          <TextElement_PB
            name={`name_${keysOfAddress[4]}`}
            labelElement={keysOfAddress[4]}
            elementRequired={true}
            response={[arrayIdentPaciente[9][1].Pais]}
            placeholder={arrayIdentPaciente[9][1].Pais}
            size={15}
            elementID={`id_${keysOfAddress[4]}`}
            valueOfText={valueOfPais}
            setValueOfText={setValueOfPais}
          />
        </div>
      </div>

      <div className="container-fluid row gx-1">
        <div className="col-12 col-md-6">
          <TextElement_PB
            name={`name_${arrayIdentPaciente[10][0]}`}
            labelElement={arrayIdentPaciente[10][0]}
            elementRequired={true}
            response={[arrayIdentPaciente[10][1].toString()]}
            placeholder={arrayIdentPaciente[10][1].toString()}
            size={25}
            elementID={`id_${arrayIdentPaciente[10][0]}`}
            valueOfText={valueOfPhones}
            setValueOfText={setValueOfPhones}
          />
        </div>
      </div>
    </section>
  )
}

export default DatosDeIdentificacion;

/*
  const paciente = {
    namePatient: "Nerea",
    surname1Patient: "Aguilar",
    surname1Patient: "Berbel",
    telephone: ["961547806", "637325223"],
    sex: "Mujer",
    dateofBirth: "",
    age: 23,
    typeAge: ["días", "meses", "años"],
    address: {
      street: "CARRE ROSSINYOL 14",
      municipality: "QUART DE POBLET",
      zipCode: 46930,
      province: "Valencia",
      country: "España"
    },
    SIP: 11446102,
    h_Clínica: ""
  }
*/