import React, { useContext, useState } from "react";

import DarkMode from "../helpers/DarkMode";

export default function Photo({ photo }) {
  const { title, url } = photo;
  const dark = useContext(DarkMode);
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  console.log(modal);
  return (
    <>
      <div className="onePhoto" onClick={openModal}>
        <div className="imgDiv">
          <h4 className={`photoTitle ${dark ? "dark" : "light"}`}>{title}</h4>
          <img src={url} alt={title} className="photoImg" />
        </div>
      </div>
      {modal && (
        <div id="mainModal" onClick={(e) => setModal(false)}>
          <div className="childModal" onClick={(e) => e.stopPropagation()}>
            <h4 className={`modalTitle ${dark ? "dark" : "light"}`}>{title}</h4>
            <div className="modalImg">
              <img src={url} alt={title} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
