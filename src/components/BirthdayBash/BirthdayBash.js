import React, { useRef, useEffect, useState } from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import * as FireworkCanvas from 'fireworks-canvas';

import CowFace from '../cows/CowFace.js';
import SpeechBubble from '../SpeechBubble/SpeechBubble';

const useStyles = makeStyles((theme) => {
  return {
    fireworksContainer: {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      overflow: 'auto',
    },
    appContent: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: 2000,
      width: '100%',
    },
    mainContainer: {
      padding: 10,
      backgroundColor: 'transparent',
      width: '80vw',
      maxWidth: 1000,
    },
    landing: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      height: '100vh',
    },
    button: {
      backgroundColor: 'transparent',
      width: 200,
      animation: "pulse 1s infinite", // --> this works
      '&:hover': {
        backgroundColor: 'transparent',
      }
    },
    "@global": {
      "@keyframes pulse": {
        "0%": {
          width: 200
        },
        "50%": {
          width: 210
        },
        "100%": {
          width: 200,
        }
      }
    },
  }
})

const play = (audio) => {
  if (audio) audio.play();
}

function BirthdayBash() {
  const classes = useStyles();
  const refFireworks = useRef();
  const refCow = useRef();
  const [fireWorks, setFireWorks] = useState(null);

  useEffect(() => {
      const container = refFireworks.current;
      const options = {
        maxRockets: 5, // max # of rockets to spawn
        rocketSpawnInterval: 500, // millisends to check if new rockets should spawn
        numParticles: 100, // number of particles to spawn when rocket explodes (+0-10)
        explosionMinHeight: 0.4,
        explosionChance: 0.01, // chance in each tick the rocket will explode
        width: container.clientWidth, // override the width, defaults to container width
        height: container.clientHeight, // override the height, defaults to container height
        rocketInitialPoint: container.clientWidth * 0.5,
      }
      if (refFireworks.current && !fireWorks) {
        setFireWorks(new FireworkCanvas(container, options))

      }
      const handleResize = () => {
        const canvas = document.getElementsByTagName('canvas');
        refFireworks.current.removeChild(canvas[0]);
        setFireWorks(null)
      }
  
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
  }, [refFireworks, fireWorks]);

  if (fireWorks) {
    fireWorks.start();
  }

  return (
    <>
      <div className={classes.fireworksContainer} ref={refFireworks} />
      <div className={classes.appContent}>
        <div className={classes.mainContainer}>
          <div className={classes.landing}>
            <SpeechBubble containerStyle={{ top: 225, right: window.innerWidth * 0.1}}>
              <h2>Glückwunsch!!</h2>
              <p>Du Hast es zu Kathrin's kuhlen Birthday Bash geschafft!</p>
              <p>Streichel mich für mehr Stumpfsinn </p>
            </SpeechBubble>
            <audio ref={refCow} src="http://www.classicalmusicproject.com/Joshuahomework/Bessie.wav" />
            <div style={{ width: 210, height: 210 }}>
              <Button className={classes.button} onClick={() => play(refCow.current)}><CowFace /></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BirthdayBash;
