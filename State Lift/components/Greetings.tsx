function Greetings({ name }) {
  
  function generateGreeting(userName) {
    return `Hello, ${userName}, doing good?`
  }
  
  return (
    <>
      {name && <p>{generateGreeting(name)}</p>}
    </>
  )
}

export default Greetings