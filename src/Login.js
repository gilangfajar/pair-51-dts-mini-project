import { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => { navigate('/home') })
            .catch(error => console.error(error));
    }

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(auth => { navigate('/home') })
            .catch(error => console.error(error));
    }

    return (
        <div className='div'>
            <h1 className='h1'>Sign-in</h1>
            <label className='label'>E-mail</label>
            <input onChange={(event) => setEmail(event.target.value)} autoComplete='off' className='input' type='email' name='email' />
            <label>Password</label>
            <input onChange={(event) => setPassword(event.target.value)} autoComplete='off' className='input' type='password' name='password' /><br>
            </br>
            <button onClick={signIn} className='button'>Sign In</button>
            <p>By Creating an account you agree to Conditions of use and Privacy Notice</p>
            <button onClick={register} className='Button'>Create Your Movie Account</button>

        </div>
    )
}

export default Login