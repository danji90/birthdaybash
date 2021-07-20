import React, { useRef, useEffect, useState } from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import * as FireworkCanvas from 'fireworks-canvas';

const useStyles = makeStyles((theme) => {
  return {
    fireworksContainer: {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black'
    },
    fireworksTitle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      backgroundColor: 'black'
    },
    button: {
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'white',
      }
    },
  }
})

const play = (audio) => {
  if (audio) audio.play();
}

function FireWorks() {
  const classes = useStyles();
  const refFireworks = useRef();
  const refCow = useRef();
  const [fireWorks, setFireWorks] = useState(null);
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

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
        setDimensions({ 
          height: window.innerHeight,
          width: window.innerWidth
        })
        const canvas = document.getElementsByTagName('canvas');
        refFireworks.current.removeChild(canvas[0]);
        setFireWorks(null)
      }
  
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
  }, [refFireworks, fireWorks, dimensions]);

  if (fireWorks) {
    fireWorks.start();
  }

  return (
    <div className={classes.fireworksContainer} ref={refFireworks}>
      <div className={classes.fireworksTitle} >
        <Typography>Glückwunsch</Typography>
        <audio ref={refCow} src="http://www.classicalmusicproject.com/Joshuahomework/Bessie.wav" />
        <Button className={classes.button} onClick={() => play(refCow.current)}>Mooo</Button>
      </div>
    </div>
  )
}

export default FireWorks;
