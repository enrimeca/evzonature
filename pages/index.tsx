import React, { useState, useEffect } from 'react'

import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'

const HomePage = () => {

    const [productList, setProductList] = useState<TProduct[]>([])

    useEffect(() => {
        window
            .fetch('/api/evzo')
            .then((response) => response.json())
            .then(({ data, length }) => {
                setProductList(data)
            })
    }, [])

    return (
        <Layout>
            <ProductList products={productList} />
        </Layout>
    )
}

export default HomePage