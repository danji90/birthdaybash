import React, { useRef } from 'react';
import { makeStyles, Button } from '@material-ui/core';

import SpeechBubble from '../SpeechBubble/SpeechBubble';
import CowFace from '../cows/CowFace.js';

const useStyles = makeStyles((theme) => {
  return {
    fridgeBashIntro: {
      height: '100vh',
      padding: '20px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    button: {
      animation: '$pulseCowFace 1s infinite',
      transform: 'rotate(10deg)',
    },
    "@keyframes pulseCowFace": theme.createPulse(),
    cow3: {
      position: 'relative',
      width: '50vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
});


function BashIntro() {
  const classes = useStyles();
  const refCowFace = useRef();

  return (
    <div id="fridge-bash-intro" className={classes.fridgeBashIntro}>
      <div className={classes.cow3}>
        <SpeechBubble
          padding={20}
          containerStyle={{ maxWidth: 300, minWidth: 250 }}
          anchor={{
          left: 138,
          bottom: 5,
          transform: 'rotate(160deg)'
          }}
        >
          <p>Zuerst lassen wir etwas Dampf ab. Lass all deinen Frust auf vergangene Sorgen raus, auf nimmer wieder sehen!</p>
        </SpeechBubble>
        <div style={{ transform: 'rotate(-10deg)', width: 200 }}>
          <Button 
            className={classes.button}
            onClick={() => {
              if (refCowFace.current) refCowFace.current.play();
              const fridgeBashIntro = document.getElementById('fridge-bash')
              fridgeBashIntro.scrollIntoView({ behavior: 'smooth'})
            }}
          >
            <CowFace width={200} height={200} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BashIntro;
