import React, { useState } from 'react';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];  // First selected file
    const reader = new FileReader();
    
    reader.onloadend = () => {
      const fileContent = reader.result.split(',')[1];  // Get base64 content (strip off the 'data:*/*;base64,' part)
      
      const formData = new FormData();
      formData.append('content', fileContent);  // Append base64 content of the file
      
      // You can add other fields here (e.g., file name)
      formData.append('file_name', file.name);
      
      fetch('YOUR_LAMBDA_API_URL', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));
    };
  
    reader.readAsDataURL(file);  // Read the file as base64
  };
  

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    console.log(formData);

    try {
      const response = await fetch('https://qw16c0yk37.execute-api.us-east-1.amazonaws.com/test-stage/test1', {
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
