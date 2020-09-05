import React, { useState, useContext, ReactEventHandler } from 'react'
import { useCartMutations } from '@store/Cart'

type AddToCartProps = {
  product: TProduct
}

const addToCartRequest = () =>
  new Promise((resolve, reject) => {
    window.setTimeout(resolve, 100)
  })

const validate = (quantity: number) => {
  let error = ''
  if (quantity < 1) error = "No puede estar en blanco"

  return error
}

const AddToCart = ({ product }: AddToCartProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [visible, setVisible] = useState(false)
  const { addToCart } = useCartMutations()

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false)
    }, 100)
  }

  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault()
    const error = validate(quantity)
    setError(error)

    if (!error) {
      setLoading(true)
      addToCartRequest()
        .then(() => {
          addToCart(product, quantity)
          setLoading(false)
          setQuantity(quantity)
          setVisible(true)
          toggleMessage()
        })
        .catch((err: Error) => {
          setError(`Error: ${err}` || 'Something went wrong')
          setLoading(false)
        })
    }
  }

  
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(parseInt(target.value, 10))

  return (
    <>
        <form onSubmit={handleSubmit}>
          <div className="form-row align-items-center mb-3">
            <div className="col-auto">
              <label className="sr-only">Name</label>
              <input type="number" id="points" name="points" step="1" placeholder="Quantity" value={quantity} onChange={handleChange}></input>
              {error && <p className='text-danger'>{error}</p>}
            </div>
            <div className="col-auto">
              <button type='submit' className="btn btn-success my-2" >Agregar</button>
            </div>
          </div>
          <style jsx>
            {`
              input {
                width: 150px;
              }
            `}
          </style>
        </form>
    </>
  )
}

export default AddToCart
