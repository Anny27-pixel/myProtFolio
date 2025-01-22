import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Correct path to your App component
import './index.css' // Import your CSS file here!
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)