import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event:any) => {
    setSelectedFile(event.target.files[0]);
    console.log("selectedFile--", event.target.files)
  };

  const handleUpload = () => {
    // Here, you can send the selectedFile to the server for further processing.
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload PDF</button>

    </div>
  );
}

export default FileUpload;
