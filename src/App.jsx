
// import reactLogo from './assets/react.svg'
import axios from 'axios'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Result from './Pages/Result/Result'
import { useState } from 'react'


function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };
  

  return (
    <Router>
      
      <div className='app' style={{backgroundImage:"url(./ques1.png)"}}> 
        <Header/>
        
      
      <Routes>
        <Route path='/' element={<Home name={name} setName={setName} 
        fetchQuestions={fetchQuestions} />} />

        <Route path='/quiz' element={<Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />}
        />
        <Route path='/result'  element={<Result/>}/>

      </Routes>
      </div>
      <Footer/>
      
    </Router>
  )
}

export default App

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
// import Home from './Pages/Home/Home';
// import Quiz from './Pages/Quiz/Quiz';

// function App() {
//   return (
//     <Router>
//       <div className='app'>
//         <Header />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/quiz' element={<Quiz />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
