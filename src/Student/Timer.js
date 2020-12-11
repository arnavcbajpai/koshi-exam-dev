import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import {AccessAlarm} from "@material-ui/icons";

export const Timer = (props) => {
  const { seconds, closeTimer, setTimerValue } = props
  const [over, setOver] = useState(false)
  const [time, setTime] = useState({})
  useEffect(() => {
    setTime({
      seconds: Number(seconds)
    })
  }, [seconds])

  const tick = () => {
    if (!time.seconds) {
      setOver(true)
    } else {
      setTime((timer) => ({
        hours: timer.hours,
        minutes: timer.minutes,
        seconds: timer.seconds - 1
      }))
      setTimerValue(time.seconds - 1)
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)
    setTimeout(() => seconds * 1000)
    return () => clearInterval(timerID)
  })
  return (
    <React.Fragment>
      {time.seconds > 0 && (
          <div style={{display: 'inline-flex', paddingTop: '15px', paddingLeft: '45%', position: 'fixed'}}>
            <AccessAlarm height='20' width='20' />
            <div style={{
              
              }}>
                {`${
                  Math.floor(time.seconds / 60).toString().length === 1
                    ? `0${Math.floor(time.seconds / 60)}`
                    : Math.floor(time.seconds / 60)
                }:${
                  (time.seconds % 60).toString().length === 1
                    ? `0${time.seconds % 60}`
                    : time.seconds % 60
                }`}{' '}
                mins
            </div>
            
            <div style={{ paddingLeft: '15px'}}>
              <button >Exit</button>
            </div>              
          </div>
        )}
      {closeTimer(over)}
    </React.Fragment>
  )
}
Timer.propTypes = {
  seconds: PropTypes.number,
  closeTimer: PropTypes.func,
  setTimerValue: PropTypes.func
}

Timer.defaultProps = {
  seconds: 0,
  closeTimer: () => {},
  setTimerValue: () => {}
}

export default Timer
