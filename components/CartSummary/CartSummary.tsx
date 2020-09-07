import React from 'react'

type CartSummaryProps = {
  totalAmount: number,
  subTotal: number
}

const CartSummary = ({ totalAmount, subTotal }: CartSummaryProps) => {
  return (

    <div className="card text-right m-5">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 col-12">
            <p><strong>Cantidad total :  </strong>{`${totalAmount} unid(s)`}</p>
          </div>
          <div className="col-md-4 col-12">
              
            <p><strong>Sub total :  </strong>{`S/ ${subTotal}`}</p>
          </div>
          <div className="col-md-4 col-12">
            <button type="button" className="btn btn-success">Pagar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
