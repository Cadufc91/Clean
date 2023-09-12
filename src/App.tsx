import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import RoutesApp from './routes';
import { GiCarWheel } from 'react-icons/gi'

function App() {
  return (
    <div className='container'>
      <div className='formCard'>
        <div className='leftCard'>
          <GiCarWheel size={'75px'}/>
          <h1>CleanMyCar</h1>
          <p>India's first waterless <br></br> car cleaning company</p>
        </div>
        <div className='rightCard'>
          <a className='help' href="https://www.lipsum.com/feed/html">Need Help?</a>
          <RoutesApp />
        </div>
      </div>
    </div>
  );
}

export default App;
