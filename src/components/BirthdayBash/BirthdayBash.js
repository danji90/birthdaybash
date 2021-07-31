import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import * as FireworkCanvas from 'fireworks-canvas';

import CowMeadow from '../CowMeadow/CowMeadow.js';
import Intro from '../Intro/Intro.js';
import Outro from '../Outro/Outro.js';
import FridgeBash from '../FridgeBash/FridgeBash.js';
import BikeBash from '../BikeBash/BikeBash.js';
import NeighbourPrank from '../NeighbourPrank/NeighbourPrank.js';

const useStyles = makeStyles((theme) => {
  return {
    fireworksContainer: {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      overflowY: 'auto',
      overflowX: 'hidden',
    },
    appContent: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    mainContainer: {
      backgroundColor: 'transparent',
      width: '100vw',
      maxWidth: 1000,
    },
  }
})

const disableScroll = (evt) => {
  evt.preventDefault();
  evt.stopPropagation();
}

function BirthdayBash() {
  const classes = useStyles();
  const refFireworks = useRef();
  const refAppContent = useRef();
  const [fireWorks, setFireWorks] = useState(null);

  useEffect(() => {
    if (refAppContent && refAppContent.current) {
      refAppContent.current.addEventListener('mousewheel', disableScroll);
      refAppContent.current.addEventListener('touchmove', disableScroll);
    }
  }, [refAppContent])

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
      <div className={classes.appContent} ref={refAppContent}>
        <div className={classes.mainContainer}>
          <Intro />
          <FridgeBash />
          <BikeBash />
          <NeighbourPrank />
          <CowMeadow />
          <Outro />
        </div>
      </div>
    </>
  )
}

export default BirthdayBash;
