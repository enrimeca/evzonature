import React, { useState, useEffect } from 'react'

import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'

export const getServerSideProps = async () => {
    const response = await fetch('https://evzonature.vercel.app/api/evzo')
    const { data }:TAPIAvoResponse = await response.json()

    return {
        props: {
            productList: data,     
        }
    }
}

const HomePage = ({ productList }:{ productList: TProduct[] }) => {

    return (
        <Layout>
            <ProductList products={productList} />
        </Layout>
    )
}

export default HomePage
