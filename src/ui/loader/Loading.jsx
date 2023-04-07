import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex__center" style={{ height: "80vh" }}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="black"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
