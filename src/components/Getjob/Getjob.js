import React from 'react'
import './Getjob.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../../features/job/jobActions'
import Banner from '../Homepage/Banner'
const Getjob = () => {

  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  
  React.useEffect(() => {

   if(jobs.jobs.length === 0){
    dispatch(getJobs({}));
   }

  }, [ dispatch, jobs.jobs.length ]);


  return (
  <div className='getjob-parent'>
    <Banner/>
    <div>
      <center><h1>View All Jobs</h1></center>
    </div>
      <div>
        {
            jobs.jobs.map((item)=>
                    <div className="card" >
    {/* <img src={} className="card-img-top" alt="..." /> */}
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">
        {item.description}
      </p>
     <div style={{display:'flex' ,gap:'40px '}}>
       <p>Days: ( ) </p>
       <p>Budget: ( )</p>
     </div>
     <div style={{display:'flex' ,gap:'40px '}}>
       <p>Cata: ( ) </p>
       <p>Subcata: ( )</p>
     </div>
     <div style={{marginTop:'20px '}}>
 <Link to={`/jobdetail/${item._id}`} style={{background:'rgb(255, 91, 55)',color:'white',textDecoration:'none',padding:'10px 20px',borderRadius:'5px',}}>
        View
      </Link>
     </div>
    </div>
  </div>
                
            )
        }
    </div>
  </div>
  
  )
}

export default Getjob