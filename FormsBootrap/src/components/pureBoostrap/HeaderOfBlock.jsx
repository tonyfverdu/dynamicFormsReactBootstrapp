import React from 'react'
import "../../sass/components/pureBootstrap/HeaderOfBlock.scss";


function HeaderOfBlock({ titleOfBlock }) {

  return (
    <div className="container-fluid py-1 bg-secondary bg-gradient">
      <header className="container-fluid d-flex justify-content-start" id="headerTitleOfBlock">
        <h6 className="p-1 text-center text-capitalize text-light" id="titleOfBlock">{titleOfBlock}</h6>
      </header>
    </div>
  )
}

export default HeaderOfBlock;

/*
contTitleOfBlock
headerOfBlock
titleOfBlock 
*/