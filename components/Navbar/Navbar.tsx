import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import ShoppingCartIcon from './ShoppingCartIcon'
import { useCart } from '@store/Cart'

const Navbar = () => {
    const { pathname } = useRouter()
    const { count: cartCount } = useCart()

    return (
            <nav className="navbar navbar-light bg-light justify-content-between py-3">
                <Link href="/" passHref>
                    <a className="navbar-brand mb-0 h1">Evzonature</a>
                </Link>  

                <Link href="/cart" passHref>
                    <a className="text-decoration-none text-dark"><ShoppingCartIcon cartCount={cartCount} name="Canasta" /></a>                     
                </Link>  
                <style jsx>
                {`
                    nav {
                        padding: 0 10%;
                    }
                `}
            </style>          
            </nav>
    )
}

export default Navbar
