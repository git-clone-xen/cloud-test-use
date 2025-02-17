import React from 'react';
import './App.css';
import { ImageUpload } from './ImageUpload'; // Import the ImageUpload component

function App() {
  return (
    <div className="App">
      <h1>Upload Image to S3 with AWS Amplify</h1>
      <ImageUpload />
    </div>
  );
}

export default App;
