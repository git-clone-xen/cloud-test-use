import React, { useState } from 'react';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('https://qw16c0yk37.execute-api.us-east-1.amazonaws.com/test-stage/upload_data', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully!');
      } else {
        alert('File upload failed.');
      }
    } catch (error) {
      alert('An error occurred during the upload.');
      console.error(error);
    }
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
