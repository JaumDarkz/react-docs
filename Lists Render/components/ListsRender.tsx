function ListsRender() {
  
  const myItems = ['React', 'Vue', 'Angular']

  return (
    <>
      <h3>Good boy List:</h3>
      {
        myItems.length > 0 ? (
        myItems.map((item, index) => (
          <p key={index}>{item}</p>
        )
      )) : (
        <p>Nothing to show man :p</p>
      )}
    </>
  )
}

export default ListsRender