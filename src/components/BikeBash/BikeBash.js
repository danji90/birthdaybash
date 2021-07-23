import React, { useState, useEffect } from 'react';
import { makeStyles, Button } from '@material-ui/core';

import explosion from '../../images/explosion2.gif';
import zap from '../../images/hit.png';
import Bicycle from '../Bicycle/Bicycle';

const useStyles = makeStyles((theme) => {
  return {
    bikeBash: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }, 
    bike: {
      animation: '$pulseFridge 1s infinite',
      padding: '20px 0',
      '& svg': {
        width: '100%',
        height: '100%',
      },
      zIndex: 2,
    },
    "@keyframes pulseFridge": theme.createPulse(),
    explode: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height: '80vh',
      zIndex: 3,
    },
    hit: {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      height: 100,
      width: 100,
      zIndex: 3,
    }
  }
});

let explodeTimeout;
let hitTimeout;

function FridgeBash() {
  const classes = useStyles();
  const [fridgeHits, setFridgeHits] = useState(0);
  const [explode, setExplode] = useState(false);
  const [hit, setHit] = useState(false);

  useEffect(() => {
      if (hit) {
        clearTimeout(hitTimeout);
        hitTimeout = setTimeout(() => {
           setHit(false);
         }, 100);
       }
      if (explode) {
        clearTimeout(explodeTimeout);
         explodeTimeout = setTimeout(() => {
            setExplode(false);
            const cowMeadow = document.getElementById('cow-meadow');
            cowMeadow.scrollIntoView({ behavior: 'smooth'});
          }, 800);
        }
  }, [explode, hit]);

  return (
    <div id="bike-bash" className={classes.bikeBash}>
      <div style={{ padding: '20px 0' }}>
        {hit && <img style={{ top: hit.top, left: hit.left}} className={classes.hit} src={zap} alt="explode" />}
        {explode && <img className={classes.explode} src={explosion} alt="explode" />}
        {fridgeHits < 10 && ( 
        <Button
          className={`${classes.bike}`}
          onClick={(evt) => {
            const clickCoordinate = {
              left: evt.clientX,
              top: evt.clientY,
            };
            setHit(clickCoordinate)
            setFridgeHits(fridgeHits + 1);
            if (fridgeHits >= 9) {
              setExplode(true);
            }
          }}
        >
          <Bicycle />
        </Button>
        )}
      </div>
    </div>
  )
}

export default FridgeBash;
