# Fragments

- The **React Fragments** allows the creation of an component without a parent element;

- The purpose  is **uncomplicate the nodes of the DOM**;

- The syntax is **<> and </>**, without a tag name;

- We create in JSX itself;

```
function Fragments() {

  return (
    <>
    <h1>Fragments List</h1>
    <ul>
      <li>Fragment 1</li>
      <li>Fragment 2</li>
    </ul>
    </>
  )

}

export default Fragments
```