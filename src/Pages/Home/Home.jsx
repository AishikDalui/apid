import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Home.css'
import { TextField,MenuItem,Button } from '@mui/material'
import Categories from '../Data/Categories'
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage'

const Home = ({name,setName,fetchQuestions}) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
 
  const navigate=useNavigate();
  

  const handlesubmit=()=>{
    if (!name || !category || !difficulty){
      setError(true);
      return ;
    }
    else{
      setError(false)
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  }
  return (
    <div className='content'>

      <div className='settings'>
        <span style={{fontSize:30}}>Quiz Settings</span>

        <div className='settings_select'>
          {error && <ErrorMessage>Please Fill the all Field</ErrorMessage>}
          <TextField 
          style={{marginBottom:25}} 
          label="Enter Your Name" 
          variant='outlined'
          onChange={(e)=>setName(e.target.value)}
          />

          <TextField 
          select
          label="Select Catagory"
          style={{marginBottom:30}}
          onChange={(e)=>setCategory(e.target.value)}
          value={category}
          >
            {Categories.map((cat)=>(
              <MenuItem key={cat.category} value={cat.value} >
                {cat.category}
                
              </MenuItem>
            ))}
            
            </TextField>
            <TextField 
            select
            label="Select Difficulty"
            style={{marginBottom:30}}
            onChange={(e)=>setDifficulty(e.target.value)}
            value={difficulty}
            >
              <MenuItem key="Easy" value="Easy">
                Easy
              </MenuItem>

              <MenuItem key="Medium" value="Medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="Hard">
                Hard
              </MenuItem>

            </TextField>
            <Button variant='contained' color='primary' size='large' 
            onClick={handlesubmit}
            >
              Start Quiz
            </Button>

        </div>

      </div>
      <img src="/quiz.svg" className="banner" alt="quiz app" />
    </div>
  )
}

export default Home


