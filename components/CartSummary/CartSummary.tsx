import React from 'react'

type CartSummaryProps = {
  totalAmount: number
}

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col">
                <strong>Sub total:</strong>{`${totalAmount}`}
                <button type="button" className="btn btn-success">Success</button>
            </div>
        </div>
    </div>
  )
}

export default CartSummary
