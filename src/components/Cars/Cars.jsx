import { useFetchData } from '../hooks/useFetchData'
import { useState } from 'react'

export const Cars = () => {

    const { cars, setCar } = useFetchData([])

    const [filter, setFilter] = useState(true)

    const sortCars = () => {
        if (filter) {
            let sortedCars = [...cars].sort((a, b) => a.price - b.price);
            setFilter(false)
            setCar(sortedCars)
        } else {
            let sortedCars = [...cars].sort((a, b) => b.price - a.price);
            setFilter(true)
            setCar(sortedCars)
        }
    }


    return (
        <>
            <section className="top_main">
                <h3>NOVEDADES</h3>
                <button className="btn_sort_price" onClick={sortCars}><span>Ordenar por precio</span><span>-</span></button>
            </section>
            <section className="cars_container">
                {
                    cars.map(({ id, space, logo, name, price }) => {
                        return (
                            <article key={id} className="card">
                                <div className="top_card">
                                    <img src="../src/assets/img/personDoor.png" alt="" className="door_person" />
                                    <span className="space_number">{space}</span>
                                </div>
                                <div className="car_img_container">
                                    <img src={logo} alt={name + " photo"} className="car_img" />
                                </div>
                                <div className="bottom_card">
                                    <h2 className="car_name">{name}</h2>
                                    <p className="car_price">${price.toLocaleString()}</p>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
        </>
    )
}
