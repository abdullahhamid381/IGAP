import React from 'react'
import './Getjob.scss'
import { getjob } from '../../Data'
const Getjob = () => {
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',margin:'80px 0'}}>
        {
            getjob.map((item)=>{
                return(
                    <div className="card" style={{ width: "18rem",margin:"20px 0" }}>
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
                )
            })
        }
    </div>
  
  )
}

export default Getjob