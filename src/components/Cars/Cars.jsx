import carsData from '../../JSON/cars.json'
import { useState } from 'react'
import { Link } from "react-router-dom";

export const Cars = () => {

    const [cars, setCars] = useState(carsData)
    const [filter, setFilter] = useState(true)

    const sortCars = () => {
        const sortedCars = filter
            ? [...cars].sort((a, b) => a.price - b.price)
            : [...cars].sort((a, b) => b.price - a.price);

        setCars(sortedCars);
        setFilter(!filter);
    }


    return (
        <main className='main'>
            <section className="top_main">
                <h3>NOVEDADES</h3>
                <button className="btn_sort_price" onClick={sortCars}><span>Ordenar por precio</span><span>-</span></button>
            </section>
            <section className="cars_container">
                {
                    cars.map(({ id, space, photo, name, price }) => {
                        return (
                            <article key={id} className="card">
                                <div className="top_card">
                                    <img src="../src/assets/img/personDoor.png" alt="" className="door_person" />
                                    <span className="space_number">{space}</span>
                                </div>
                                <div className="car_img_container">
                                    <Link to={`/${id}`}>
                                        <img src={photo} alt={name + " photo"} className="car_img" />
                                    </Link>
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
        </main>
    )
}
