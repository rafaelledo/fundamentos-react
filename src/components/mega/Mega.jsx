import './Mega.css'
import React, { useState } from 'react'

export default props => {
  function generateNumberNotIn(min, max, array) {
    const aleatory = parseInt(Math.random() * (max + 1 - min) + min)
    return array.includes(aleatory) ?
      generateNumberNotIn(min, max, array) :
      aleatory
  }

  function generateNumbers(amount) {
    const numbers = Array(amount)
      .fill(0)
      .reduce(nums => {
        const newNumber = generateNumberNotIn(1, 60, nums)
        return [...nums, newNumber]
      }, [])
      .sort((n1, n2) => n1 - n2)
    return numbers
  }

  const [qty, setQty] = useState(props.qty || 6)

  const initialNumbers = generateNumbers(qty)

  const [numbers, setNumbers] = useState(initialNumbers)

  return (
    <div className='Mega'>
      <h2>Mega</h2>
      <h3> {numbers.join(' ')} </h3>
      <div>
        <label htmlFor=""><strong>Numbers qty</strong></label>
        <input
          min={6}
          max={15}
          type="number"
          value={qty}
          onChange={e => {
            setQty(+e.target.value)
            setNumbers(generateNumbers(+e.target.value))
          }} />
      </div>
      <button onClick={_ => {
        setNumbers(generateNumbers(qty))
      }}>
        Generate Numbers
      </button>
    </div>
  )
}