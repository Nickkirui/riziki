import React from 'react'
import { Card, CardContent,Typography, CardHeader,  } from '@mui/material'
import { blue } from '@mui/material/colors'

function Requirements() {
  return (
    <div>
      <Card sx={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto", marginTop: "25px", backgroundColor: blue[100], display: "flex", flexDirection: "column", gap:"10px", padding: "45px"}}>
        <CardHeader
        title = "Get Instant Loans"
        />
        <ul>
          <li> <Typography variant = 'body2'> National ID</Typography></li>
          <li> <Typography variant = 'body2'> KRA documents</Typography></li>
          <li> <Typography variant = 'body2'> Mobile Phone Number</Typography></li>
        </ul>
       

      </Card>
        
        
        </div>
  )
}

export default Requirements 