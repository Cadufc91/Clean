import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Home = () => {
    const navigate = useNavigate();

  return (
    <div>
        <h1>Welcome</h1>
        <Button onClick={() => navigate("/")}>
            Log Out
        </Button>
    </div>
  )
}

export default Home;