function Person ({photo, name, age, profession}) { // using destructuring as props to clean the code
return (
    <div>
      <img src={photo} alt={name} />
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Profession: {profession}</h2>
    </div>
  )
}

export default Person