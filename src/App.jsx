import React from 'react'

import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'

export default (props) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Fragment />
    <WithParameter
      titulo="Situação do Aluno"
      aluno="Pedro"
      nota={9.3}
    />
    <First />
  </div>
)