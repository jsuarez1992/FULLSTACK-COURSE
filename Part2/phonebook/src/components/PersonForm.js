import React from 'react'

const PersonForm = ({addUser,newName,storeNameChange,newNumber,storeNumberChange}) => {
  return (
    <div>
      <form onSubmit={addUser}>
        <div>
          name: <input value={newName} onChange={storeNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={storeNumberChange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm