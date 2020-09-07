import React from 'react'
import Layout from '@components/Layout/Layout'
// import Navbar from '../../components/Navbar/Navbar'

const PrivacityPage = () => {
    return (
        <Layout>
            <div className="container py-4">
                <div className="row">
                    <div className="col px-4 py-4">
                        <h2 className="">Términos y Condiciones</h2>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col px-4 pb-3">
                    <p><strong>Sobre el uso de la página web </strong></p>
                        <p className="text-justify">El acceso y el uso que se realice en la página, se rigen por los términos y condiciones descritos en el presente documento, así como por la legislación peruana aplicable y vigente.
                        <br />En tal sentido, conforme con lo dispuesto en la Ley N° 29571 – “Código de Protección y Defensa del Consumidor” , informamos que el titular de la página http://www.evzonature.com.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col px-4 pb-3">
                    <p><strong>ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES </strong></p>
                        <p className="text-justify">El Acceso al Sitio Web es gratuito.
                        <br />En cada Acceso se aplicarán los Términos y Condiciones vigentes en ese momento. El uso continuado del Sitio Web supone su aceptación y sometimiento a los Términos y Condiciones vigentes.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col px-4 pb-3">
                    <p><strong>Obligaciones del usuario </strong></p>
                        <p className="text-justify">El Usuario se compromete a realizar el Acceso al Sitio Web de forma diligente, correcta y lícita; absteniéndose de cualquier acción que atente contra el buen funcionamiento del Sitio Web y/o impida la realización de sus fines.
                        <br /><strong>El usuario no puede usar el Sitio Web con fines fraudulentos o llevar a cabo conductas que dañen la imagen de la empresa o de terceros.</strong>
                        <br />En caso de incumplimiento nos reservamos el derecho de limitar, suspender o terminar el Acceso de dicho Usuario al Sitio Web.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col px-4 pb-3">
                    <p><strong>VENTA DE PRODUCTOS </strong></p>
                        <p className="text-justify">Las descripciones y fotografías de los productos tienen por objeto aportar la mayor información posible. No obstante, el Usuario debe tener en cuenta que tienen un propósito únicamente orientador y, en consecuencia, carecen de carácter exhaustivo. Las Imágenes de los productos se exhiben únicamente con fines referenciales y son meramente ilustrativas; por lo tanto, podrían existir pequeñas diferencias entre las Imágenes y las dimensiones y características reales de los productos recibidos.
                        <br />Las Imágenes de productos son exhibidas con la mayor nitidez y precisión posible; sin embargo, la visualización del color de los productos dependerá del monitor desde el que se acceda al Sitio Web.
                        <br />Los precios que se muestran en el Sitio Web son exclusivos para las compras efectuadas únicamente el Sitio Web y no son necesariamente aplicables para transacciones efectuadas a través de otros medios como facebook o instagram. Asimismo, las promociones de la pagina web no necesariamente coinciden con los ofertados en otros medios.</p>
                    </div>
                </div>
            </div>         
        </Layout>
    )
}

export default PrivacityPage
