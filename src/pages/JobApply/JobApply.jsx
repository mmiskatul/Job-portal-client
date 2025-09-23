import React from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  const navigate=useNavigate();
  console.log(jobId, user);
  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const appilcations = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      resume,
    };
    axios
      .post("http://localhost:5002/applications", appilcations)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your Appilcation has been submited",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col  items-center min-h-96">
      <h3 className="txt-4xl">Apply job For </h3>
      <form onSubmit={handleApply}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border  p-10">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            name="linkedin"
            className="input"
            placeholder="LinkedIn Profile Url"
          />

          <label className="label">Github</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github Url"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume Link"
          />
          <input type="submit" value="Apply " className="btn btn-primary" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
