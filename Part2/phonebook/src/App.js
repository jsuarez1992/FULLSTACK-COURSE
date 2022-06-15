import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addUser = (e) => {
    e.preventDefault()
    console.log('user clicked button', e.target)
    const userObject = {
      name: newName,
    }

    setPersons(persons.concat(userObject))
    setNewName('')
  }

  const storeNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addUser}>
        <div>
          name: <input value={newName} onChange={storeNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyle: 'none' }}>
        {persons.map((e, i) => <li key={i}>{e.name}</li>)}
      </ul>
    </div>
  )
}

export default App
