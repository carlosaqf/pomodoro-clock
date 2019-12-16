import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import  Button from './Components/Button/Button'
import Timer from './Components/Timer'

// Styled Components
const Container = styled.div`
  background: #FFFFFF;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0 auto;
  padding-top: 1rem;
`;


export default function App() {
  
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [minutes, setMinutes] = useState(0)
  const [defaultTime, setDefaultTime] = useState(0)

  const handleTimeChange = (e) => {
    setDefaultTime(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))
    console.log('This is the time',typeof(parseInt(e.target.value)))
  }

  const updateDefaultTime = (e) => {
    e.preventDefault()
    if (defaultTime <= 60){
      setMinutes(defaultTime)
      setDefaultTime(0)
    }
    setDefaultTime(0)
  }

  const toggle = () => {
    setIsActive(!isActive)
  }

  const reset = () => {
    setSeconds(0)
    setMinutes(0)
    setIsActive(false)
  }

  useEffect(() => {
    let interval = null;

    // e.g. 01:59 --> 01:58
    if (isActive && minutes > 0 && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000);

    // e.g. 02:00 --> 01:59
    } else if (isActive && minutes > 0 && seconds === 0){
      interval = setInterval(() => {
        setSeconds(59)
        setMinutes(minutes => minutes - 1)
      }, 1000);

    // e.g. 00:58 --> 00:57
    } else if (isActive && minutes === 0 && seconds > 0){
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000);  

    // e.g. 00:00 --> Pause -> Start
    } else if (isActive && minutes === 0 && seconds === 0){
      setIsActive(false)

    // e.g. Pause functionality
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    };
  }, [isActive, seconds, minutes])


  return (
    <Container>
      <Title>Pomodoro Clock</Title>
     
      <Timer
        minutes={minutes}
        seconds={seconds}
      />
    
      <Button 
        onClick={toggle}
        text={isActive ? 'Pause' : 'Start'}
      />
      <Button 
        onClick={reset}
        text="Reset"
      />
      <br />
      <br />

      <Button
        onClick={() => {
          reset()
          setMinutes(25)
          setIsActive(true)
        }}
        text="25"
      />
      <Button
        onClick={() => {
          reset()
          setMinutes(10)
          setIsActive(true)
        }}
        text="10"
      />
      <Button
        onClick={() => {
          reset()
          setMinutes(5)
          setIsActive(true)
        }}
        text="5"
      />
      <Button
        onClick={() => {
          reset()
          setMinutes(1)
          setIsActive(true)
        }}
        text="1"
      />
    
      <br />
      <br />

      <form onSubmit={updateDefaultTime}>
        <input 
          onChange={handleTimeChange} 
          placeholder="Enter default time"
          value={defaultTime === 0 ? '' : defaultTime}
        />
        <input
          type="submit"
          value="Update"
        />
      </form>
      
          
      
    </Container>
  )
}

