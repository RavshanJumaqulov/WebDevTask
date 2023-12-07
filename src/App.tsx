import React from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeApp from './component/appBar/HomeApp';
import Home from './pages/Home';
import Albums from './pages/Albums';
import User from './pages/User';
import OneUser from './pages/OneUser';
import Comments from './pages/Comments';
import Photos from './pages/Photos';
import PostComments from './pages/PostComments';
import NotFound from './pages/NotFound';
import UserAlbumPhotos from './pages/UserAlbumPhotos';

function App() {

  return (
    <Box sx={{
      background: '#000',
      '& ::-webkit-scrollbar': {
        width: 3,
      },

      '& ::-webkit-scrollbar-track': {
        background: 'hsla(0,0%,100%,.1)'
      },

      '& ::-webkit-scrollbar-thumb': {
        background: '#ff7434'
      },

      '& ::-webkit-scrollbar-thumb:hover': {
        background: 'red'
      },
    }}>
      <BrowserRouter>
        <ThemeProvider theme={theme('dark')}>
          <HomeApp >
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' element={<User />} />
              <Route path='/posts' element={<Home />} />
              <Route path='/posts/:id' element={<PostComments />} />
              <Route path='/albums' element={<Albums />} />
              <Route path='/user' element={<User />} />
              <Route path='/user/:userId' element={<OneUser />} />
              <Route path='/user/:userId/:albumId' element={<UserAlbumPhotos />} />
              <Route path='/comments' element={<Comments />} />
              <Route path='/photos' element={<Photos />} />
            </Routes>
          </HomeApp>
        </ThemeProvider>
      </BrowserRouter>
    </Box>
  );
}

export default App;
