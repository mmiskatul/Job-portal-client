import { Link, useNavigate } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import { PiSuitcaseSimpleThin } from "react-icons/pi";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const {
    _id,
    title,
    location,
    jobType,
    category,
    company,
    company_logo,
    requirements,
  } = job;

  return (
    <div >
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
          <div className="flex  gap-4">
            <div className="flex items-center gap-2">
              <PiSuitcaseSimpleThin className="size-5" />{" "}
              <span className="">{jobType}</span>
            </div>
            <span className="badge badge-outline">{category}</span>
          </div>
          <div className="py-2">
            <div className="grid grid-cols-2 items-center gap-4">
              {requirements?.map((req, index) => (
                <div key={index} className="border p-2 rounded">
                  {req.length > 10 ? req.slice(0, 10) + "..." : req}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div onClick={() => navigate(`/jobs/${_id}`)} className="card-actions">
          <button className="btn btn-primary">Show Details </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
