function StateLiftChild( setName ) {
  return (
    <>
      <p>Type you name:</p>
      <input type="text" placeholder="What's your name?" onChange={(e) => setName(e.target.value)} />
    </>
  )
}

export default StateLiftChild