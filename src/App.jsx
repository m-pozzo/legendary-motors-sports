import { Cars } from "./components/Cars/Cars"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { cars } from './JSON/cars.json'

export const App = () => {


    const sortCars = () => {
        console.log(cars)
        const autosOrdenados = [...cars].sort((a, b) => a.price - b.price)
        console.log(autosOrdenados)
    }

    return (
        <div className="page_container">
            <Header></Header>
            <main className="main">
                <section className="top_main">
                    <h3>NOVEDADES</h3>
                    <button className="btn_sort_price" onClick={sortCars}><span>Ordenar por precio</span><span>-</span></button>
                </section>
                <Cars cars={cars}></Cars>
            </main>
            <Footer></Footer>
        </div>
    )
}