import React from "react";
import { Box } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

import './Copyright.css'

function Copyright() {
  return (
    <div className="copy">
     <CopyrightIcon></CopyrightIcon>All Rights reserved 2022
    </div>
  )
}

export default Copyright