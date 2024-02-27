import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const Result = ({name,score,setScore}) => {
  const navigate=useNavigate();
  const goToHome=()=>{
    navigate('/');
    setScore(0);
  }
  return (
    <div>
      <div> Thanks {name} for attending</div>
      <div>Your Score is {score}</div>
      <Button onClick={goToHome}> 
        Go to Home Page
      </Button>
    </div>
  )
}

export default Result