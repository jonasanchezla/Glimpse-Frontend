import React from 'react'

export const Image = ({image}) => {
  return (
    <div className=''>
        <img src={image.urls.small} alt="unsplash images"/>
    </div>
  )
}
