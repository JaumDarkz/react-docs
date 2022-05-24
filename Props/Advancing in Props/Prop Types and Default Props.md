# Prop Types and Default Props

- We can **define types to props**, performing a kind of validation;

- We set on an object called **propTypes** in the component itself;

- Has the possibility to **define in a default value**;

- In this case we use the object called **defaultProps**;

```
import PropTypes from 'prop-types'

function Item({brand, launch_year}) {
  return (
    <>
      <li>
        {brand} - {launch_year}
      </li>
    </>
  )
}

Item.propTypes = {
  brand: PropTypes.string, // if we throw a number type in the component throws an warning in the console
  // brand: PropTypes.string.isRequired // Now is obligatory we throw an string
  launch_year: PropTypes.number,
}

Item.defaultProps = {
  brand: "Brand Missed",
  launch_year: 0,
}

export default Item
```