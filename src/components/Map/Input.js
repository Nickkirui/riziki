import { useState } from "react";
import React from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {storage} from '../../global/firebaseCofig'
import './Input.css'
import {Paper, Typography, Box, Button, Chip} from "@mui/material";
import DragDrop from "./Drag";
function Input() {
  const [progress, setProgress] = useState(0);
  const [mpesafile, setmpesaFile] = useState(null)
  const [bankfile, setbankFile] = useState(null)


  const uploadmpesaFiles = () => {
    //
    if(mpesafile){
      const sotrageRef = ref(storage, `mpesafiles/${mpesafile.name}`);
      const uploadTask = uploadBytesResumable(sotrageRef, mpesafile);
  
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
    }

  };

  const uploadbankFiles = () => {
    //
    if(bankfile){
      const sotrageRef = ref(storage, `bankfiles/${bankfile.name}`);
      const uploadTask = uploadBytesResumable(sotrageRef, bankfile);
  
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
    }

  };

  return (
    <div>
      <Paper elevation={24}
            sx={{
              padding: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "2ch",
              gap: "8px",
              width: "85%",
            }}

            // onMouseOver={() => setElevation(24)}
            // onMouseOut={() => setElevation(4)}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Upload your Mpesa statements for the last 6 Months
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <img src="/assets/addfile.png" alt="" width={100} />
              {/* <img src="/assets/pdfimage.png" alt="" width={200} /> */}

              <Typography></Typography>
            </Box>
            <DragDrop {...{ file: mpesafile, setFile: setmpesaFile }}></DragDrop>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Chip label="submission pending"></Chip>
              <Button variant="contained" onClick={() => uploadmpesaFiles()}>Upload</Button>
            </Box>
          </Paper>

          <Paper elevation={24}
            sx={{
              padding: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "2ch",
              gap: "8px",
              width: "85%",
            }}

            // onMouseOver={() => setElevation(24)}
            // onMouseOut={() => setElevation(4)}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Upload your bank statements for the last 6 months
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <img src="/assets/addfile.png" alt="" width={100} />
              {/* <img src="/assets/pdfimage.png" alt="" width={200} /> */}

              <Typography></Typography>
            </Box>
            <DragDrop {...{ file: bankfile, setFile: setbankFile }}></DragDrop>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Chip label="submission pending"></Chip>
              <Button variant="contained" onClick={() => uploadbankFiles()}>Upload</Button>
            </Box>
          </Paper>
    </div>
  );
}

export default Input;