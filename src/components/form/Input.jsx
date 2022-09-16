import './Input.css'
import React, { useState } from "react"

export default props => {

  const [value, setValue] = useState('inicial')

  function whenChange(e) {
    setValue(e.target.value)
  }

  return (
    <div className="Input">
      <input value={value} onChange={whenChange} />
      <input value={undefined} />
    </div>
  )
}