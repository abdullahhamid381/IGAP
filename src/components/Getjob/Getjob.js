import React from 'react'
import './Getjob.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../../features/job/jobActions'
const Getjob = () => {

  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  
  React.useEffect(() => {

   if(jobs.jobs.length === 0){
    dispatch(getJobs({}));
   }

  }, [ dispatch, jobs.jobs.length ]);


  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',margin:'80px 0'}}>
        {
            jobs.jobs.map((item)=>
                    <div className="card" style={{ width: "18rem",margin:"20px 0" }}>
    {/* <img src={} className="card-img-top" alt="..." /> */}
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">
        {item.description}
      </p>
      <Link to={`/jobdetail/${item._id}`} className="btn btn-primary">
        View
      </Link>
    </div>
  </div>
                
            )
        }
    </div>
  
  )
}

export default Getjob