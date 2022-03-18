import React from 'react'

function Icon( { src, type } ) {


  return (
      <img src={src} width={`${type}px`} height={`${type}px`} />
  )
}

export default Icon