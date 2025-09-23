import React from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(jobId, user);
    const handleApply=(e)=>{
        e.preventDefault
        const form =e.target;
        const linkedin =form.linkedin.value;
        const github =form.github.value;
        const resume =form.resume.value;
        const appilcations={
            jobId,
            applicant :user.email,
            
        }

    
    }
  return (
    <div className="flex flex-col  items-center min-h-96">
      <h3 className="txt-4xl">Apply job For </h3>
      <form onSubmit={handleApply}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border  p-10">
          <label className="label">LinkedIn Link</label>
          <input type="url" name="linkedin" className="input" placeholder="LinkedIn Profile Url" />

          <label className="label">Github</label>
          <input type="url" name="github" className="input" placeholder="Github Url" />

          <label className="label">Resume Link</label>
          <input type="url" name="resume" className="input" placeholder="Resume Link" />
          <input type="submit" value="Apply " className="btn btn-primary" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
