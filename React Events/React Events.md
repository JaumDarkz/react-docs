# React Events

- The **React events** are the same Dom events;

- That is, we have events to response in a click;

- The event is linked to a **tag** that will run it;

- This method has to be created in the component;

```
fuction Events() {
  function myEvent() {
    console.log('I'm activated now')
  }

  function registerUser() {
    console.log('User registered')
  }

  return (
    <div>
      <button onClick={myEvent}>Activate onClick</button>
      {/* Form Event */}
      <form onSubmit={registerUser}>
        <div>
          <input type='text' placeholder='Type you name'>
        </div>
        <div>
          <input type='submit' value "Register">
        </div>
      </form>
    </div>
  )
}

export default Events
```

## To see another events, check out official React documentation.