export const Rayas = ({ porcentaje }) => {

  const rayasLlenas = porcentaje / 20;
  const rayaDecimal = rayasLlenas % 1.5;
  const rayaRedondeada = rayaDecimal.toFixed(1);

  function tieneParteDecimal(numero) {
    const numeroComoString = numero.toString();
    const tienePunto = numeroComoString.includes('.');

    if (tienePunto) {
      const partes = numeroComoString.split('.');
      const parteDecimal = partes[1];
      return parteDecimal.length > 0;
    }

    return false;
  }

  const numeroDecimal = tieneParteDecimal(rayaDecimal)

  const renderRayas = () => {
    const rayas = [];
    for (let i = 0; i < 5; i++) {
      if (i === Math.floor(rayasLlenas)) {
        rayas.push(
          <span
            key={i}
            className='raya'
            style={rayaRedondeada > 0 ? { width: rayaRedondeada * 20 + "px", marginRight: -rayaRedondeada * 20 + "px" } : {}}>
          </span>
        );
      } else {
        rayas.push(
          <span key={i} className={i < Math.floor(rayasLlenas) ? 'raya' : 'raya_vacia'}>
          </span>
        );
      }
    }
    if (numeroDecimal) {
      rayas.push(<span className='raya_vacia'></span>);
      if (porcentaje >= 100) {
        rayas.pop()
      }
    }

    return rayas;
  };


  return (
    <li>{renderRayas()}</li>
  )
}
