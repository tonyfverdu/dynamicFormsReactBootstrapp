import React from 'react'
import "../../sass/components/pureBootstrap/HeaderOfBlock.scss";


function HeaderOfBlock({ titleOfBlock }) {

  return (
    <div className="contTitleOfBlock container-fluid">
      <header className="headerOfBlock" id="headerTitleOfBlock">
        <h6 className="titleOfBlock p-1" id="titleOfBlock">{titleOfBlock}</h6>
      </header>
    </div>
  )
}

export default HeaderOfBlock;

/*
bg-secondary-subtle
*/