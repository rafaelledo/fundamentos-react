import React from "react";

export default props => {
  const cb = props.onClick
  const generateAge = () => parseInt(Math.random() * (20)) + 50
  const generateNerd = () => Math.random() > 0.5
  return (
    <div>
      <div>Child</div>
      <button onClick={_ => cb('João', generateAge(), generateNerd())}>
        Fornecer informações
      </button>
    </div>
  )
}