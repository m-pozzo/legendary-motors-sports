import { useParams } from "react-router-dom"
import { Stats } from '../Stats/Stats'
import { useState } from "react"
import { Link } from "react-router-dom"
import cars from '../../JSON/cars.json'
import './detail.css'

export const CarDetail = () => {

  const { carId } = useParams()
  const thisCar = cars.find(car => car.id === parseInt(carId))

  const [color, setColor] = useState(null)
  const [disabledBtn, setDisabledBtn] = useState(true)

  const handleClick = (item) => {
    setColor(item)
    setDisabledBtn(false)
  }
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
              <h3 className="color_title">ELEGIR COLOR PARA COMPRAR</h3>
              <div className="color_type_container">
                <span
                  className={`color_type ${color == "color1" ? 'selected' : ''}`}
                  onClick={() => handleClick('color1')}>
                </span>
                <span
                  className={`color_type ${color == "color2" ? 'selected' : ''}`}
                  onClick={() => handleClick('color2')}>

                </span>
                <span
                  className={`color_type ${color == "color3" ? 'selected' : ''}`}
                  onClick={() => handleClick('color3')}>
                </span>
                <span
                  className={`color_type ${color == "color4" ? 'selected' : ''}`}
                  onClick={() => handleClick('color4')}>
                </span>
                <span
                  className={`color_type ${color == "color5" ? 'selected' : ''}`}
                  onClick={() => handleClick('color5')}>
                </span>
                <span
                  className={`color_type ${color == "color6" ? 'selected' : ''}`}
                  onClick={() => handleClick('color6')}>
                </span>
                <span
                  className={`color_type ${color == "color7" ? 'selected' : ''}`}
                  onClick={() => handleClick('color7')}>
                </span>
                <span
                  className={`color_type ${color == "color8" ? 'selected_black' : ''}`}
                  onClick={() => handleClick('color8')}></span>
              </div>
            </div>
            <div className="stats_container">
              <Stats
                speed={thisCar.stats.speed}
                acc={thisCar.stats.acceleration}
                breaking={thisCar.stats.breaking}
                trac={thisCar.stats.traction}
              />
              <Link to={disabledBtn ? '#' : '/success'}>
                <button className={`${disabledBtn ? 'disabled' : 'buy_btn'}`} {...disabledBtn ? null : 'disabled'}>Comprar</button>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
