import useApp from "../../hook/usehook";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
import like from "../../assets/icon-review.png";
import Rechart from "../Rechart/Rechart";
import { useState, useEffect } from "react";

const CardDetails = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [appdetails] = useApp();
  const { id } = useParams();

  const singleApp = appdetails.find((app) => app.id === parseInt(id));

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("InstalledApps")) || [];
    const alreadyInstalled = saved.some((app) => app.id === parseInt(id));
    setIsClicked(alreadyInstalled);
  }, [id]);

  const handleInstall = () => {
    const saved = JSON.parse(localStorage.getItem("InstalledApps")) || [];
    const isDuplicate = saved.some((p) => p.id === singleApp.id);
    if (isDuplicate) return alert("Already installed!");

    const updatedList = [...saved, singleApp];
    localStorage.setItem("InstalledApps", JSON.stringify(updatedList));
    setIsClicked(true);
  };

  if (!singleApp) return <h1 className="text-center">Loading...</h1>;

  const { image, title, description, companyName, size, downloads, ratingAvg, reviews, ratings } =
    singleApp;

  return (
    <div className="px-20">
      <div className="flex gap-10 items-center border-b-2 border-gray-300 pb-2">
        <figure className="bg-white w-[350px] flex items-center h-[300px]">
          <img src={image} alt={title} />
        </figure>
        <div>
          <div className="border-b-2 w-[1200px] py-4 border-gray-300">
            <h1 className="text-3xl font-bold text-[#001931]">{title}</h1>
            <h3 className="text-xl font-bold">
              Developed by{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-bold">
                {companyName}
              </span>
            </h3>
          </div>
          <div className="flex gap-20 space-y-5 pt-3">
            <div>
              <PiDownloadSimpleBold className="text-[#00d390] text-4xl" />
              <p className="text-gray-500">Downloads</p>
              <h1 className="text-4xl font-extrabold">{downloads}</h1>
            </div>
            <div>
              <FaStar className="text-[#ff8811] text-4xl" />
              <p className="text-gray-500">Rating</p>
              <h1 className="text-4xl font-extrabold">{ratingAvg}</h1>
            </div>
            <div className="mb-5">
              <img src={like} alt="" />
              <p className="text-gray-500">Reviews</p>
              <h1 className="text-4xl font-extrabold">{reviews}K</h1>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isClicked}
            className="btn bg-[#00d390] text-white"
          >
            {isClicked ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div>
        <Rechart ratings={ratings}></Rechart>
      </div>
      <div className="mt-20 text-xl mx-auto border-t-2 border-gray-300">
        <p className="pt-5">
          <span className="font-bold">Description:</span>{" "}
          <span className="text-gray-500">{description}</span>
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
