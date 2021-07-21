import React, { useRef } from 'react';
import { makeStyles, Paper, Button } from '@material-ui/core';

import Cow2 from '../cows/Cow2';
import SpeechBubble from '../SpeechBubble/SpeechBubble';

const useStyles = makeStyles((theme) => {
  return {
    next1: {
      height: '100%',
      padding: '20px 10px',
      backgroundColor: '#cbe2ed',
      overflow: 'hidden',
      position: 'relative',
    },
    button: {
      backgroundColor: 'transparent',
      width: 100,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    pulse: {
      animation: "pulse 1s infinite",
    },
    hill1: {
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: 'green',
      left: '-30%',
      top: '35%',
      width: 1500,
      height: 1000,
    },
    cow1: {
      position: 'absolute',
      bottom: '30%',
    },
    cow2: {
      position: 'absolute',
      bottom: '15%',
      '& svg': {
        width: '100px',
      },
    },
    cowFlipped: {
      transform: 'scaleX(-1)',
      '-webkit-transform': 'scaleX(-1)',
      marginLeft: -200,
    }
  }
});

function Phase1() {
  const classes = useStyles();
  const refCow1 = useRef();
  const refCow2 = useRef();
  return (
    <Paper className={classes.next1} square>
      <div className={classes.hill1} />
      <div className={classes.cow1}>
      <div style={{ width: 210, height: 210 }}>
        <SpeechBubble
          containerStyle={{ maxWidth: '50%', minWidth: 250 }}
          anchor={{
            left: 138,
            bottom: -11,
            transform: 'rotate(183deg)'
          }}
        >
          <p>Hier geht es weiter mit Stumpfsinn.</p>
          <p>Du musst uns alle streicheln.</p>
        </SpeechBubble>
        <audio ref={refCow1} src="https://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Cow.wav-8988-Free-Loops.com.mp3" />
          <Button className={`${classes.button} ${classes.cowFlipped} ${classes.pulse}`} onClick={() => {
            if (refCow1.current) refCow1.current.play()
          }}><Cow2 /></Button>
          </div>
      </div>
      <div>
        <audio ref={refCow2} src="http://thecyberbuddy.com/sounds/cow.wav" />
        <Button className={`${classes.button} ${classes.cow2}`} onClick={() => {
          if (refCow2.current) refCow2.current.play()
        }}><Cow2 /></Button>
      </div>
    </Paper>
  )
}

export default Phase1
