import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

import SpeechBubble from '../SpeechBubble/SpeechBubble';
import CowFace from '../cows/CowFace';

const useStyles = makeStyles((theme) => {
    return {
      modal: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: (props) => props.isModal ? 'rgba(0, 0, 0, 0.5) !important' : undefined,
        zIndex: 1300,
      },
      modalContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      cowFace: {
        animation: '$cowFacePulse 1s infinite'
      },
      "@keyframes cowFacePulse": theme.createPulse(),
    }
  });

function CowModal({ children, onClick, rotation=0, bubbleStyle, isModal=true, bubblePadding }) {
    const classes = useStyles({ rotation, isModal });
    return (
        <Button className={classes.modal} onClick={() => onClick()}>
        <div className={classes.modalContent}>
          <SpeechBubble containerStyle={bubbleStyle} padding={bubblePadding}>
            {children}
          </SpeechBubble>
          <div style={{ transform: `rotate(${rotation}deg)` }}>
            <div className={classes.cowFace}>
                <CowFace width={200} height={200} />
            </div>
          </div>
        </div>
      </Button>
    )
}

export default CowModal
