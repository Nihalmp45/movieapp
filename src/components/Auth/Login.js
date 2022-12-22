import React,{useState} from 'react'
import { signInWithEmailAndPassword,updateProfile  } from 'firebase/auth';
import {auth} from '../../firebaseconfig'
import { useNavigate } from 'react-router-dom'
import './reg.css';
import './login.css'

const Login=()=> {
    let navigate=useNavigate()
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [Name,setName]= useState("")

    const handleInputChange = (e) => {
      const {id , value} = e.target;

      if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
  }
    
    const handleLogin  = async () => {
        try{
            await signInWithEmailAndPassword(auth,email,password);
            updateProfile(auth.currentUser,{displayName:Name})
            navigate("/")
        } catch(error){
            
        }
    }

  return (           
     <div className="form">
     <div className="form-body"></div>
    <div className="email">
    <label className="form__label" for="email">Email: </label>
    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
     </div>

    <div className="password" >
    <label className="form__label" for="password">Password: </label>
    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
     </div>

     <div class="footer-reg">
        <button onClick={()=>handleLogin()} type="submit" class="btn-reg">Login</button>
     </div>
     </div>
     
  )
}

export default Login
