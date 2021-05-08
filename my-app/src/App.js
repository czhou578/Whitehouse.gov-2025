import './App.css';
import './Taskbar.css'
import Taskbar from './Taskbar'
import React, { Component } from 'react';

function App() {
  return (
    <div id="body">
      <Taskbar />
      <section className="cover-splash">
        <div className="head-title">
          Welcome to the <br></br> 2027 American ScoreCard
        </div>
      </section>
    </div>
  );
}

export default App;
