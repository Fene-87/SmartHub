import React, { useState } from 'react'
import { useStateContext } from '../context/StateContext'

const Register = () => {
  const { firstName, email, setFirstName, setLastName, setEmail, setPassword, setConfirmPassword } = useStateContext();
  const [regFirstName, setRegFirstName] = useState('');
  const [regLastName, setRegLastName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');

  const regBtn = () => {
    const details = {
      regFirstName: regFirstName,
      regLastName: regLastName,
      regEmail: regEmail,
      regPassword: regPassword,
      regConfirmPassword: regConfirmPassword,
    }
    setFirstName(details.regFirstName);
    setLastName(details.regLastName);
    setEmail(details.regEmail);
    setPassword(details.regPassword);
    setRegConfirmPassword(details.regConfirmPassword)
    console.log(details.regFirstName)
    console.log(email)
  }

  return (
    <div className='login'>
        <input 
          type='text' 
          placeholder='First_name'
          className='login-input'
          onChange={(event) => {
            setRegFirstName(event.target.value);
          }}
          required
        />
        <input 
          type='text' 
          placeholder='Second_name'
          className='login-input'
          onChange={(event) => {
            setRegLastName(event.target.value);
          }}
          required
        />
        <input 
          type='email' 
          placeholder='Email'
          className='login-input'
          onChange={(event) => {
            setRegEmail(event.target.value);
          }}
          required
        />
        <input 
          type='password' 
          placeholder='Password'
          className='login-input'
          onChange={(event) => {
            setRegPassword(event.target.value);
          }}
          required
        />
        <input 
          type='password' 
          placeholder='Confirm Password'
          className='login-input'
          onChange={(event) => {
            setRegConfirmPassword(event.target.value);
          }}
          required
        />
        <button type='button' className='btn' onClick={regBtn}>Register</button>
    </div>
  )
}

export default Register