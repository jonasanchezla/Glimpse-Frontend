import React from 'react'
import {Image} from './Image.js'

export const Images = ({images}) => {
    // console.log(images);
  return images.map((image)=>(
    <Image key={image.id} image={image}/>
  ))
}

export default Images