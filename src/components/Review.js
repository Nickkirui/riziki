import React, {useState} from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'



function Review() {
    const navigate = useNavigate()

  const [timer, setTimer] = useState(5)

    const runTimer = () => {
      if(timer>0){
        setTimeout(() => {
          setTimer(timer-1)
        }, 1000)
      }else{
        navigate('/homepage')
      }
    }


    useEffect(() => {
      runTimer()
    }, [timer])

  return (
    <div>
        
     <p className='p'>Your Loan application has been received. We will get back to you within the hour.</p>

     <h3>{timer}</h3>

    </div>
  )
}

export default  Review;