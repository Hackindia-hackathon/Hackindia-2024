import React, { useState } from 'react';

const FileUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith('.obj')) {
      setFile(file);
    } else {
      console.error('Invalid file type. Please upload a valid .obj file.');
    }
  };

  const handlePreview = () => {
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".obj" onChange={handleFileChange} />
      <button onClick={handlePreview} disabled={!file}>
        Preview
      </button>
    </div>
  );
};

export default FileUpload;
