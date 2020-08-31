import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const { query } = useRouter()

    return (
        <section>
            <h1>Página producto : { query.id }</h1>
        </section>
    )
}

export default ProductItem
