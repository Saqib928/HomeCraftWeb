import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./css/loginSignup.css"
const LoginSignup = (props) => {
 
    // const { loggedIn, email } = props;
    const navigate = useNavigate();
    
    // const onButtonClick = () => {
    //     // 'll update this function later
    // }

    const handleSubmit = ()=>{
      navigate("/")
    }

    return (
      <div className="form">
     <form onSubmit={handleSubmit}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
       
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
       
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
 
  )
}

export default LoginSignup
