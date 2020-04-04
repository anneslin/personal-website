import React from 'react';
import './App.css';
import Routes from './Routes';
import { theme } from "./themeStyleConstants";

const { background } = theme;

const App = () => {
  const style = true ? { backgroundImage: 'url(./assets/imgs/homepic1.jpg)' } : { backgroundColor: background }
  return (
    <div className="container" style={style}>
      <Routes/>
    </div>
  );
}

export default App;
