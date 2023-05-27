import React from 'react'
import './Blog.scss'
import { getjob } from '../../Data'
import { Link } from 'react-router-dom'
const Blog = () => {
    return (
        <div className='blog-parent'>
            <div>
                <h1>Features Blog</h1>
            </div>
            <div className='card-grid'>


                {
                    getjob.map((item) => {
                        return (
                            <div className="card">
                                <img className="card-img-top" src={item.img} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </p>
                                    <Link to='' className='link'>
                                        Read More
                                    </Link>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog