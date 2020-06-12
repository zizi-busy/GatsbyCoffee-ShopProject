import React from 'react'
import Title from '../globals/Title'

export default function Contact() {
    return (
        <div>
           <section className="contact-section py-5">
           <Title title = "contact us"/>
           <div className="col-10 col-sm-8 col-md-6 mx-auto">
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
                 <button type="submit" className="btn btn-yellow text-capitalize mt-5  btn-block" >Submit</button>
               </form>
           </div>

           </section>
        </div>
    )
}
