import { useState } from "react";
import { Link } from "react-router-dom";
import {getAuth,sendPasswordResetEmail} from 'firebase/auth'
import {toast} from 'react-toastify'



function ForgotPassword() {
  const [email, setEmail] = useState('')
    const onChange = (e) => {

    }

    const onSubmit = (e) => {
        e.preventDefault()
       
        
    }
    return (
        <div className="pageContainer">
            <header>
                <p className="pageHeader">ForgotPassword</p>
            </header>
            <main>
                <form onSubmit={onSubmit}>
                  <input type="email" className="emailInput"
                  placeholder="Email" id="email" value={email}
                  onChange={onChange}
                  />
                  <Link className="forgotPasswordLink" to='/signin'>
                    signin
                  </Link>
                  <div className="signInBar">
                    <div className="signInText">Send Reset Link</div>
                    <button className="signInButton">

                    </button>
                  </div>
                </form>
            </main>
        </div>
    )
}

export default ForgotPassword