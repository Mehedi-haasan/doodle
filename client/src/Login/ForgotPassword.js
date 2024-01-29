import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [reset, setReset]=useState(false);
  const navigate = useNavigate();

  const validateInput = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;
    // const usernameRegex = /^[a-zA-Z0-9_]+$/;

    if (value && !emailRegex.test(value) && !phoneRegex.test(value)) {
      setErrorMessage('Invalid input');
    } else {
      setErrorMessage('');
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    validateInput(value);
  };

  const handleOTP =()=>{
    setReset(true);
  }

  const handleSubmit =()=>{
    navigate('/home');
  }

  return (
    <div className='container h-[350px] w-[350px] border border-red-300 m-auto my-10 rounded'>
      {
        reset ?  <div action='submit'>
        <h1 className='text-center font-semibold text-xl py-3'>Reset your password</h1>
        <input className='block w-[94%] p-2  m-auto border focus:outline-none focus:border-red-500 rounded-md'
          type="text"
          placeholder='Enter your OTP here'
         />
        <input className='block w-[94%] p-2 my-4  m-auto border focus:outline-none focus:border-red-500 rounded-md'
          type="text"
          placeholder='New password'
         />
         <input className='block w-[94%] p-2  m-auto border focus:outline-none focus:border-red-500 rounded-md'
          type="text"
          placeholder='Confirm password'
         />
        <button onClick={handleSubmit} className='w-[50%] mt-5 block mx-auto text-center transition duration-500 hover:bg-[#333533] bg-red-500 text-white rounded font-semibold text-lg my-3 py-2' type='submit'>Submit</button>
      </div> 

      : 
      
      <div>
        <h1 className='text-center font-semibold text-xl py-3'>Forgot your password?</h1>
      
        <p className='text-sm text-center pb-4'>Please enter your email address or mobile number we will send an OTP code to your email account.</p>
        <input className='block w-[94%] p-2  m-auto border focus:outline-none focus:border-red-500 rounded-md'
          type="text"
          placeholder='Email or phone number'
          value={inputValue}
          onChange={handleInputChange}
         />
         
        <span className='block text-center text-red-400'>{errorMessage}</span> 

     
       <button onClick={handleOTP} className='w-[50%] mt-5 block mx-auto text-center transition duration-500 hover:bg-[#333533] bg-red-500 text-white rounded font-semibold text-lg my-3 py-2' >Send OTP</button>
      </div> 
      }



    </div>
  )
}

export default ForgotPassword
