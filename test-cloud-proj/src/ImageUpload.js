import React, { useState } from 'react';
import { Storage } from 'aws-amplify';

export const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Store the selected file
  };

  const handleUpload = async () => {
    if (!image) {
      alert('Please select an image to upload.');
      return;
    }

    try {
      // Upload image to S3
      const result = await Storage.put(image.name, image, {
        contentType: image.type, // Ensure the file's content type is set
      });

      console.log('File uploaded successfully:', result);
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading image. Please try again.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};
