
import Ratingicon from '../../assets/icon-ratings.png'
import  Downloadicon  from '../../assets/icon-downloads.png';
import { Link } from 'react-router';
const Allcard = ({appdata}) => {
    console.log(appdata)
    const {id,downloads,image,ratingAvg,title}=appdata
    return (
        <Link to={`/AppDetails/${id}`}>
         <div className="card px-4 h-full  bg-base-100   shadow-sm">
          <figure className="px-3 mt-4 h-[300px]   bg-gray-200 flex justify-center items-center">
            <img 
              src={image}
              alt="Shoes"
              className="bg-gray-200  p-2 rounded"
            />
          </figure>
          <div className="py-5 space-y-4">
            <h1 className='font-bold'>{title}</h1>
            <div className="card-actions gap-10 justify-between">
              <button className="btn text-[#00D390] flex items-center gap-2">
                <img className='w-[20px]' src={Downloadicon} alt="" /> {downloads}
              </button>
              <button className="btn bg-[#FFF0E1] flex items-center gap-2">
                <img className='w-[20px]' src={Ratingicon} alt="" /> {ratingAvg}
              </button>
            </div>
          </div>
        </div>
        </Link>
    );
};

export default Allcard;