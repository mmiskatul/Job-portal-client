import JobCard from "./JobCard";

const HotJobs = ({ jobs }) => {
  return (
    <div className="flex flex-col items-center"> 
        <h2 className="text-4xl font-bold py-10">Jobs of the day</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
