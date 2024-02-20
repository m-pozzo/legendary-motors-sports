import { Cars } from "./components/Cars/Cars"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"

export const App = () => {

    return (
        <div className="page_container">
            <Header></Header>
            <main className="main">
                <Cars></Cars>
            </main>
            <Footer></Footer>
        </div>
    )
}