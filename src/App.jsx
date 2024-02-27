
// import reactLogo from './assets/react.svg'
import { useState ,lazy,Suspense} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Pages/Home/Home'
// import Quiz from './Pages/Quiz/Quiz'
// import Result from './Pages/Result/Result'

const Quiz=lazy(()=>import('./Pages/Quiz/Quiz'));
const Result=lazy(()=>import('./Pages/Result/Result'))

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty.toLowerCase()}`}`,
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

        <Route path='/quiz' element={<Suspense fallback={<div>loading...</div>}><Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            /></Suspense>}
        />
        <Route path='/result'  element={<Suspense fallback={<div>loading..</div>}><Result 
        name={name} 
        score={score} 
        setScore={setScore}/></Suspense>}/>

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
