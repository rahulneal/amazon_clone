import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from './firebase';

import "./Login.css"

function Login() {
    const history = useHistory()
     const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const signIn = e => {
        e.preventDefault();
        console.log("in sing")

 
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth) => {
            if (auth) {
            history.push('/')

            }
            // console.log(auth);
        })
        .catch(error => alert(error.message))

        //firebase login 
    }

    const register = e => {
        e.preventDefault();

        //firebase registration
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            if (auth) {
            history.push('/')

            }
            // console.log(auth);
        })
        .catch(error => alert(error.message))
       
    }

  return (
    <div className='login'>
        <Link to="/">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png' className='login__logo' />
        
        </Link>
        <div className='login__container'>
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <h5>Password</h5>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button className='login__signinButton' onClick={signIn}>Sign In</button>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className='login__registerButton' onClick={register}> Create New Account </button>

            </form>
        
        </div>
    </div>
  
  )
}

export default Login