import React, { useState } from 'react'
import { Card } from '@mui/material'

export default function Input() {

    const [file, setFile] = useState('')
    const [uploaded, setUploaded] = useState(false)


  return (
    <div>
        <h3>1.Upload your Mpesa statements for the last 6 Months</h3>
        <Card sx={{maxWidth: '600px', margin: 'auto', padding: '50px'}}>
            <input type="file" onChange={(e) => {setFile(e.target.files[0]); setUploaded(true);}}/>
            {uploaded && <img src="/images/doc.png" alt="" width='50px' height='50px'/>}
        </Card>
            
        <h3>2.Upload your Bank statements for the last 6 Months</h3>
        <Card sx={{maxWidth: '600px', margin: 'auto', padding: '50px'}}>
            <input type="file" onChange={(e) => {setFile(e.target.files[0]); setUploaded(true);}}/>
            {uploaded && <img src="/images/doc.png" alt="" width='50px' height='50px'/>}
        </Card>
            
    </div>
  )
}
