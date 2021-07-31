import React, { useState, useEffect, useRef } from 'react';
import { makeStyles, Button } from '@material-ui/core';

import Fridge from '../Fridge/Fridge';
import explosion from '../../images/explosion2.gif';
import zap from '../../images/hit.png';
import CowModal from '../CowModal/CowModal';

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
      height: 500,
      width: 250,
      '& svg': {
        transform: 'scale(0.8)'
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
      maxHeight: 800,
      zIndex: 3,
    },
    hit: {
      position: 'absolute',
      height: 100,
      width: 100,
      zIndex: 3,
    },
    modal: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5) !important',
      zIndex: 1300,
    },
    modalContent: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
});

let explodeTimeout;
let hitTimeout;

function FridgeBash() {
  const classes = useStyles();
  const fridgeBashRef = useRef();
  const [modalOpen, setModalOpen] = useState(true);
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
    <div id="fridge-bash" className={classes.fridgeBash} ref={fridgeBashRef}>
      {modalOpen && (
        <CowModal onClick={() => setModalOpen(false)} bubbleStyle={{ maxWidth: '50%', minWidth: 250 }} rotation={5}>
          <p>Zuerst lassen wir etwas Dampf ab. Lass all deinen Frust auf vergangene Sorgen raus, auf nimmer Wiedersehen! </p>
          <p>Schlag den alten, kaputten Kühlschrank aus deinem Gedächtnis!</p>
        </CowModal>
      )}
      <div style={{ padding: '20px 0' }}>
        {explode && <img className={classes.explode} src={explosion} alt="explode" />}
        {fridgeHits < 10 && ( 
        <Button
          className={`${classes.fridge}`}
          onClick={(evt) => {
            const clickCoordinate = {
              left: evt.nativeEvent.layerX - 50,
              top: evt.nativeEvent.layerY - 100,
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
