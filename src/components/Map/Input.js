import { useState } from "react";
import React from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {storage} from '../../global/firebaseCofig'
import './Input.css'
import Button from '@mui/material/Button';

function Input() {
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <div className="App">
      <h4>Upload your Bank statements from the last 6 months</h4>
      
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <Button type="submit" variant="contained"
              sx={{ mt: 3, mb: 2 }}>Upload</Button>
      </form>
      <hr />
      <h2>Uploading done {progress}%</h2>
      <h4>Upload your Mpesa statements from the last 6 months</h4>
      
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <Button type="submit" variant="contained"
              sx={{ mt: 3, mb: 2 }}>Upload</Button>
      </form>
      <hr />
      <h2>Uploading done {progress}%</h2>
      <Button
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT
            </Button>
    </div>
  );
}

export default Input;