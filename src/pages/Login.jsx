
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'
import { useEffect } from 'react';

const Login = () => {

  // const navigate = useNavigate();
  const navigate = useNavigate();
  const {currentUser , sigInWithGoogle} = UserAuth();
  
 
  const handleLogin = async () =>{
    try {
      await sigInWithGoogle()
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    if(currentUser){
      navigate("/chat")
    }
  }, [currentUser]);
  
  return (
    <div>
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold"> Hello there 👋🏻 </h1>
      <p className="py-6">
        join the conversation, Meet New people, and make
        connection is one Shared Room
      </p>
      <button onClick={handleLogin} className="btn btn-success">Login With Google</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login