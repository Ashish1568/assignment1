import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import AboutMAQ from './components/AboutMAQ';
import AboutMe from './components/AboutMe';
import './App.css';

const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Carousel images={images} />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
        </Routes>
        <div className="horizontal-container">
              <AboutMAQ />
              <AboutMe />
            </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
