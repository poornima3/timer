const ShowTimer = (props) => {
  // eslint-disable-next-line react/prop-types
  const { hours, minutes, seconds, isPaused, handlePause, handleResume, handleReset } = props;  
  return (
    <div className='show-container'>
      <div className='timer-box'>
        <div>{ hours < 10 ? `0${hours}` : hours }</div>
        <span>:</span>
        <div>{ minutes < 10 ? `0${minutes}` : minutes }</div>
        <span>:</span>
        <div>{ seconds < 10 ? `0${seconds}` : seconds }</div>
      </div>

      <div className='action-box'>
        {
          !isPaused ? <button className='timer-button' onClick={handlePause}>Pause</button> :
            <button className='timer-button' onClick={handleResume}>Resume</button>
        
        }
        <button className='timer-button' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default ShowTimer;