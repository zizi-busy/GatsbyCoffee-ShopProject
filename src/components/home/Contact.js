import React from 'react'
import Title from '../globals/Title'
import BackgroundImage from 'gatsby-background-image';

export default function Contact({ img, styleClass,children}) {
    return (
        <BackgroundImage className={styleClass} fluid={img}>
           <section className="contact-section py-5">
           <Title className="col text-center mb-3" title = "contact us" message="make a reservation" />
           <div className="col-6 col-sm-8 col-md-6 mx-auto">
               <form action="https://formspree.io/inka.zr@gmail.com"
                method="POST">
               {/* name */}
               <div className="form-group">
                   <label htmlFor="name">Name</label>
                   <input type="text" 
                   className="form-control"
                    name ="name"
                    id ="name"
                    placeholder = "Mark Smith"/> 
               </div>
               {/* email */}
               <div className="form-group">
                   <label htmlFor="email">E-mail</label>
                   <input type="text" 
                   className="form-control"
                    name ="email"
                    id ="email"
                    placeholder = "e-mail@email.com"/> 
               </div>
             {/* decsription */}
               <div className="form-group">
                   <label htmlFor="description">Description</label>
                   <textarea name="description " id="description" className="form-control" rows="5" placeholder="your description"/>

               </div>
                 {/* submit */}
                 <button type="submit" className="btn btn-yellow text-capitalize my-5  btn-block" >Submit</button>
               </form>
           </div>

           </section>
           </BackgroundImage>
    )
}
