import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
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
    }
  }
})

function FireWorks() {
  const classes = useStyles();
  const ref = useRef();
  const [fireWorks, setFireWorks] = useState(null);

  useEffect(() => {
      const container = ref.current;
      if (ref.current && !fireWorks) {
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
        setFireWorks(new FireworkCanvas(container, options))
      }
  }, [ref, fireWorks]);

  if (fireWorks) {
    fireWorks.start();
  }

  return (
    <div className={classes.fireworksContainer} ref={ref}>
      <div className={classes.fireworksTitle} >
        Hello World
      </div>
    </div>
  )
}

export default FireWorks;
