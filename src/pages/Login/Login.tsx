import React, { useState } from 'react';
import './Login.css';
import { Message } from 'semantic-ui-react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Form, Input } from 'semantic-ui-react';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            setError("Please complete all fields");
        } else {
            navigate("/home");
        }
    }

  return (
    <div className='formContainer'>
        <h1>Log in</h1>
        <Form>
            <Form.Field>
                <label htmlFor='email'>Email</label>
                <Input 
                    type='email' 
                    id='email' 
                    value={email}
                    placeholder='joe@email.com' 
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                    size='big'
                />
            </Form.Field>
            <Form.Field>
                <label htmlFor='password'>Password</label>
                <Input 
                    type='password' 
                    id='password' 
                    value={password}
                    placeholder='Enter your Password'
                    onChange={(e) => [setPassword(e.target.value), setError("")]}
                    size='big'
                />
            </Form.Field>
            {error && <Message color= 'red'>{error}</Message>}
            <div className='helper'>
                <Link className='link' to={"/password"}>forgot password?</Link>
            </div>
            <Button className='button' size='big' onClick={handleLogin}>Login</Button>
        </Form>

    </div>
  )
}

export default Login;