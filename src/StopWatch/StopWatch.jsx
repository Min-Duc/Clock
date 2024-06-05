import React, { useState, useEffect, useRef, useCallback } from 'react';
import './StopWatch.css'
function StopWatch() {
     const [isRunning, setIsRunning] = useState(false);
     const [elapsedTime, setElapsedTime] = useState(0);
     const IntervalIdRef = useRef(null);
     const startTimeRef = useRef(0);

     useEffect(() => {

          if (isRunning) {
               IntervalIdRef.current = setInterval(() => {
                    setElapsedTime(Date.now() - startTimeRef.current);
               }, 10)
          }

          return () => {
               clearInterval(IntervalIdRef.current);
          }

     }, [isRunning]);

     function Start() {
          setIsRunning(true);
          startTimeRef.current = Date.now() - elapsedTime;
     }

     function Stop() {
          setIsRunning(false);
     }

     function Reset() {
          setElapsedTime(0);
          setIsRunning(false);
     }

     function FormatTime() {

          let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
          let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
          let seconds = Math.floor(elapsedTime / (1000) % 60);
          let miliseconds = Math.floor(elapsedTime % 1000 / 10);

          minutes = String(minutes).padStart(2, "0");
          seconds = String(seconds).padStart(2, "0");
          miliseconds = String(miliseconds).padStart(2, "0");


          return `${minutes}:${seconds}:${miliseconds}`;
     }



     return (
          <div className='stopWatchContainer'>
               <div className='display'>{FormatTime()}</div>
               <div className='controlButton'>
                    <button onClick={Start} className='startButton'> Start </button>
                    <button onClick={Stop} className='stopButton'> Stop </button>
                    <button onClick={Reset} className='resetButton'> Reset </button>
               </div>
          </div>
     );
}

export default StopWatch;