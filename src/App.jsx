import { useEffect, useState } from "react"

export const App = () => {

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
        <>
            <img src="./src/assets/img/LegendaryMotorsport-GTAV-Logo.webp" alt="" className="click" />
            {
            cars.map(car => {
                return (
                    <article key={car.id}>
                        <div className="top_card">
                            <img src="../src/assets/img/personDoor.png" alt="" className="door_person" />
                            <span>{car.space}</span>
                        </div>
                            <img src={car.logo} alt={car.name} className="img_car" />
                        <div>
                        <h2>{car.name}</h2>
                        <p>${car.price.toLocaleString()}</p>
                        </div>
                    </article>
                )})
            }
        </>
    )
}