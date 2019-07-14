import React, { useState, useEffect } from 'react'
import styled from 'styled-components'



export const timer = (seconds, minutes) => {
    return (
    <div>
      <h1>{minutes} : {seconds}</h1>
    </div>
  )
}


