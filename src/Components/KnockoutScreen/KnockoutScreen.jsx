import React from "react";
import "./KnockoutScreen.scss";

const KnockoutScreen = ({ error }) => {
  return (
    <div>
      <p className="errorMessage">An error has occurred: {error.message}</p>
      <p className="errorAction">Please try again later.</p>
    </div>
  );
};

export default KnockoutScreen;
