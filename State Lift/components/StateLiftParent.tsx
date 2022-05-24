import { useState } from 'react'

import StateLiftChild from './StateLiftChild'
import Greetings from './Greetings'

function StateLiftParent() {

  const [name, setName] = useState()

  return (
    <>
    <h1>State Lift</h1>
    <StateLiftChild setName={setName} />
    <Greetings name={name} />
    </>
  )
}

export default StateLiftParent