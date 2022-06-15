import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [buscar, setBuscar] = useState('')

  const addUser = (e) => {
    e.preventDefault()
    console.log('user clicked button', e.target)
    let repeatUser = persons.find(person => person.name === newName)
    if (typeof repeatUser === 'undefined') {
      const userObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(userObject))
      setNewName('')
      setNewNumber('')
    }
    else {
      window.alert(window.alert(newName + 'is already added to the phonebook'))
    }

  }

  const storeNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const storeNumberChange = (e) => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  const storeBuscarChange = (e) => {
    console.log(e.target.value)
    setBuscar(e.target.value)
  }

  const buscarName = persons.filter(person => person.name.includes(buscar)) 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter header= 'filter shown with'
      name={buscar} buscarFunction={storeBuscarChange} />      
      <h2>add a new</h2>      
      <PersonForm addUser={addUser} newName={newName}
      storeNameChange={storeNameChange} newNumber={newNumber}
      storeNumberChange={storeNumberChange} />
      <h2>Numbers</h2>
      <Persons buscarName={buscarName} />
    </div>
  )
}

export default App
