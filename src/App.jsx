import { Cars } from "./components/Cars/Cars"
import { Footer } from "./components/Footer/Footer"

export const App = () => {

    return (
        <div className="page_container">
            <header className="header">
                <section className="content_header_container">
                    <img src="./src/assets/img/LegendaryMotorsport-GTAV-Logo.webp" alt="" className="logo" />
                    <p className="text_top">ELEGÍ ENTRE NUESTROS ALTOS DEPORTIVOS</p>
                    <p className="text_top">DE ALTA GAMA A GRANDES PRECIOS</p>
                </section>
            </header>
            <main className="main">
                <section className="top_main">
                    <h3>NOVEDADES</h3>
                    <button className="btn_sort_price"><span>Ordenar por precio</span><span>-</span></button>
                </section>
                <Cars></Cars>
            </main>
            <Footer></Footer>
        </div>
    )
}