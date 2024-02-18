import React, { useEffect } from 'react'

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  useEffect(() => {
    console.log(questions);
  }, [questions])
  return (
    <div>Quiz</div>
  )
}

export default Quiz