import React, { useState, useEffect } from 'react';
import { makeStyles, Button } from '@material-ui/core';

import Fridge from '../Fridge/Fridge';
import explosion from '../../images/explosion2.gif';
import zap from '../../images/hit.png';

const useStyles = makeStyles((theme) => {
  return {
    fridgeBash: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }, 
    fridge: {
      animation: '$pulseFridge 1s infinite',
      padding: '20px 0',
      height: 200,
      '& svg': {
        width: '100%',
        height: '100%',
      },
      zIndex: 2,
      position: 'relative',
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
          const bikeBash = document.getElementById('bike-bash');
          bikeBash.scrollIntoView({ behavior: 'smooth'});
        }, 800);
      }
  }, [explode, hit, fridgeHits]);

  return (
    <div id="fridge-bash" className={classes.fridgeBash}>
      <div style={{ padding: '20px 0' }}>
        {explode && <img className={classes.explode} src={explosion} alt="explode" />}
        {fridgeHits < 10 && ( 
        <Button
          className={`${classes.fridge}`}
          onClick={(evt) => {
            const clickCoordinate = {
              left: evt.nativeEvent.layerX - 40,
              top: evt.nativeEvent.layerY - 220,
            };
            setHit(clickCoordinate)
            setFridgeHits(fridgeHits + 1);
            if (fridgeHits >= 9) {
              setExplode(true);
            }
          }}
        >
          {hit && <img style={{ top: hit.top, left: hit.left}} className={classes.hit} src={zap} alt="explode" />}
          <Fridge />
        </Button>)}
      </div>
    </div>
  )
}

export default FridgeBash;
