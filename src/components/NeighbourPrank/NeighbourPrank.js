import React, { useState, useEffect } from 'react';
import { makeStyles, Button, Slide } from '@material-ui/core';

import explosion from '../../images/explosion2.gif';
import zap from '../../images/hit.png';
import Bicycle from '../Bicycle/Bicycle';
import CowModal from '../CowModal/CowModal';
import Neighbour from '../Neighbour/Neighbour';
import CardBox from '../CardBox/CardBox';

const useStyles = makeStyles((theme) => {
  return {
    neighbourPrank: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    neighbourWrapper: {
      position: 'relative',
    },
    box: {
      position: 'absolute',
      top: -40,
      left: 40,
      zIndex: 1300,
    }
  }
});

let finishTimeout;

function NeighbourPrank() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(true);
  const [boxDropped, setBoxDropped] = useState(false);

  return (
    <div id="neighbour-prank" className={classes.neighbourPrank}>
      {modalOpen && (
        <CowModal onClick={() => setModalOpen(false)} rotation={-10}>
          <div>Setz Gerda der Nachbarin einen Karton auf den Kopf, damit sie dich nicht mehr findet und aufhört zu nörgeln.</div>
        </CowModal>
      )}
      <div className={classes.neighbourWrapper}>
        <Slide direction="down" in={boxDropped} mountOnEnter unmountOnExit>
          <div className={classes.box}>
            <CardBox height={250} width={250}/>
          </div>
        </Slide>
        <Button
          className={`${classes.bike}`}
          onClick={() => {
            setBoxDropped(true)
            clearTimeout(finishTimeout)
            finishTimeout = setTimeout(() => {
              const cowMeadow = document.getElementById('cow-meadow');
              cowMeadow.scrollIntoView({ behavior: 'smooth'});
            }, 1500)
          }}
        >
          <Neighbour />
        </Button>
      </div>
    </div>
  )
}

export default NeighbourPrank;
