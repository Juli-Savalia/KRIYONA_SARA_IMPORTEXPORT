import React from "react";

const TopHeader = () => {
  return (
    <div className="h-100 bg-blue-600">
        <marquee
          behavior="scroll"
          className=" pb-2 pt-3 h-100 text-white font-semibold text-xs"
        >
          At EBIM, we’re thrilled to have you here! Whether you’re exploring our innovative solutions, learning about our services, or simply getting to know us better, we’re committed to making your experience exceptional. Dive in and discover how we can help you achieve your goals with our expertise and dedication.
        </marquee>
    </div>
  );
};

export default TopHeader;
