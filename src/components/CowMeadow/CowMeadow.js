import React, { useRef, useState } from 'react';
import { makeStyles, Paper, Button, Slide } from '@material-ui/core';

import Cow2 from '../cows/Cow2';
import Cow3 from '../cows/Cow3';
import SpeechBubble from '../SpeechBubble/SpeechBubble';
import Sign from '../Sign/Sign';

const useStyles = makeStyles((theme) => {
  return {
    cowMeadowWrapper: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    next1: {
      height: '100%',
      width: '100%',
      padding: '0 10px 0',
      backgroundColor: '#cbe2ed',
      overflow: 'hidden',
      position: 'relative',

    },
    button: {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    hill1: {
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: 'green',
      left: '-30%',
      top: '35%',
      width: 1500,
      height: '100vh',
    },
    sun: {
      position: 'absolute',
      backgroundColor: 'yellow',
      left: '80%',
      bottom: '90%',
      borderRadius: '50%',
      height: 150,
      width: 150,
    },
    cow1Wrapper: {
      position: 'absolute',
      bottom: '40%',
    },
    cow1: {
      transform: 'scaleX(-1)',
      '-webkit-transform': 'scaleX(-1)',
      marginLeft: -200,
    },
    cow2: {
      position: 'absolute',
      bottom: '40%',
      right: 10,
      animation: "$pulseCow2 1s infinite",
    },
    cow3: {
      position: 'absolute',
      bottom: '20%',
      animation: "$pulseCow3 1s infinite",
    },
    cowFlipped: {
      animation: "$pulseCow1 1s infinite",
    },
    signWrapper: {
      position: 'absolute',
      bottom: -50,
      right: 5,
    },
    signRotate: {
      height: 200,
      width: 250,
      transform: 'rotate(10deg)',
      '& svg': {
        width: '100%',
        height: '100%',
      },
    },
    "@keyframes pulseCow1": theme.createPulse(),
    "@keyframes pulseCow2": theme.createPulse(),
    "@keyframes pulseCow3": theme.createPulse(),
  }
});

function CowMeadow() {
  const classes = useStyles();
  const refCow1 = useRef();
  const refCow2 = useRef();
  const refCow3 = useRef();
  const [cowsState, setCowsState] = useState({cow1: false, cow2: false, cow3: false})
  console.log(cowsState);
  return (
    <div id="cow-meadow" className={classes.cowMeadowWrapper}>
      <Paper className={classes.next1} square>
        <div className={classes.hill1} />
        <div className={classes.sun} />
        <div className={classes.cow1Wrapper}>
          <div style={{ width: 210, height: 210 }}>
            <SpeechBubble
              padding={20}
              containerStyle={{ maxWidth: '50%', minWidth: 250 }}
              anchor={{
                left: 138,
                bottom: -11,
                transform: 'rotate(183deg)'
              }}
            >
              <p>Jetzt wo wir Einiges an Balast vernichtet haben, wird nur mehr entspannt, wiedergekaut und die schönen Dinge im Leben genossen.</p>
              <p>Wir fangen an mit Kühe streicheln.</p>
            </SpeechBubble>
            <audio ref={refCow1} src="https://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Cow.wav-8988-Free-Loops.com.mp3" />
            <div className={classes.cow1}>
              <Button className={`${classes.button} ${classes.cowFlipped}`} onClick={() => {
                if (refCow1.current) refCow1.current.play();
                setCowsState({ ...cowsState, cow1: true})
              }}><Cow2 width={400} height={200} /></Button>
            </div>
          </div>
        </div>
        <div>
          <audio ref={refCow2} src="http://thecyberbuddy.com/sounds/cow.wav" />
          <Button className={`${classes.button} ${classes.cow2}`} onClick={() => {
            if (refCow2.current) refCow2.current.play();
            setCowsState({ ...cowsState, cow2: true})
          }}><Cow2 width={100} height={50}/></Button>
        </div>
        <div>
          <audio ref={refCow3} src="http://www.classicalmusicproject.com/Joshuahomework/Bessie.wav" />
          <Button
            className={`${classes.button} ${classes.cow3}`}
            onClick={() => {
              if (refCow3.current) refCow3.current.play();
              setCowsState({ ...cowsState, cow3: true})
            }}
          >
            <Cow3 width={200} height={100}/>
          </Button>
        </div>
        <Slide direction="up" in={cowsState.cow1 && cowsState.cow2}>
          <div className={classes.signWrapper}>
            <div className={classes.signRotate}>
              <Button href="#fridge-bash" className={classes.button}>
                <Sign />
              </Button>
            </div>
          </div>
        </Slide>
      </Paper>
    </div>
  )
}

export default CowMeadow;
