import React from "react";
import "./MainBanner.scss";
function MainBanner() {
  return (
    <div className="main-banner-home flex items-center">
      <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-2 pageWidth">
        <div className="text-center md:text-left px-2 divContainer">
          <h2 className="h1">Bienvenidos</h2>
          <p className="slogan">Tejiendo tus sueños con alegría y muchos colores</p>
          <a className="button button-primary botonShowNow" href="#">
            SHOW NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};
