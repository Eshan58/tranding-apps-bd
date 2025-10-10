import React, { useEffect, useState } from 'react';
import useApps from '../hooks/useInstallation';
import Loading from '../pages/Loading/LoadingN';
import { toast } from 'react-toastify';
import { FiDownload } from "react-icons/fi";
import { CiStar } from "react-icons/ci";


const Installation = () => {

    const [install, setInstall] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');



    useEffect(()=> {
        const savedList = JSON.parse(localStorage.getItem('installation'))
        if(savedList){
            setInstall(savedList)
        }
    },[]);


const { loading, error }  =useApps();
        if(loading){
        return <Loading/>;
       }
        if(error){
        return <ErrorPage/>
       }

    const sortedItem = (
        ()=> {
        if(sortOrder === 'size-asc'){
            return [...install].sort((a, b)=> a.size - b.size)
        }else if(sortOrder === 'size-dsc'){
             return [...install].sort((a, b)=> b.size - a.size)
        }else{
           return install
        }
    }
    )();


    const handleRemove = (id)=>{
         const existinglist = JSON.parse(localStorage.getItem('installation'))
        let updatedList = existinglist.filter(a => a.id !== id );
        
        setInstall(updatedList);
       toast.success("App uninstalled successfully!")
 
        localStorage.setItem("installation", JSON.stringify(updatedList));

    }


    return (
        <div className='bg-[#F5F5F5] py-20'>
         
                <div className='text-center space-y-3 py-10'>
                    <div className='text-center space-y-3'>
                        <h2 className='text-[#001931] text-5xl font-bold'>Your Installed Apps</h2>
                        <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
                    </div>
                </div>

                <div className='flex justify-between items-center mb-10 px-2'>
                    <div>
                        <h6 className='font-semibold'>(<span>{install.length}</span>) Apps Found</h6>
                    </div>
                    <div>
                        <select
  value={sortOrder}
  onChange={(e) => setSortOrder(e.target.value)}
  className="select"
>
  <option value="none" disabled>Sort By Size</option>
  <option value="size-dsc">High–Low</option>
  <option value="size-asc">Low–High</option>
</select>
                    </div>
                </div>

                
                <div className='card-container space-y-3'>

                {
                sortedItem.length === 0 ? (
  <h1 className='text-[#001931] font-semibold text-3xl text-center py-10'>
    No Installed Apps Found
  </h1>
) : (
  sortedItem.map((a, index) => (
    <div key={a.id || index} className='flex justify-between items-center gap-5 flex-wrap bg-white rounded-lg p-4'>
      <div className='flex items-center gap-5'>
        <figure className='w-20 rounded-lg overflow-hidden'>
          <img className='object-cover w-full' src={a.image} alt="card image" />
        </figure>
        <div className='space-y-2'>
          <h2 className='text-[#001931] font-medium text-lg md:text-xl'>{a.title}</h2>
          <div className='flex gap-1 md:gap-4 items-center'>
            <div className='badge badge-soft badge-success font-medium'>
              <span>Download </span>
              {a.downloads}
            </div>
            <div className='badge badge-soft badge-warning font-medium'>
              <span>Rating</span>
              {a.ratingAvg}
            </div>
            <div className='font-medium text-[#627382]'>
              <span>{a.size}Mb</span>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => handleRemove(a.id)} className='btn bg-green-500 text-white'>
        Uninstall
      </button>
    </div>
  ))
)
                }

                </div>
           
        </div>
    );
};

export default Installation;