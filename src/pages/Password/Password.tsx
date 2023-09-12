import React, { useState } from 'react';
import { Message } from 'semantic-ui-react';
import { Button, Form } from 'semantic-ui-react';

const Password = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email) {
            setError("Please complete all fields");
        } else {
            setError("Please verify your email inbox")
        }
    }

  return (
    <div className='formContainer'>
        <h1>Forgot Password?</h1>
        <Form>
            <Form.Field>
                <label htmlFor='email'>Email</label>
                <input 
                    type='email' 
                    id='email' 
                    value={email}
                    placeholder='joe@email.com' 
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
            </Form.Field>
            {error && <Message color= 'red'>{error}</Message>}
            <Button className='button' size='big' onClick={handleLogin}>Recover password</Button>
        </Form>

    </div>
  )
}

export default Password;