import React from 'react'

const Filter = ({header,name,buscarFunction}) => {
  return (
    <div>{header}<input value={name} onChange={buscarFunction} />
    </div>
  )
}

export default Filter