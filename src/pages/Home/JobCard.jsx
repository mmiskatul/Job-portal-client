import { Link, useNavigate } from "react-router";
import { CiLocationOn } from "react-icons/ci";

const JobCard = ({ job }) => {
    const navigate =useNavigate();
  const { _id, title, location, jobType, category, company, company_logo } = job;

  return (
    <button onClick={() => navigate(`/jobs/${_id}`)}>
      <div className="card bg-base-100 shadow-md border rounded-lg p-20 flex flex-col items-start gap-4 hover:shadow-lg transition">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 object-contain rounded"
        />

        <div className="flex flex-col items-start gap-5">
          <h2 className="text-2xl font-bold">{title}</h2>
          <h3 className="text-gray-600">{company}</h3>
          <div className="flex items-center gap-3 text-gray-500">
            <CiLocationOn className="text-lg" />
            <span>{location}</span>
          </div>
          <span className="badge badge-outline">{jobType}</span>
          <span className="badge badge-outline">{category}</span>
        </div>
      </div>
    </button>
  );
};

export default JobCard;
