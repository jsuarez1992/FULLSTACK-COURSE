import React from 'react'

const Persons = ({buscarName}) => {
  return (
    <div>{buscarName.map((person,id) => <div key={id}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default Persons