import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Review.css';


function Review() {
    let navigate = useNavigate()

  return (
    <div>
        
     <p className='p'>Your Loan application has been received. We will get back to you within the hour.</p>
    </div>
  )
}

export default  Review;