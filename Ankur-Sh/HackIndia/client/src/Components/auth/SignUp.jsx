import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import "./SignUp.css"; // Import your CSS file for styling

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="signup">
            <div className="sign-up-container">
                <form onSubmit={signUp}>
                    <h1>Create Account</h1>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                    />
                    <button type="submit" className="sign-up-button">
                        Sign Up
                    </button>
                </form>
                <Link to={"/signin"} className="have-account-link">
                    Already Have an Account? Log In
                </Link>
            </div>
        </div>
    );
}

export default SignUp;
