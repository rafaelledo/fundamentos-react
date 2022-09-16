import React from 'react'
import App from './App.css'

import Counter from './components/counter/Counter'
import Input from './components/form/Input'
import IndirectParent from './components/communication/IndirectParent'
import ParentDirect from './components/communication/ParentDirect'
import UserInfo from './components/conditional/UserInfo'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import ProductsTable from './components/repetition/ProductsTable'
import StudentList from './components/repetition/StudentList'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import Card from './components/layout/Card'
import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'
import Aleatory from './components/basics/Aleatory'

export default props => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#12 - Contador" color="#2A0944">
        <Counter initialNumber={10} ></Counter>
      </Card>

      <Card titulo="#11 - Componente Controlado (Input)" color="#6FEDD6">
        <Input></Input>
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#472D2D">
        <IndirectParent></IndirectParent>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#E3C770">
        <ParentDirect></ParentDirect>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#367E18">
        <EvenOrOdd number="2"></EvenOrOdd>
        <UserInfo user={{name: 'Fernando'}}></UserInfo>
        {/* <UserInfo user={{email: 'fernando@gmail.com'}}></UserInfo> */}
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#C98474">
        <ProductsTable></ProductsTable>
      </Card>

      <Card titulo="#06 - Repetição" color="#fb8500">
        <StudentList></StudentList>
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#1d3557">
        <Family sobrenome="Ferreira">
          <FamilyMember nome="Pedro" />
          <FamilyMember nome="Ana" />
          <FamilyMember nome="Gustavo" />
        </Family>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#009933">
        <Aleatory min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#8000ff">
        <Fragment />
      </Card>

      <Card titulo="#02 - Com parâmetro" color="#cc0066">
        <WithParameter
          titulo="Situação do Aluno"
          aluno="Pedro"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#ee9b00">
        <First />
      </Card>
    </div>
  </div>
)