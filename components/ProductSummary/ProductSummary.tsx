import React from 'react'

import AddToCart from './AddToCart'

type ProductSummaryProps = {
  product: TProduct
}

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <>
   <div className="container">
      <div className="card my-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-12 py-3 text-center">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="col-md-6 col-12 py-3 my-auto">
                <div className="container-inner">
                  <h3>{product.name}</h3>
                  <h4>S/ {product.price}.00</h4>
                  <AddToCart product={product} />
                  <h5>Descripción</h5>
                  <p>{product.attributes.description}</p>

                </div>
            </div>    
          </div>     
        </div>
      </div>
      <style jsx>
        {`
            img {
                width: 75%;
            }
            @media (max-width: 576px) { 
              img {
                width: 95%;
              }
              .container-inner{
                padding: 0 15px;
              }

              h3 {
                font-size: 1.5rem;
              }
              h4 {
                font-size: 1.2rem;
              }
              h5 {
                font-size: 1rem;
              }
            }  

            @media (min-width: 576px) { 
              .container-inner{
                padding: 0 60px;
              }
            }  

            @media (min-width: 768px) { 
              .container-inner{
                padding: 0 50px 0 0;
              }
            } 

                            
        `}
      </style>
   </div>        
  </>
)

export default ProductSummary
