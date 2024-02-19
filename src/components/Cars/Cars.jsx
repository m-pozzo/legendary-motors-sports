export const Cars = ({ cars }) => {
    return (
        <section className="cars_container">
            {
                cars.map(car => {
                    return (
                        <article key={car.id} className="card">
                            <div className="top_card">
                                <img src="../src/assets/img/personDoor.png" alt="" className="door_person" />
                                <span className="space_number">{car.space}</span>
                            </div>
                            <div className="car_img_container">
                                <img src={car.logo} alt={car.name + " photo"} className="car_img" />
                            </div>
                            <div className="bottom_card">
                                <h2 className="car_name">{car.name}</h2>
                                <p className="car_price">${car.price.toLocaleString()}</p>
                            </div>
                        </article>
                    )
                })
            }
        </section>
    )
}
