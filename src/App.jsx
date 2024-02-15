import { Cars } from "./components/Cars/Cars"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"

export const App = () => {

    return (
        <div className="page_container">
            <Header></Header>
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