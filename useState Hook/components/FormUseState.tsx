import { useState } from 'react'

function FormUseState() {
  function registerUser(event) {
    event.preventDefault()
    console.log(`user ${name} has been registered with the password: ${password}`)
  }
  const [name, setName] = useState()
  const [password, setPassword] = useState()

  }

  return (
    <div>
      <h1>My Account</h1>
      <form onSubmit={registerUser}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text"
            id="name"
            name="name"
            placeholder="Type your name"
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
            <input 
              type="text"
            id="name"
            password="password"
            placeholder="Type your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default FormUseState
