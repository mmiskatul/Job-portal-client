import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import HotJobs from './HotJobs'

const Home = () => {
  const [jobs,setJobs]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5002/jobs').then(res=>res.json()).then(data=>{
      setJobs(data);
    })
  },[])
  
  return (
    <div>
        <Banner/>
        <HotJobs jobs={jobs}/>
    </div>
  )
}

export default Home