import React, { useState } from 'react';

const Signup = ({ axios, setActiveComponent, notifyError, notifySuccess }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setUser({ ...user, [fieldName]: e.target.value });
  };

  const createAccount = async (e) => {
    e.preventDefault();
    if (user.name === "" || user.email === "" || user.password === "" || user.passwordConfirm === "") {
      return notifyError("Please provide all fields.");
    }
    notifySuccess("Creating account...");
    try {
      const response = await axios({
        method: 'POST',
        url: '/api/v1/user/signup',
        withCredentials:true,
        data:{
          name: user.name,
          email: user.email,
          password: user.password,
          passwordConfirm: user.passwordConfirm

          
        }
      });
      if(response.data.status == "success"){
        notifySuccess("Account created Successfully")
        localStorage.setItem(
          "USER_MEMBERSHIP",
          response.data.data.user.membershipType
        )
        localStorage.setItem(
          "CryptoBot_BackEnd",
          response.data.data.user._id
        )
        localStorage.setItem(
          "CryptoAUT_TOKEN",
          response.data.token
        )
        window.location.reload()
      }
      else{
        notifyError("Something Went Wrong")
      }
      // Handle successful signup here, e.g., redirect or update state
    } catch (err) {
      notifyError("Error creating account. Please try again.");
      console.log(err);
    }

  };
  

  return (
    <div className='techwave_fn_sign'>
      <div className='sign__content'>
        <h1 className='logo'>Designed By Danish</h1>
        <form className='login'>
          <div className='form__content'>
            <div className='form_title'></div>
          <div className='form__username'>
            <label htmlFor='user_login'>Name</label>
            <input type='text' className='input' onChange={(e)=>[
              handleFormFieldChange('name', e)
            ]}></input>
          </div>
          <div className='form__username'>
            <label htmlFor='user_login'>Email</label>
            <input type='text' className='input' onChange={(e)=>[
              handleFormFieldChange('email', e)
            ]}></input>
          </div>
          <div className='form__username'>
            <label htmlFor='user_login'>Password</label>
            <input type='text' className='input' onChange={(e)=>[
              handleFormFieldChange('password', e)
            ]}></input>
          </div>
          <div className='form__username'>
            <label htmlFor='user_login'>Password Confirm</label>
            <input type='text' className='input' onChange={(e)=>[
              handleFormFieldChange('passwordConfirm', e)
            ]}></input>
            
          </div>
          <div className='form__alternative'>
            <a onClick={(e)=>{
              createAccount(e)
            }}
            className='techwave_fn_button'><span>Create Account</span></a>
          </div>

          </div>
        </form>
        <div className='sign__desc'>
          <p>Not a Member?
          <a onClick={()=>{
            setActiveComponent("Login")
          }}>Login</a>
          </p>
        </div>
         
      </div>
    </div>
  );
};

export default Signup;
