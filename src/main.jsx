import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StopPage from './StopWatch/StopPage.jsx';
import ClockPage from './MainClock/ClockPage.jsx';
import AnalogPage from './AnalogClock/AnalogPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AnalogClock" element={<AnalogPage />} />
        <Route path="/MainClock" element={<ClockPage />} />
        <Route path="/StopWatch" element={<StopPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
