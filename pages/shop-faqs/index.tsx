import React from 'react'
import Layout from '@components/Layout/Layout'
// import Navbar from '../../components/Navbar/Navbar'

const FaqsPage = () => {
    return (
        <Layout>
            <div className="container py-4">
                <div className="row">
                    <div className="col px-4 py-4">
                        <h2 className="">Preguntas Frecuentes</h2>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col px-4 pb-3">
                    <p><strong>1. ¿Por qué usar cepillos de dientes de bambú? </strong></p>
                        <p className="text-justify">El 1% del plástico acumulado en los océanos son cepillos de dientes,que al ser muy difícil de reciclar, pueden tardar en descomponerse más de 400 años, terminando finalmente en nuestros océanos, interviniendo de forma alarmante en nuestra cadena alimenticia.
                        <br />Lo bueno es que esto se puede frenar!
                        <br />Evzonature se caracteriza por estar concientizada con un estilo de vida natural, saludable y sostenible, por lo que te presentamos nuestro cepillo de dientes de bambú,un cepillo natural y sostenible, elaborado de bambu, con gran efectividad y poder de limpieza, cerdas flexibles de dureza media que consiguen un cepillado efectivo y placentero.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col px-4 pb-3">
                    <p><strong>2. ¿Cuáles son los beneficios de usar cepillos de dientes de bambú? </strong></p>
                        <p className="text-justify"> - Reducen la contaminación medio ambiental: menos plásticos en nuestros océanos.
<br /> - Se hace uso de material sostenible para su elaboración. El bambú crece a gran velocidad.
<br /> - El bambú cuenta con propiedades antibacterianas por lo que no se utilizan pesticidas y fertilizantes en su cultivo.
<br /> - Su mango es biodegradable, en pocos años puede volver a la tierra como sustrato.
<br /> - Los animales marinos podrán reducir el número de microplásticos ingeridos.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col px-4 pb-3">
                    <p><strong>3. ¿Qué nos puedes decir sobre los productos tennológicos de bambú? </strong></p>
                        <p className="text-justify">Sabías que, gran parte de los avances tecnológicos también traen consigo un enorme perjuicio a nuestro planeta, al generar residuos que resultan difíciles de eliminar.
Mas aún ahora que el trabajo y los estudios se vienen realizando de manera virtual, el uso de aparatos electrónicos y/o tecnológicos ha ido en aumento, es por ello, que te ofrecemos una alternativa de mouse, teclado, cooler, USB y calculadora de bambú. Con su uso ayudaremos a la disminución del plástico que se da mucho en la fabricación convencional de estos productos.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col px-4 pb-3">
                    <p><strong>4. Qué beneficios me trae usar el cepillo de bambú de Evzonature? </strong></p>
                        <p className="text-justify">Nuestro peine de bambú esta fabricado en su totalidad de bambú, el cual ayuda a controlar el frizz y masajea el cuero cabelludo estimulando la circulación, así promueve el rápido crecimiento del cabello y mejora su calidad.</p>
                    </div>
                </div>
            </div>         
        </Layout>
    )
}

export default FaqsPage
