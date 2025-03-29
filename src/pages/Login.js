import { useState } from "react";
import { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      
      await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: result.user.email,
          uid: result.user.uid,
          displayName: result.user.displayName??"",
          photoUrl: result.user.photoUrl??"",
          // Add any other user details you want to send
        }),
      });
      navigate("/home");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };


  const signInWithEmail = async () => {
    try {
      console.log(email,password)
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
      setUser(userCredential.user);
  
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const submitForm=()=>{
    signInWithEmail()
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {user ? (
        <h1 className="text-xl">Welcome, {user.email}</h1>
      ) : 
      (<section className="bg-gray-50 px-2 w-full h-full flex justify-center items-center dark:bg-gray-900">
        <div className="flex flex-col w-full items-center justify-center px-2 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                Flowbite    
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <InputEmail  value={email} setValue={setEmail}/>
                            {/* <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/> */}
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                           <InputPassword value={password} setValue={setPassword} />

                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                </div>
                                <div className="ml-3 text-sm">
                                  <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <Link className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500" to={'/forgot-password'} >Forgot password?</Link>
                            {/* <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}
                        </div>
       
                    </form>
                    <button
                        onClick={()=>submitForm()}
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    
                    <button
            onClick={signInWithGoogle}
            className="px-6 py-2 text-white bg-red-500 rounded-md"
          >
            Sign in with Google
          </button>    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don't have an account yet? <Link to={'/register'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>

                        </p>
                </div>
            </div>
        </div>
      </section>
      )}
    </div>
  );
}
