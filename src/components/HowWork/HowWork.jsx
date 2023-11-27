import React from "react";
import './HowWork.css'

export const HowWork = () => {
  return (
    <div className="container">
      <div className="modern-inter-heading">Como trabaja SkyScape</div>
      <div className="copy-component">
        <div className="text-wrapper">1</div>
        <div className="frame">
          <div className="modern-inter-text">Primer paso</div>
          <p className="div">Crea tu perfill y regístrate</p>
        </div>
      </div>
      <div className="copy-component">
        <div className="text-wrapper">2</div>
        <div className="frame">
          <div className="modern-inter-text">Segundo paso</div>
          <p className="div">Explora las opciones y establece tus preferencias</p>
        </div>
      </div>
      <div className="copy-component">
        <div className="text-wrapper">3</div>
        <div className="frame">
          <div className="modern-inter-text">Tercer paso</div>
          <p className="div">Comience su aventura al aire libre con SkyScape.</p>
        </div>
      </div>
    </div>
  );
};

export default HowWork