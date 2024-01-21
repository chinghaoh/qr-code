import React from 'react';
import "./styles.css"
import qrImage from "./images/image-qr-code.png"

const App = () => {
  return (
    <main className="card-container">
      <div className="card">
      <img className='qr-image' src={qrImage} alt='qr-code'></img>
      <div className='card-text'>
        <h1 id='card-title'>Improve your front-end skills by building projects</h1>
        <p id='card-content'>Scan the GR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </main>
  );
};
export default App;