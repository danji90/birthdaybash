import React, { useState, useEffect } from 'react';
import { makeStyles, Button } from '@material-ui/core';

import Cow2 from '../cows/Cow2';
import Cow3 from '../cows/Cow3';
import SpeechBubble from '../SpeechBubble/SpeechBubble';
import Fridge from '../Fridge/Fridge';
import explosion from '../../images/explosion2.gif';

const useStyles = makeStyles((theme) => {
  return {
    fridgeBash: {
      height: '100vh',
      padding: '20px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }, 
    fridge: {
      animation: '$pulseFridge 1s infinite',
      height: '80vh',
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
    }
  }
});

let explodeTimeout;

function FridgeBash() {
  const classes = useStyles();
  const [fridgeHits, setFridgeHits] = useState(0);
  const [explode, setExplode] = useState(false);

  useEffect(() => {
    clearTimeout(explodeTimeout);
    explodeTimeout = setTimeout(() => {
      if (explosion) {
        setExplode(false);
      }  
    }, 800);
  }, [explode]);

  return (
    <div id="fridge-bash" className={classes.fridgeBash}>
      <div style={{ padding: '20px 0' }}>
        {explode && <img className={classes.explode} src={explosion} alt="explode" />}
        {fridgeHits < 10 && ( 
        <Button
            className={`${classes.button} ${classes.fridge}`}
            onClick={() => {
              setFridgeHits(fridgeHits + 1);
              if (fridgeHits >= 9) {
                setExplode(true);
              }
            }}
          >
            <Fridge />
          </Button>
        )}
      </div>
    </div>
  )
}

export default FridgeBash;
