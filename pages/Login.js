import React, { use, useState } from 'react'
import { useStateContext } from '../context/StateContext'
import Link from 'next/link';

const Login = () => {
  const { email, password, setEmail, setPassword } = useStateContext();
  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForm, setShowForm] = useState(true)
  const loginDetails = {
    email: email,
    password: password,
  }

  const loginBtn = () => {
    if(logEmail === 'maureen@gmail.com' && logPassword === '1a2b3c'){
        setShowSuccess(true);
        setShowForm(false);
    } else {
      alert('invalid username/password');
    }
  }

  return (
    <>
    {showSuccess && <div className='login'>
        <Link href="/">
          <button type='button' className='btn'>successful</button>
        </Link>
      </div>}

    {showForm && <form className='login'>
        <input 
          type='email'
          placeholder='Email'
          className='login-input'
          onChange={(event) => {
            setLogEmail(event.target.value);
          }}
        />
        <input 
          type='password'
          placeholder='Password' 
          className='login-input'
          onChange={(event) => {
            setLogPassword(event.target.value);
          }}
        />
        <button type='submit' className='btn' onClick={loginBtn}>Login</button>
    </form>}
    </>
  )
}

export default Login