import React from 'react'

const Timer = ({ seconds, minutes }) => {
    return (
    <div>
      <h1>{(minutes < 10) ? `0` + minutes : minutes}:{(seconds < 10) ? `0` + seconds : seconds}</h1>
    </div>
  )
}

export default Timer


