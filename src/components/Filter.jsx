import React from "react";
import { Link } from "react-router-dom";

function Filter() {
  return (
    <>
      <div className="mt-2 text-center mt-4 mx-auto d-flex justify-content-center gap-4">
        <Link to={"/all"} className="btn btn-light ">
          All
        </Link>
        <Link to={"/completed"} className="btn btn-light">
          Completed
        </Link>
        <Link to={"/active"} className="btn btn-light ">
          Active
        </Link>
      </div>
    </>
  );
}
export default Filter