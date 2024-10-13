import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container">
      <h1>ZayQuiz</h1>
      <h2>Choose Your Quiz Category</h2>
      <div className="categories">
        <Link to="/quiz/js" className="category-card">
          <div className="card-content">
            <h2>JavaScript</h2>
            <p>Test your JavaScript skills with challenging questions!</p>
          </div>
        </Link>
        <Link to="/quiz/react" className="category-card">
          <div className="card-content">
            <h2>React</h2>
            <p>Challenge yourself with React-related quizzes!</p>
          </div>
        </Link>
        <Link to="/quiz/html" className="category-card">
          <div className="card-content">
            <h2>HTML</h2>
            <p>Brush up your HTML skills with our quiz!</p>
          </div>
        </Link>
        <Link to="/quiz/css" className="category-card">
          <div className="card-content">
            <h2>CSS</h2>
            <p>See how well you know CSS with our questions!</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
