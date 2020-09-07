import React from 'react'

type CartSummaryProps = {
  totalAmount: number
}

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (

    <div className="card text-right m-5">
      <div className="card-body">
        <strong>Sub total :  </strong>{`${totalAmount}`}
        <button type="button" className="btn btn-success ml-4">Pagar</button>
      </div>
    </div>
  )
}

export default CartSummary
