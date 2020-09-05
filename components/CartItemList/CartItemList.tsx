import React from 'react'
import Link from 'next/link'
import Loader from '@components/Loader/Loader'
import { CartItemType } from '@store/Cart'

type CartItemListProps = {
  items: CartItemType[]
  removeFromCart: (product: TProduct) => void
  loading?: boolean
}

const CartItemList = ({
  items,
  removeFromCart,
  loading = false,
}: CartItemListProps) => {
  if (loading) return <Loader/>

  if (items.length === 0)
    return (
        <div className="container">
            <h2>Tu canasta está vacía</h2>
            <p>Necesitas agregar algunos items a tu canasta antes de comprar</p>
        </div>
    )

  const mapCartItemsToItems = (items: CartItemType[]) =>
    items.map((cartItem) => {
      console.log('carItem : ', items)
      const { id, name, quantity, price, image, } = cartItem

      return ( 
          <li key={id} className="list-group-item d-flex  align-items-center">
              <div className="col-4 text-right">
                  <img src={image} alt={name} />
              </div>
              <div className="col-6 ml-2 pr-1">
                  <Link href="/product/[id]" as={`/product/${id}`} passHref>
                    <a className="text-decoration-none">
                      <h5>{name}</h5>
                    </a>
                  </Link>
                  <p>{quantity} x S/ {price}.00</p>
              </div>         
              <div className="col-2 text-left">
                  <button type='submit' className="btn btn-outline-danger"  onClick={() => removeFromCart(cartItem)} >X</button>
              </div>    
              <style jsx>
                {`
                  img {
                    width: 130px;
                  }
                  
                  @media (max-width: 576px) { 
                    h5 {	
                      font-size: 1rem;
                    }
                    img {
                      width: 100px;
                    }

                  }
                `}
              </style>
          </li>
         )
    })

  return (
      <ul className="list-group">
          {mapCartItemsToItems(items)}
      </ul>
  )
}

export default CartItemList
