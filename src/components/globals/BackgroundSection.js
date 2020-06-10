import React from 'react'
import BackgroundImage from 'gatsby-background-image'


export default function BackgroundSection({
    img, 
    styleClass,
    title1,
    title2,
    sub,
    children
}) {
    return (
       <BackgroundImage className={styleClass} fluid = {img}>
     <div class="overlay">
            <div class="content">
              <h1 className='title text-white text-left display-2 font-weight-bold text-responsive'>
                {title1}<br/>{title2}
              </h1>     
              <h3 className="mt-4 text-white ">{sub}</h3> 
                {children}
                </div>         
                </div>         
       </BackgroundImage>
    )
}

BackgroundSection.defaultProps= {
    title: 'default-title',
    styleClass: 'default-background'
}
