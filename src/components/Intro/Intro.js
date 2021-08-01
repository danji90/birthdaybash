import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

import CowFace from '../cows/CowFace.js';
import SpeechBubble from '../SpeechBubble/SpeechBubble';

const useStyles = makeStyles((theme) => {
  return {
    landing: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      height: '100vh',
      margin: '0 20px'
    },
    button: {
      backgroundColor: 'transparent',
      width: 200,
      animation: "$pulse 1s infinite",
      '&:hover': {
        backgroundColor: 'transparent',
      }
    },
    "@keyframes pulse": theme.createPulse(),
  }
});

function Intro() {
  const classes = useStyles();

  return (
    <div id="landing-zone" className={classes.landing}>
      <SpeechBubble containerStyle={{ top: 225}} >
        <h2>Glückwunsch!!</h2>
        <p>Du hast es zu Kathrin's kuhlen Birthday Bash geschafft!</p>
        <p>Du kannst hier alles antippen, was sich bewegt um fortzufahren.</p>
        <p>Streichel mich erstmal für mehr Stumpfsinn =)</p>
      </SpeechBubble>
      <div style={{ width: 210, height: 210 }}>
        <Button 
          className={classes.button}
          onClick={() => {
            const fridgeBash = document.getElementById('fridge-bash')
            fridgeBash.scrollIntoView({ behavior: 'smooth'})
          }}
        >
          <CowFace width={200} height={200}/>
        </Button>
      </div>
      <br />
    </div>
  )
}

export default Intro;
