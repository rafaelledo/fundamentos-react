import './ProductsTable.css'
import React from "react";
import products from '../../data/products'

export default props => {
  function getLines () {
    return products.map((product, i) => {
      return (
        <tr key={product.id} className={i % 2 === 0 ? 'Even' : 'Odd'}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>R$ {product.price.toFixed(2).replace('.', ',')}</td>
        </tr>
      )
    })
  } 

  return (
    <div className="ProductsTable">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {getLines()}
        </tbody>
      </table>
    </div>
  )
}