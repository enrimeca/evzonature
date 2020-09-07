import React from 'react'
import Layout from '@components/Layout/Layout'
// import Navbar from '../../components/Navbar/Navbar'

const InformationPage = () => {
    return (
        <Layout>
            <div className="container py-4">
                <div className="row">
                    <div className="col px-4 py-4">
                        <h2 className="">Información de Envío</h2>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col px-4">
                        <p className="text-justify">
                        Con la entrega del producto al Usuario o persona encargada de recibirlo se entenderá que se encuentra conforme con el estado y las características del producto entregado, salvo que realice alguna observación en el momento de la entrega.
                        <br /><br />Los productos serán de entera responsabilidad del Usuario una vez hayan sido entregados o puestos a su disposición.
                        <br /><br />La entrega de los productos vendidos en el Sitio web se realizarán mediante la opción de envío o delivery.
                        <br /><br />El costo del delivery se calculará en base al distrito o provincia en la que se encuentre el cliente.
                        <br /><br />El tiempo de entrega del producto es de 3 a 7 días hábiles.
                        </p>
                    </div>
                </div>
            </div>         
        </Layout>
    )
}

export default InformationPage
