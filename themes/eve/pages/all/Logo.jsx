import React from "react";
import"./Logo.scss"
function Logo() {
  return (
    <div className="divLogo">
      <a href="/" className="logo">
        <img src="/eve.svg" alt="eve" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
