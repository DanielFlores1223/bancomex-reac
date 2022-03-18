function Icon( { src, type } ) {


  return (
      <img src={src} width={`${type}px`} height={`${type}px`} alt='prueba' />
  )
}

export default Icon