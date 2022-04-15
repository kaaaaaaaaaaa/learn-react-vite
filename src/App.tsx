import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Footer, Header } from './components/common';
import StudentCard from './features/labs/StudentCard';
import { Student } from './models';

function App() {
  const [count, setCount] = useState(0);
  const oanh={
    name: 'oanh',
    age: 3
  }
  const handleStudentClick=(student:Student) => {
    console.log("click");
  
  }

  return (
    <div className="App">
    <Header/>
    <StudentCard student={oanh} onStudentClick={handleStudentClick} />
    <Footer/>
    </div>
  )
}

export default App
