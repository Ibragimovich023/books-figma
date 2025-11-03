import React from "react";
import { Link } from "react-router-dom";

const TabMenu = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-7 mt-[42px] shadow-sm w-[288px] p-7 rounded-sm ">
          <div className="flex items-center gap-4">
            <Link to="/profile/obuna">Обуна бўлиш</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="e-xisob">Э-Хисоб</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="kitob">Китобларим</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="saved">Сақланганлар</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="sozlama">Созламалар</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabMenu;
