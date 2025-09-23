import React, { use } from "react";
import ApplicationRow from "./ApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div>
      <h3>Jobs Applied so far :{applications.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                applications.map((apply,index)=>
                    <ApplicationRow apply={apply} index={index} key={apply._id}></ApplicationRow>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
