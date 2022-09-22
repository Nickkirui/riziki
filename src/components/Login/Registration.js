import React, { useState } from 'react'
import {auth, database} from '../../global/firebaseCofig'
import {useNavigate} from 'react-router-dom'
import './Registration.css';


function Registration() {

    let navigate = useNavigate()

    const [name, setName ] = useState(' ')
    const [email, setEmail ] = useState(' ')
    const [password, setPassword ] = useState(' ')
    const [error, setError ] = useState(' ')

    const handleSignup = (e) => {
        e.preventDefault()
        //console.log(name, email, password);
        auth.createUserWithEmailAndPassword(email, password)
        .then((cred) => {
            database.collection('Users').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            })
            .then(() => {
                setName('')
                setEmail('')
                setPassword('')
                navigate('/login')
            }).catch(err => setError(err.message))
        }).catch(err => setError(err.message))

    }
  return (
    <>
        <h1>Login Form</h1>
            <form onSubmit = {handleSignup} autoComplete = 'off'>

                <label htmlFor='name'>Name:</label>
                <br />
                <input type = 'text' placeholder = 'Enter name' required
                onChange={(e) => setName(e.target.value) } value = {name}
                />
                
                <label htmlFor='email'>Email:</label>
                <br />
                <input type = 'email' placeholder = 'xyz@domain.com' required
                onChange={(e) => setEmail(e.target.value) } value = {email}
                />
                <br />

                <label htmlFor='password'>Password:</label>
                <br />
                <input type = 'password' placeholder = 'Enter password' required
                onChange={(e) => setPassword(e.target.value) } value = {password}
                />
                <br />
                <button type = 'submit' >SIGNUP</button>

                {error && <span>{error}</span>}
            </form>
    </>
  )
}

export default Registration