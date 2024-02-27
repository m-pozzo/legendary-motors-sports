import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Cars } from "./components/Cars/Cars";
import { CarDetail } from "./components/Cars/CarDetail";
import { Success } from "./components/Success/Success";
import { Routes, Route } from "react-router-dom";

export const App = () => {

    return (
        <div className="page_container">
            <Header></Header>
            <Routes>
                <Route exact path="/" element={<Cars></Cars>}></Route>
                <Route exact path="/:carId" element={<CarDetail></CarDetail>}></Route>
                <Route exact path="/success" element={<Success></Success>}></Route>
                <Route exact path="/success"></Route>
            </Routes>
            <Footer></Footer>
        </div>
    )
}