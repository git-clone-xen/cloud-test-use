import React, { useState } from 'react';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <h1>Hello, It's my first React App!</h1>
      <h2>Happy Coding!!</h2>

      <input 
        type="file" 
        accept="image/*, video/*" 
        onChange={handleFileChange} 
      />
      {selectedFile && (
        <div>
          <h3>Selected File:</h3>
          <p>{selectedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default App;
