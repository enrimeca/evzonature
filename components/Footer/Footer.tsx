import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <div className="container pt-5">
        <div className="row">
          <div className="col-md-4 col-12 mb-4 px-4">
            <h4>Contáctanos</h4>
            <p>Contáctenos para hacernos sugerencias, resolver sus dudas, o hacernos solicitudes de productos.</p>
            <div>
              <p><strong>Email: </strong>info@evzoasociados.com</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 px-4">
            <h4>Formas de Pago</h4>
            <p>Por el momento solo aceptamos transferencias interbancarias.</p>
          </div>
          <div className="col-md-4 col-12 mb-4 px-4">
            <h4>Recursos Tienda</h4>
            <Link href="/shop-faqs" passHref>
              <p>
                <a className="text-decoration-none text-success">Preguntas Frecuentes</a>                     

              </p>
            </Link>
            <Link href="/shopping-information" passHref>
              <p>
                <a className="text-decoration-none text-success">Información de Envío</a>                     
                
              </p>
            </Link>
            <Link href="/privacy-security" passHref>
              <p>
                <a className="text-decoration-none text-success">Términos y condiciones</a>                     
                
              </p>
            </Link>

            
          </div>
        </div>     
      
    </div>
    <style jsx>
          {`
            footer {
              background-color: #ebf7f6;
            }

            a:hover {
              cursor: pointer;
            }
            @media (max-width: 576px){
              footer {
                padding:10px;
              }
            }
          `}
      </style>
  </footer>
)

export default Footer
