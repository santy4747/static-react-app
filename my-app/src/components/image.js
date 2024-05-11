import React from 'react'
import mainImage from '../images/image.jpg'

export default function Image(){
    return (
        <div className='container'>
            <img src={mainImage} className='display-image'/>
            <figcaption className='image-caption'>
                Denzel Washington
            </figcaption>
            <p className='job-desc'>
                Front-end developer
            </p>
            <a href='#' className='website-link'>Denzel's website</a>
        </div>
    )
}