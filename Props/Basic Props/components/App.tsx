import SayMyName from './SayMyName'
import Person from './Person'

function App() {

  const photo = 'http://www.natural-environment.com/blog/2008/04/22/fiordland-national-park-new-zealand/'
  const name = 'Jonh'
  const age = 15
  const profession = 'programmer'

  return (
    <div>
      <SayMyName name={name} />
      <Person photo={photo} name={name} age={age} profession={profession} />
    </div>
  )
}

export default App