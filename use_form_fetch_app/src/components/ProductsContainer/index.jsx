import React, { useContext } from 'react'
import { Context } from '../../context'
import Product from '../Product'
import style from './index.module.css'

export default function ProductsContainer() {

  const { products } = useContext(Context);

  return (
    <div className={style.products_container}>
      {
        products.map(el => <Product key={el.id} {...el} />)
      }
    </div>
  )
}
