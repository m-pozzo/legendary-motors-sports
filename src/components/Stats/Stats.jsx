import { Rayas } from './Rayas'
import './stats.css'

export const Stats = ({ speed, acc, breaking, trac }) => {



  return (
    <>
      <h3 className='stats_title'>ESTADÍSTICAS</h3>
      <article className='stats'>
        <ul className='list_stats'>
          <li className='stats_type'>Velocidad Máxima</li>
          <li className='stats_type'>Aceleración</li>
          <li className='stats_type'>Frenado</li>
          <li className='stats_type'>Tracción</li>
        </ul>
        <ul className='list_stats'>
          <Rayas porcentaje={speed} />
          <Rayas porcentaje={acc} />
          <Rayas porcentaje={breaking} />
          <Rayas porcentaje={trac} />
        </ul>
      </article>
    </>
  )
}
