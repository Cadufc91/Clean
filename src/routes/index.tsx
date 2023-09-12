import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Password from '../pages/Password/Password';


const index = () => {
  return (
    <div>
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/' element={<Login />} />
                    <Route path='/password' element={<Password />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    </div>
  )
}

export default index