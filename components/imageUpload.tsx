import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const ImageUpload = ({ onUpload }: any) => {
  const onDrop = useCallback(
    async (acceptedFiles: any) => {
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);
      formData.append("p7bt73fe", "p7bt73fe"); // Replace with your Cloudinary upload preset

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/p7bt73fe/image/upload",
        formData
      ); // Replace with your Cloudinary URL
      onUpload(response.data.secure_url);
    },
    [onUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
};

export default ImageUpload;
