import React from 'react'
import '../../sass/components/pureBootstrap/LabelElement_PB.scss'


function LabelElement_PB({textOfLabel}) {

  return (
    <div className="contLabelElement mb-2">
      <label className="labelElement label label-default">{textOfLabel}</label>
    </div>
  )
}

export default LabelElement_PB;