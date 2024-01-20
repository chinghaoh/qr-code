import React from 'react';
import "./styles.css"
import qrImage from "./images/image-qr-code.png"

const App = () => {
  return (
    <div className="card-container">
      <div className="card">
      <img className='qr-image' src={qrImage} alt='qr-code'></img>
      <div className='card-text'>
        <h2 id='card-title'>Improve your front-end skills by building projects</h2>
        <p id='card-content'>Scan the GR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
};
export default App;