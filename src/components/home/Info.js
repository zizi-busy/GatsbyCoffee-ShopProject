import React from 'react'
import { Link} from 'gatsby'
import Title from '../globals/Title'


export default function Info() {
    return (
        <section className="py-5">
            <div className='container'>
             <Title title="Penny's story"/>

                    <div className="row">
                        <div className="col-10 col-sm-8 mx-auto text-center">
                         <p className="lead text-muted mb-5">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. quos esse nam repudiandae deleniti fuga ducimus quidem laborum excepturi aut maxime, id sequi laudantium perferendis officiis odio labore aliquam! Aperiam ullam ratione voluptas! Quam consequatur dolore ipsam rem ratione. Illum magni velit ut illo, delectus eligendi obcaecati quis aperiam ipsa voluptatum. Porro sequi itaque, possimus ea nesciunt quidem iure est ullam ex. Minus.
                         </p>
                         <Link to="/about">
                             <button className="btn text-uppercase btn-gold">About page</button>
                         </Link>
                        </div>
                    </div>
                </div>

        </section>
    )
}
