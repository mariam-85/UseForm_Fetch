import React from 'react'
import style from './index.module.css'

export default function Product({ title, description, price }) {
  return (
    <div className={style.product_card}>
      <p>Title: { title }</p>
      <p>Description: { description }</p>
      <p>Price: { price }</p>
    </div>
  )
}
