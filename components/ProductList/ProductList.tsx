import React from 'react'
import Link from 'next/link'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <div className="col-12 col-md-6 col-lg-4 px-4 my-3">
          <summary className="card border-success"> 
              <img className="card-img-top" src={image} alt="Card image cap" />
              <div className="card-body">
                <div className="card-title">
                  <h5>{name}</h5>                    
                </div>
                <p className="card-text p-line text-right">S/ {price}.00</p>
              </div>
          </summary>    
        </div>
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <div className="container pb-4 section-inner">
    <div className="row">
      <div className="col text-center mt-1">
        <h1 className="text-success">EVZONATURE</h1>        
      </div>
    </div>
    <div className="row">
      <div className="col text-center mb-2">
        <h4>Tienda Ecológica</h4>        
      </div>
    </div>
    <div className="row">      
        {mapProductsToCards(products)}       
    </div>
    <style jsx>
      {`
        .section-inner {
          padding: 50px;
        }
        @media(max-width: 576px){
          .section-inner {
            padding: 25px;
          }
        }
      `}
    </style>
  </div>
)

export default ProductList
