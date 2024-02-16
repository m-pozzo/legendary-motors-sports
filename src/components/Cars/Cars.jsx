import {useFetchData} from '../hooks/useFetchData'

export const Cars = () => {

    const {cars} = useFetchData([])

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
    )
}
