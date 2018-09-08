import React from "react";
import loading from "./assets/loading.gif";

export default () => {
  return (
    <div>
      <img src={loading} alt="loading..." className="loading" />
    </div>
  );
};
