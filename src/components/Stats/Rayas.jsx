import React from 'react'

export const Rayas = ({porcentaje}) => {

    const rayasLlenas = porcentaje / 20;
  
    const renderRayas = () => {
      const rayas = [];
      for (let i = 0; i < 5; i++) {
        rayas.push(
          i <= rayasLlenas ? <span key={i} className='raya'></span>  : ""
        ); 
      }
      return rayas;
    };

  return (
    <li>{renderRayas()}</li>
  )
}
