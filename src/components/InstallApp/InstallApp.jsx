import React from "react";
import { FaStar } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";

const InstallApp = ({ app, handleUnstall }) => {
  return (
    <div className="flex items-center justify-between flex-col md:flex-row bg-white shadow-sm p-5 rounded-xl mb-4">
      <div className="flex items-center gap-6">
        <figure className="w-[140px] bg-gray-300 rounded-xl">
          <img src={app.image} alt={app.title} className="rounded-xl" />
        </figure>
        <div>
          <h1 className="text-xl font-bold">{app.title}</h1>
          <div className="flex gap-5">
            <h3 className="text-[#00D390] flex items-center gap-2">
              <PiDownloadSimpleBold /> {app.downloads}
            </h3>
            <h3 className="flex gap-1 items-center text-[#ff8811]">
              <FaStar /> {app.ratingAvg}
            </h3>
            <h3 className="flex gap-1 font-semibold text-gray-500">
              {app.size} <span>MB</span>
            </h3>
          </div>
        </div>
      </div>
      <button
        onClick={() =>handleUnstall(app.id)}
        className="btn bg-[#00d390] px-10 text-white"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallApp;
