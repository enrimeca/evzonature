import React, { Fragment } from 'react'
import Head from 'next/head'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

type LayoutProps ={
    children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Fragment>
            <Head>
                <title>EVZONATURE</title> 
                <meta name="description" content="Tienda online de artículos ecológicos" /> 
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout
