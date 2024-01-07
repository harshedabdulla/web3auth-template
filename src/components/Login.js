import React, { useEffect, useState, useContext } from 'react';
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { useNavigate } from 'react-router-dom';
import { Web3AuthContext } from '../Web3AuthContext'; // Import context
import Logo from '../assets/logo.svg';

const clientId = "Your_Client_ID"; // Replace with your actual Client ID

const LoginComponent = () => {
  const [web3auth, setWeb3auth] = useState(null); // Declare web3auth state
  const { setUserData } = useContext(Web3AuthContext); // Use context
  const navigate = useNavigate();

  useEffect(() => {
    const initWeb3Auth = async () => {
      const localWeb3Auth = new Web3Auth({
        clientId,
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0x13881", // Replace with desired chainId
          rpcTarget: "https://rpc.ankr.com/polygon_mumbai", // Replace with RPC URL
        },
      });

      await localWeb3Auth.initModal();
      setWeb3auth(localWeb3Auth);
    };

    initWeb3Auth();
  }, []);

  const login = async () => {
    if (!web3auth) {
      console.log("Web3Auth not initialized yet");
      return;
    }

    try {
      const web3authProvider = await web3auth.connect();
      const user = await web3auth.getUserInfo();
      setUserData(user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      {/* <button onClick={login}>Login with Web3Auth</button>
       */}
       {/* login page */}
       <div className="min-h-screen font-sans flex">
      <div className="w-1/3 bg-[#5A41F4] flex items-center justify-center">
     <div className="max-w-md w-full space-y-8 px-8 text-white">
     <h2 className='text-4xl font-extrabold'>Welcome to the Future of the Web</h2>
                <p>
                    Web3 represents the next generation of the internet, where decentralized applications run on blockchain technology.
                </p>
                </div>
                
      </div>
      <div className="w-2/3 flex items-center justify-center">
        
        <div className="max-w-md w-1/2 space-y-8">
        <div className="flex items-center mt-4">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="ml-2">Web3Auth Template/harshed</span>
        </div>
          <div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Sign in to your account
            </h2>
            
          </div>
          <button
              type="submit"
              onClick={login}
              className="group relative  w-1/2  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginComponent;
