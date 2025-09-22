import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // fetch job details from API
    fetch(`http://localhost:5002/jobs`)
      .then((res) => res.json())
      .then((data) => {
        const foundJob = data.find((job) => job._id === id);
        setJob(foundJob);
      });
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <h2 className="text-xl mb-1">{job.company}</h2>
      <p className="text-gray-600 mb-2">{job.location} | {job.jobType} | {job.category}</p>

      <h3 className="font-semibold mt-4">Description:</h3>
      <p>{job.description}</p>

      {job.salaryRange && (
        <p className="mt-2">
          <strong>Salary:</strong> {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
        </p>
      )}

      {job.requirements && job.requirements.length > 0 && (
        <div className="mt-2">
          <h3 className="font-semibold">Requirements:</h3>
          <ul className="list-disc list-inside">
            {job.requirements.map((req, index) => <li key={index}>{req}</li>)}
          </ul>
        </div>
      )}

      {job.responsibilities && job.responsibilities.length > 0 && (
        <div className="mt-2">
          <h3 className="font-semibold">Responsibilities:</h3>
          <ul className="list-disc list-inside">
            {job.responsibilities.map((res, index) => <li key={index}>{res}</li>)}
          </ul>
        </div>
      )}

      <p className="mt-4 text-gray-500">
        HR: {job.hr_name} | Email: {job.hr_email}
      </p>
    </div>
  );
};

export default JobDetails;
