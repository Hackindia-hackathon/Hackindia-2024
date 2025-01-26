import React, { useState } from 'react';

const Login = ({ axios, setActiveComponent, notifyError, notifySuccess }) => {
  const [user, setUser] = useState({
    
    password: '',
  
  });
  const handleFormFieldChange = (fieldName, e) => {
    setUser({ ...user, [fieldName]: e.target.value });
  };

  const apiLogin = async (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      return notifyError("Please provide all fields.");
    }
    notifySuccess("Logging in...");
    try {
      const response = await axios({
        method: 'POST',
        url: '/api/v1/user/login',
        withCredentials: true,
        data: {
          email: user.email,
          password: user.password
        }
      });
      if (response.data.status === "success") {
        notifySuccess("Login successful");
        localStorage.setItem(
          "CryptoAUT_TOKEN",
          response.data.token
        );
        window.location.reload();
      } else if(response.data.status == "fail  "){
        notifyError("Something went wrong");
      }
    } catch (err) {
      notifyError("Error logging in. Please try again.");
      console.log(err);
    }
  };

  return (
    <div className='techwave_fn_sign'>
      <div className='sign__content'>
        <h1 className='logo'>Designed By Danish</h1>
        <form className='login'>
          <div className='form__content'>
            <div className='form_title'>Sign In</div>
            <div className='form__username'>
              <label htmlFor='user_email'>Email</label>
              <input
                type='text'
                className='input'
                onChange={(e) => handleFormFieldChange('email', e)}
              />
            </div>
            <div className='form__username'>
              <label htmlFor='user_password'>Password</label>
              <input
                type='password'
                className='input'
                onChange={(e) => handleFormFieldChange('password', e)}
              />
            </div>
            <div className='form__alternative'>
              <a
                onClick={(e) => apiLogin(e)}
                className='techwave_fn_button'
              >
                <span>Login</span>
              </a>
            </div>
          </div>
        </form>
        <div className='sign__desc'>
          <p>Not a Member?
            <a
              onClick={() => setActiveComponent("Signup")}
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
