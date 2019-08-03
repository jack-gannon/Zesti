import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <svg>
        <g>
          <path
            className="loader-outer"
            d="M16,5c6.1,0,11,4.9,11,11s-4.9,11-11,11S5,22.1,5,16S9.9,5,16,5 M16,1C7.7,1,1,7.7,1,16s6.7,15,15,15
		s15-6.7,15-15S24.3,1,16,1L16,1z"
          />
        </g>
        <path
          className="loader-inner"
          d="M6.3,24.7C4.3,22.4,3,19.3,3,16c0-5,2.8-9.4,7-11.5C11.8,3.5,13.8,3,16,3"
        />
      </svg>
    </div>
  );
};

export default Loader;
