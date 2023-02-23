

import React, { useContext } from 'react'
import style from './index.module.css'
import { useForm } from 'react-hook-form'
import { Context } from '../../context'
import { addProduct } from '../../requests/products'

export default function AddProductForm() {

  const { createNewProduct } = useContext(Context);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const titleRegister = register('title', {
    required: '* Mandatory field'
  });

  const descrRegister = register('description', {
    required: '* Mandatory field'
  });

  const priceRegister = register('price', {
    required: '* Mandatory field'
  });

  const submit = (data) => {
    addProduct(data, createNewProduct);
    reset();
  }

  return (
    <div>
      <form className={style.add_product_form} onSubmit={handleSubmit(submit)}>
        <input type='text' name='title' placeholder='Title' {...titleRegister} />
        <input type='text' name='description' placeholder='Description' {...descrRegister} />
        <input type='text' name='price' placeholder='Price' {...priceRegister} />
        <button>Add product</button>
      </form>

      <div>
        {errors?.title && <p style={{ color: 'red' }}>{errors?.title?.message}</p>}
        {errors?.description && <p style={{ color: 'red' }}>{errors?.description?.message}</p>}
        {errors?.price && <p style={{ color: 'red' }}>{errors?.price?.message}</p>}
      </div>
    </div>
  )
}
