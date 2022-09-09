import React from 'react'
import App from './App.css'

import Card from './components/layout/Card'
import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'
import Aleatory from './components/basics/Aleatory'

export default props => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#04 - Desafio Aleatório">
        <Aleatory min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragment />
      </Card>

      <Card titulo="#02 - Com parâmetro">
        <WithParameter
          titulo="Situação do Aluno"
          aluno="Pedro"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente">
        <First />
      </Card>
    </div>
  </div>
)