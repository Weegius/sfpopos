import './App.css';
import Title from './title/Title';
import './title/Title.css';
import Footer from './Footer/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Title title={'SFPOPOS'} subtitle={'San Franciscos Privately Owned Public Spaces'}/>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
