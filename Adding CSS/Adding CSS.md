# Adding CSS

- The CSS can be added **globally** in the application, in the index.css file for example;

- But its possible to style in component level;

- We use **CSS modules** to that;

- Just create an file like: Component.module.css;

- And call the CSS in the component;


button.module.css:
```
.button {
  padding: 5px;
  background-color: black;
  font-color: white;
  border-radius: 3px;
}
```
```
Button.tsx:
import styles from './button.module.css'

function Button () {

  return (
    <div className={styles.container}>
      <button className={styles.button}>Press me</button>
    </div>
  )
  //...component code
}
```