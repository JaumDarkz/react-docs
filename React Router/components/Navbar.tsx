import { Link } from 'react'

function Navbar() {
  return (
    <ul>
      <li> 
        <Link to='/'>Home</Link>
      </li>

      <li> 
        <Link to='business'>Home</Link>
      </li>

      <li> 
        <Link to='/contact'>Home</Link>
      </li>
    </ul>
  )
}

export default Navbar