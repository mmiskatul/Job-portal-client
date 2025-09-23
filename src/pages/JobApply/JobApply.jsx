import React from 'react'
import { useParams } from 'react-router'

const JobApply = () => {
    const {id: jobId}=useParams();
    console.log(jobId);

  return (
    <div>
      <h3 className="txt-4xl">Apply job For </h3>
    </div>
  )
}

export default JobApply
