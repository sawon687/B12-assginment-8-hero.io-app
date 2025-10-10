import useApp from "../../hook/usehook";
import {  useNavigate, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
import like from "../../assets/icon-review.png";
import Rechart from "../Rechart/Rechart";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AppsNotFound from "../AppsNotFound/AppsNotFound";
import Loading from "../Loading/Loading";

const CardDetails = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [appdetails,loading] = useApp();
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
    toast('cliked')
  };
  
  const navigate=useNavigate()

  if (!singleApp) return <div>
    <AppsNotFound/>
     <div className='flex justify-center -mt-26 mb-4'>
                   <button onClick={()=> navigate(-1)}  className=' btn py-6 mt-6 px-10 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Go Back </button>
                 </div>
  </div>;

  const { image, title, description, companyName, size, downloads, ratingAvg, reviews, ratings } =
    singleApp;

   

  return (
    <div className="md:w-11/12 mx-auto lg:w-[1300px] ">
      <div className="flex gap-10 flex-col md:flex-row pt-10 items-center border-b-2 border-gray-300 pb-2">
        <div className="bg-white   shadow-xl rounded-xl w-[300px] flex items-center justify-center h-[300px]">
          <figure className="flex justify-center items-center">
          <img  src={image} alt={title} />
        </figure>
        </div>
        <div>
          <div className=" flex-1 border-b-2 w-full  py-4 space-y-3 border-gray-300">
            <h1 className="text-3xl font-bold text-center md:text-start  text-[#001931]">{title}</h1>
            <h3 className="text-xl text-center md:text-start font-bold">
              Developed by {''}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-bold">
                {companyName}
              </span>
            </h3>
          </div>
          <div className="flex  flex-col md:flex-row  gap-20 space-y-5 pt-3">
            <div className=" mx-auto md:mx-0">
              <PiDownloadSimpleBold className="text-[#00d390] text-4xl" />
              <p className="text-gray-500">Downloads</p>
              <h1 className="text-4xl font-extrabold">{downloads}</h1>
            </div>
            <div className=" mx-auto md:mx-0">
              <FaStar className="text-[#ff8811] text-4xl" />
              <p className="text-gray-500">Rating</p>
              <h1 className="text-4xl font-extrabold">{ratingAvg}</h1>
            </div>
            <div className="mb-5 mx-auto md:mx-0">
              <img src={like} alt="" />
              <p className="text-gray-500">Reviews</p>
              <h1 className="text-4xl font-extrabold">{reviews}K</h1>
            </div>
          </div>

         <div className="flex justify-center md:justify-start items-center">
           <button
            onClick={handleInstall}
            disabled={isClicked}
            className="btn bg-[#00d390]  text-white"
          >
            {isClicked ? "Installed" : `Install Now (${size} MB)`}
          </button>
         </div>
        </div>
      </div>

      <div>
        <Rechart ratings={ratings}></Rechart>
      </div>
      <div className="py-20 text-xl mx-auto border-t-2 border-gray-300">
        <p className="pt-5">
          <span className="font-bold">Description:</span>{" "}
          <span className="text-gray-500">{description}</span>
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
