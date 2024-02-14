import { useEffect, useState } from "react"


export const Main = () => {

    const [cars, setCar] = useState([])

    async function getCarsData() {
        try {
            const response = await fetch('./src/JSON/cars.json')
            const data = await response.json()

            setCar(data)
            console.log(data)
        }
        catch (err) {
            console.error('The following error happend: ', err);
        }
    }

    useEffect(() => {
        getCarsData()
    }, [])

    return (
        <section className="cars_container">
            {
                cars.map(({ id, space, logo, name, price }) => {
                    return (
                        <article key={id} className="card">
                            <div className="top_card">
                                <img src="../src/assets/img/personDoor.png" alt="" className="door_person" />
                                <span className="space_number">{space}</span>
                            </div>
                            <div>
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
    )
}
