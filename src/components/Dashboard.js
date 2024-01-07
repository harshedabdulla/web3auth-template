import React, { useContext } from 'react';
import { Web3AuthContext } from '../Web3AuthContext'; // Import context
import { Sign } from 'crypto';

const Dashboard = () => {
  const { userData } = useContext(Web3AuthContext); // Use context
  
  return (
    <div>
      <div className='min-h-screen font-sans flex'>
        <div className='w-1/3 bg-[#5A41F4] flex items-center justify-start'>
          <div className='max-w-md w-full space-y-8 px-8 text-white'>
            <h2 className='text-4xl font-extrabold'>
              Web3Auth Template
            </h2>
            <button
        
            className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
           Sign Out
            </button>
          </div>
          
          </div>
          <div className='p-4 sm:ml-16 sm:mt-8 text-black'>
      <h1 className='flex flex-col justify-start text-3xl font-bold'>Dashboard</h1>
      
        
         
      <div className='mt-12 space-y-4 text-2xl font-semibold'>
      <div style={{width: '90px', height: '90px', overflow: 'hidden', border:'0px', borderRadius:'100%'}}>
         <img src={userData.profileImage} />
         </div>
        <p>Name: {userData.name}</p>
     
      <p>Email: {userData.email}</p>
      <p>Address: {userData.address}</p>
      <p>ChainId: {userData.chainId}</p>
      <p>NetworkId: {userData.networkId}</p>
      
      </div>
      </div>
          </div>
          
     
    </div>
  );
};

export default Dashboard;

