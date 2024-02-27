import React from 'react'
import "./Image.scss";
const Image = ({src,alt,className,click}) => {

  return (
    <>
    <img src={src} alt={alt} className={`image-css ${className}`} onClick={click}  />
    </>
  )
}

export default Image