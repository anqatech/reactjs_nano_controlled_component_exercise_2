import React from 'react'
import PropTypes from 'prop-types'


const InputNewItem = ({ value, addItem, handleChange, inputIsEmpty }) => {

    return (
        <form onSubmit={ addItem }>
          <input
            type="text"
            placeholder="Enter New Item"
            value={ value }
            onChange={ handleChange }
          />
          <button disabled={ inputIsEmpty() }>Add</button>
        </form>
    )
}

InputNewItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputIsEmpty: PropTypes.func.isRequired
}

export default InputNewItem
