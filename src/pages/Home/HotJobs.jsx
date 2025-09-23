import React from "react";
import JobCard from "./JobCard";

const HotJobs = ({ jobs }) => {
  return (
    <div className="flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Jobs of the Day</h2>
      {jobs.length === 0 ? (
        <p className="text-xl text-gray-500">No jobs found today. Please check back later!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HotJobs;