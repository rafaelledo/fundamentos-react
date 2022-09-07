import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'

ReactDOM.render(
  <div id="app">
    <First/>
    <WithParameter titulo="Situação do Aluno" aluno="Pedro" nota={9.3}></WithParameter>
    <Fragment/>
  </div>,
  document.getElementById('root')
)