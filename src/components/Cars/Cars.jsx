import carsData from '../../JSON/cars.json'
import { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import './car.css'

export const Cars = () => {

    const [cars, setCars] = useState(carsData)
    const [filter, setFilter] = useState(true)
    const containerRef = useRef(null)

    function ScrollToTopOnMount() {
        React.useEffect((e) => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    }

    const sortCars = () => {
        const sortedCars = filter
            ? [...cars].sort((a, b) => a.price - b.price)
            : [...cars].sort((a, b) => b.price - a.price);

        setCars(sortedCars);
        setFilter(!filter);
    }

    useEffect(() => {
        const cards = containerRef.current.querySelectorAll('.card')

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.1 })

        cards.forEach(card => observer.observe(card))

        return () => {
            cards.forEach(card => observer.unobserve(card))
        }
    }, [cars])

    return (
        <main className='main'>
            <section className="top_main">
                <h3>NOVEDADES</h3>
                <button className="btn_sort_price" onClick={sortCars}><span>Ordenar por precio</span><span>-</span></button>
            </section>
            <section className="cars_container" ref={containerRef}>
                {
                    cars.map(({ id, space, photo, name, brand, price }) => {
                        return (
                            <article key={id} className="card">
                                <div className="top_card">
                                    <img src="/assets/img/personDoor.png" alt="" className="door_person" />
                                    <span className="space_number">{space}</span>
                                </div>
                                <div className="car_img_container">
                                    <Link to={`/${id}`} onClick={ScrollToTopOnMount}>
                                        <img src={photo} alt={name + " photo"} className="car_img" />
                                    </Link>
                                </div>
                                <div className="bottom_card">
                                    <h2 className="car_name">{brand} {name}</h2>
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
