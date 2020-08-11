import React from 'react'

const Title = ({title, className, message}) => {
    return (
        <div  className="row ">
       {/*  <div className="col text-center mb-3"> */}
       {/* <div className="col-10 col-sm-8 mx-auto mb-3"> */}
       <div className={className} >

        <h1 className='display-4 text-capitalize font-weight-regular mt-3 mb-1'>{title}</h1>
     
        <h6 className="message text-uppercase">{message}</h6>
      {/*   <div className="underline" /> */}
        </div>

           
        </div>
    )
}

export default Title
