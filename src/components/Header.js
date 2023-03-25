import React from "react";

const Header = ({ usdValue, eurValue }) => {
  return (
    <div className="header">
      <h1>{`USD = ${usdValue}`}</h1>
      <h1>{`EUR = ${eurValue}`}</h1>
    </div>
  );
};

export default Header;
