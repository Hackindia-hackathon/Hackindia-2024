import React, { useState } from 'react';
import styled from 'styled-components';
import { auth, db } from '../../utils/firebaseConfig'; // Import auth and db directly
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { FaEye, FaEyeSlash, FaCheck } from 'react-icons/fa'; // Import eye icons for password visibility

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  padding: 20px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-size: 1em;

  &:focus {
    outline: none;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const EyeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
  font-size: 1.2em;
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 10px;
  background-color: #3498db;
  color: #ffffff;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SwitchButton = styled.button`
  background: none;
  border: none;
  color: #3498db;
  font-size: 1em;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #2980b9;
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const CriteriaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
`;

const CriteriaItem = styled.li`
  display: flex;
  align-items: center;
  color: ${(props) => (props.valid ? 'green' : '#aaa')};
`;

const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;
  return regex.test(password);
};

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      toast.error('Password must be at least 6 characters long and include uppercase, lowercase, and a special character.');
      return;
    }

    setLoading(true); // Show loading indicator
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Login successful!');
        navigate('/home'); // Redirect to home after successful login
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user details to Firestore with timestamp
        await setDoc(doc(db, 'users', user.uid), {
          name,
          email,
          createdAt: serverTimestamp(), // Add timestamp
        });

        toast.success('Sign-up successful! Redirecting to login...');
        // Switch to login form after successful signup
        setIsLogin(true);
        // Reset form fields
        setEmail('');
        setPassword('');
        setName('');
        // Navigate to login page
        navigate('/login');
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const isPasswordValid = (password) => {
    const lengthCheck = password.length >= 6;
    const uppercaseCheck = /[A-Z]/.test(password);
    const lowercaseCheck = /[a-z]/.test(password);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      length: lengthCheck,
      uppercase: uppercaseCheck,
      lowercase: lowercaseCheck,
      specialChar: specialCharCheck,
    };
  };

  const { length, uppercase, lowercase, specialChar } = isPasswordValid(password);

  return (
    <MainContainer>
      <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <InputWrapper>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputWrapper>
          )}
          <InputWrapper>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <EyeButton
              type="button" // Ensure the button does not submit the form
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </EyeButton>
          </InputWrapper>
          {!isLogin && (
            <CriteriaList>
              <CriteriaItem valid={length}><FaCheck /> At least 6 characters</CriteriaItem>
              <CriteriaItem valid={uppercase}><FaCheck /> One uppercase letter</CriteriaItem>
              <CriteriaItem valid={lowercase}><FaCheck /> One lowercase letter</CriteriaItem>
              <CriteriaItem valid={specialChar}><FaCheck /> One special character</CriteriaItem>
            </CriteriaList>
          )}
          <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
        </form>
        <SwitchButton onClick={toggleForm}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </SwitchButton>
      </FormContainer>
      {loading && (
        <LoadingOverlay>
          <Spinner />
        </LoadingOverlay>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </MainContainer>
  );
};

export default LoginPage;
