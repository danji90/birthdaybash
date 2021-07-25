import React, { useState, useEffect } from 'react';
import { makeStyles, Button } from '@material-ui/core';

import explosion from '../../images/explosion2.gif';
import zap from '../../images/hit.png';
import Bicycle from '../Bicycle/Bicycle';
import CowModal from '../CowModal/CowModal';

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
  const [modalOpen, setModalOpen] = useState(true);

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
            const neighbour = document.getElementById('neighbour-prank');
            neighbour.scrollIntoView({ behavior: 'smooth'});
          }, 800);
        }
  }, [explode, hit]);

  return (
    <div id="bike-bash" className={classes.bikeBash}>
      {modalOpen && (
        <CowModal onClick={() => setModalOpen(false)} rotation={-10}>
          <div>Mach weiter mit deiner alten Stadtschlampe!</div>
        </CowModal>
      )}
      <div style={{ padding: '20px 0' }}>
        {explode && <img className={classes.explode} src={explosion} alt="explode" />}
        {fridgeHits < 10 && ( 
        <Button
          className={`${classes.bike}`}
          onClick={(evt) => {
            const clickCoordinate = {
              left: evt.nativeEvent.layerX - 50,
              top: evt.nativeEvent.layerY - 30,
            };
            setHit(clickCoordinate)
            setFridgeHits(fridgeHits + 1);
            if (fridgeHits >= 9) {
              setExplode(true);
            }
          }}
        >
          {hit && <img style={{ top: hit.top, left: hit.left}} className={classes.hit} src={zap} alt="explode" />}
          <Bicycle />
        </Button>
        )}
      </div>
    </div>
  )
}

export default FridgeBash;
