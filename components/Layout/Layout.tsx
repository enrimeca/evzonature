import React, { Fragment } from 'react'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

type LayoutProps ={
    children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Fragment>
            <Navbar />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout
