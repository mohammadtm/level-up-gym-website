"use clinet";
import React, { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const override: CSSProperties = {
  display: "block",
};

const LoadingPage = () => {
  return (
    <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="animate-spin">
        <ClipLoader
          color="#EAB308"
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
        />
      </div>
    </div>
  );
};

export default LoadingPage;
