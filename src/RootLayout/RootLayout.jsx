import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import useApp from '../hook/usehook';
import Loading from '../components/Loading/Loading';
import "react-toastify/dist/ReactToastify.css";
const RootLayout = () => {
 const [,loading]=useApp()
  if(loading)
  {
    return <Loading></Loading>
  }
    return (
        < >
        
        
             <div>
                <Navbar></Navbar>
             <div className='min-h-screen bg-gray-100 '>     
              <Outlet />
              
           </div>
            <Footer></Footer>
            </div> 
        
              <ToastContainer position="top-center"  autoClose={2000} />
        
            
        </>)
};

export default RootLayout