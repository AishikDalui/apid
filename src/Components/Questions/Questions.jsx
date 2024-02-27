import React, { useState } from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { Button } from '@mui/material'
import { Navigate, useNavigate } from 'react-router-dom'
import './Question.css'

const Questions = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,

}) => {
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState( );
  const navigate=useNavigate();

  const handleSelect=(i)=>{
    if (i===selected && i===correct){
      return "select";
    }
    else if (i===selected && selected!==correct) return "wrong";
    else if (i===correct) return "select";
  }

  const handleCheck=(i)=>{
    console.log("checking");
    setSelected(i);
    if (i===correct){
      setScore(score+1);
      console.log("correct");
    }
    setError(false);
  }

  const handleQuit=()=>{
    setCurrQues(0),
    setQuestions();
  }

  const handleNext=()=>{
    if (currQues>8){
      navigate('/result');
      setCurrQues();
    }
    else if (selected){
      setCurrQues(currQues+1);
      setSelected("");
    }
    else{
      setError("Please select an option first");
    }
  }


  return (
    <div className='question'>
      <h1>Question:{currQues+1}</h1>
      <div className='singleQuestion'>
        <h2>{questions[currQues].question}</h2>
        <div className='options'>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          {
            options && options.map((i)=>(
              <button 
              onClick={()=>handleCheck(i)}
              className={`singleOption ${selected && handleSelect(i)}`}
              key={i}
              disabled={selected}
              
              
              >
                {i} 
                </button>
            ))
          }
        </div>
        <div className='controls'>
          <Button 
          variant="contained"
          color="secondary"
          size="large"
          style={{ width: 185 }}
          href='/'
          onClick={()=>handleQuit()}
          > 
            Quit
          </Button>
          <Button 
          variant="contained"
          color="primary"
          size="large"
          style={{ width: 185 }}
          onClick={handleNext}
          >
            Next
          </Button>

        </div>
      </div>


    </div>
  )
}

export default Questions