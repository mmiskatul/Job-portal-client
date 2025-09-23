import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch job details from API
    fetch(`http://localhost:5002/jobs`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch job details");
        }
        return res.json();
      })
      .then((data) => {
        const foundJob = data.find((job) => job._id === id);
        if (foundJob) {
          setJob(foundJob);
        } else {
          setError("Job not found");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
        <p className="ml-4 text-xl text-gray-700">Loading job details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline ml-2">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl w-full">
        {/* Header Section */}
        <div className="border-b pb-4 mb-4">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-1 leading-tight">{job.title}</h1>
          <h2 className="text-2xl text-indigo-600 font-semibold">{job.company}</h2>
          <p className="text-gray-500 text-lg mt-1">{job.location} | {job.jobType} | {job.category}</p>
        </div>
        
        {/* Main Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Description and Salary */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Job Description</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{job.description}</p>
            {job.salaryRange && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-lg font-bold text-green-700">
                  <span role="img" aria-label="money">💰</span> Salary:{" "}
                  <span className="font-semibold">{job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}</span>
                </p>
              </div>
            )}
          </div>
          
          {/* Requirements & Responsibilities */}
          <div>
            {job.requirements && job.requirements.length > 0 && (
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Key Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Main Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                  {job.responsibilities.map((res, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-indigo-500">●</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* HR Contact and Apply Button Section */}
        <div className="border-t pt-6 mt-8 flex flex-col items-center">
          <p className="text-gray-600 text-base">
            For more details, please contact:
          </p>
          <p className="text-lg font-medium text-gray-800 mb-6">
            <span role="img" aria-label="person">👤</span> **{job.hr_name}**
            <span className="mx-2">|</span>
            <span role="img" aria-label="email">📧</span> Email: <a href={`mailto:${job.hr_email}`} className="text-indigo-600 hover:text-indigo-800 font-semibold">{job.hr_email}</a>
          </p>

          {/* Apply Button at the Bottom */}
          { (
            <NavLink 
              href={job.applicationLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform duration-200 hover:scale-105"
            >
              Apply Now
              <svg className="ml-2 -mr-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;