import React from "react";
import { Link } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from '../../firebaseconfig'
import { signOut } from "firebase/auth";
import "./Header.scss";



const Header = () => {
  const [user]=useAuthState(auth)
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      {
        !user &&(
         <>
       <div className="already">
       already have an account? <Link to ='/login'>Login</Link>
       </div>
       <Link to="/Register">
       <button className="user-signup">Sign up </button>
       </Link>
       </>
        )
      }
  
      <div>
        {
          user &&(
            <>
              <span className="alreadysign">
                Signed as {user.displayName || user.email}
              </span>
              <button className="logout"
              onClick={()=>{signOut(auth)}}>Log Out</button>
            </>
          )
        }
      </div>
    </div>
  );
};

export default Header;
