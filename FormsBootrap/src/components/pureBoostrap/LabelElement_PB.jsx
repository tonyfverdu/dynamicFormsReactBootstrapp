import React from 'react'
import '../../sass/components/pureBootstrap/LabelElement_PB.scss'


function LabelElement_PB({textOfLabel, htmlForm}) {

  return (
    <div className="contLabelElement mb-2">
      <label htmlForm={htmlForm} className="labelElement label label-default">{textOfLabel}</label>
    </div>
  )
}

export default LabelElement_PB;