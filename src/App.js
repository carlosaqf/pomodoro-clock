import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from './Components/button'
import { timer } from './Components/timer'

// Styled Components
const Container = styled.div`
  background: rgba(150,0,0,0.5);
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  text-align: center;
  
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0 auto;
  padding-top: 1em;

`;

const Timer = styled.h2`
  font-size: 2em;
  color: white;
  background: black;
  width: 15vw;
  margin: 2em auto;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClockButton = styled(Button)`
  background: teal;
  margin-top: 0.5em;
`;

export default function App() {
  
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [minutes, setMinutes] = useState(0)

  function toggle(){
    setIsActive(!isActive)
  }

  function reset(){
    setSeconds(0)
    setMinutes(0)
    setIsActive(false)
  }

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0 && minutes > 0) {
    
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
    
    } else if (isActive && seconds === 0 && minutes > 0) {
    
      interval = setInterval(() => {
        setSeconds(59)
        setMinutes(minutes => minutes - 1)
      }, 1000)

    } else if (isActive && seconds > 0 && minutes === 0){
      
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)

    } else if (isActive && seconds === 0 && minutes === 0){
      
      setIsActive(false)

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
     
      <Timer>{(minutes < 10) ? `0` + minutes : minutes}:{(seconds < 10) ? `0` + seconds : seconds}</Timer>
      
      <ClockButton onClick={() => { 
        toggle()
      }}>{isActive ? 'Pause' : 'Start'}</ClockButton><br />

      <ClockButton onClick={() => { 
        reset()
      }}>Reset</ClockButton><br />
     
      <ClockButton onClick={() => {
        reset()
        setMinutes(25)
        setIsActive(true)
      }}>25 Minutes</ClockButton><br />

      <ClockButton onClick={() => { 
        reset()
        setMinutes(10)
        setIsActive(true)
      }}>10 Minutes</ClockButton><br />

      <ClockButton onClick={() => { 
        reset()
        setMinutes(5)
        setIsActive(true)
      }}>5 Minutes</ClockButton><br />
      
      <ClockButton onClick={() => { 
        reset()
        setMinutes(1)
        setIsActive(true)
      }}>1 Minute</ClockButton>
      
      
    </Container>
  )
}

