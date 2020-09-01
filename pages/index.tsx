import React, { useState, useEffect } from 'react'
// import Navbar from '../components/Navbar/Navbar'

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
        <div>
            <div>Tienda Ecológica EVZONATURE</div>
            {productList.map((product) => (
                <div>{product.image}</div>
            ))}
        </div>
    )
}

export default HomePage
