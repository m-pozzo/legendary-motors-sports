import { useParams } from "react-router-dom"
import { Cars } from './Cars'
import { Colors } from '../Colors/Colors'
import { Stats } from '../Stats/Stats'
import cars from '../../JSON/cars.json'
import './cars.css'

export const CarDetail = () => {

  const { carId } = useParams()
  console.log(cars)
  const thisCar = cars.find(car => car.id === parseInt(carId))

  return (
    <>
      <section className='main'>
        <article className="top">
          <img src={thisCar.logo} alt='logo del vehículo' />
          <h1 className="car_title">{thisCar.name}</h1>
        </article>
        <article className="bottom">
          <div className="bottom_left">
            <img src={thisCar.mosaico} alt={"Fotos de " + thisCar.name} />
          </div>
          <div className="bottom_right">
            <div className="description_container">
              <p>{thisCar.description}</p>
            </div>
            <div className="color_container">
              <Colors></Colors>
            </div>
            <div className="stats_container">
              <Stats></Stats>
              <button className="buy_btn" id="buyBtn" disabled>Comprar</button>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
