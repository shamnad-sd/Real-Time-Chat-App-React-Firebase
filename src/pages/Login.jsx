
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
    <div className="hero bg-base-200 bg-black min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-white"> Hey Talk 😍!! </h1>
      <p className="py-6">
      Instant communication with your friends,
      delivering real-time chats for fun and effortless conversations
      </p>
      <button onClick={handleLogin} className="btn btn-success text-white">Login With Google</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login