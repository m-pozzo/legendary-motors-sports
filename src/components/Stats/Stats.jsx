import { Rayas } from './Rayas'
import './stats.css'

export const Stats = ({speed, acc, breaking, trac}) => {



  return (
    <>
      <h3 className='stats_title'>ESTADÍSTICAS</h3>
      <article className='stats'>
        <ul>
          <li>Velocidad Máxima</li>
          <li>Aceleración</li>
          <li>Frenado</li>
          <li>Tracción</li>
        </ul>
        <ul>
        <Rayas porcentaje={speed}/>
        <Rayas porcentaje={acc}/>
        <Rayas porcentaje={breaking}/>
        <Rayas porcentaje={trac}/>
        </ul>
      </article>
    </>
  )
}
