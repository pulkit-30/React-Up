import React, { useContext } from 'react';
import './style/app.css';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/footer/Footer';
import ResponsiveDialog from './components/dialog/Dialog';
import UserContext from './context/user/UserContext';
import Compose from './pages/Compose';
import UpdatePage from './pages/Update';
import Update from './components/user/Update';

import Profile from './components/user/Profile';

function App() {
  const User = useContext(UserContext);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <ResponsiveDialog />
        <div
          style={{
            minHeight: '85vh',
          }}
        >
          <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogPost />} />
            {!User.User && (
              <React.Fragment>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
              </React.Fragment>
            )}
            {User.User && (
              <React.Fragment>
                <Route path='/compose' element={<Compose />} />
                <Route path='/edit/:id' element={<UpdatePage />} />
                <Route path='/profile/edit/:id' element={<Update />} />
              </React.Fragment>
            )}
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='*' element={<Blog />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
