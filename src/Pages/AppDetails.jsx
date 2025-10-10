import CardDetails from "../components/CardDetails/CardDetails.jsx"
import Loading from "../components/Loading/Loading.jsx";
import useApp from "../hook/usehook.js";

const AppDetails = () => {
          const [,loading]=useApp()
if(loading)
  {
    return <Loading/>
  }
    return (
        <div className='bg-gray-100'>
          
             <CardDetails></CardDetails>
        </div>
    );
};

export default AppDetails;