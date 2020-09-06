import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
import Loader from '@components/Loader/Loader'

const ProductPage = () => {
    const { query } = useRouter()
    const [product, setProduct] = useState<TProduct | null>(null)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      if (query.id) {
        window
          .fetch(`/api/evzo/${query.id}`)
          .then((response) => response.json())
          .then((data: TProduct) => {
            setProduct(data)
            setLoading(false)
          })
      }
    }, [query.id])
  
    return (
      <Layout>
        {loading
          ? <Loader /> 
          : ( product == null 
              ? null 
              : <ProductSummary product={product} />
            )
        }
      </Layout>
    )
  }
  
  export default ProductPage