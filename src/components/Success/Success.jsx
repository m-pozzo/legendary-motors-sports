import './success.css'
import { Link } from 'react-router-dom'

export const Success = () => {
  return (
    <div className='success'>
      <marquee behavior="" direction="" scrollamount="18">Vehículo comprado correctamente</marquee>
      <Link to='/'>
        <button className='back'>Volver al inicio</button>
      </Link>
    </div>
  )
}
