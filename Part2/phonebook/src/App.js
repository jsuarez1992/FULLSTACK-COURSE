import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [buscar, setBuscar] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  })

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
