import React, { Fragment } from 'react'
import Navbar from '@components/Navbar/Navbar'

type LayoutProps ={
    children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Fragment>
            <Navbar />
            {children}
            <footer>This is the footer</footer>
            <style jsx>
                {`
                    footer {
                        background: salmon;
                    }
                `}
            </style>
        </Fragment>
    )
}

export default Layout
