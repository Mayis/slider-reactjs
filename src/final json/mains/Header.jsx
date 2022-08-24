import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";

import DarkMode from "../helpers/DarkMode";
export default function Header(props) {
  const dark = useContext(DarkMode);
  const back = useNavigate();
  const toDark = () => {
    props.toDark();
  };

  return (
    <header id="header" className={dark ? "lightBgr" : "darkBgr"}>
      <div id="backDiv" className={dark ? "lightBack" : "darkBack"}>
        <p className="backP" onClick={() => back(-1)}>
          BACK
        </p>
      </div>
      <div id="modeDiv">
        <div className="toggleWrapper">
          <input type="checkbox" className="dn" id="dn" />
          <label onClick={toDark} htmlFor="dn" className="toggle">
            <span className="toggle__handler">
              <span className="crater crater--1"></span>
              <span className="crater crater--2"></span>
              <span className="crater crater--3"></span>
            </span>
            <span className="star star--1"></span>
            <span className="star star--2"></span>
            <span className="star star--3"></span>
            <span className="star star--4"></span>
            <span className="star star--5"></span>
            <span className="star star--6"></span>
          </label>
        </div>
      </div>
    </header>
  );
}
