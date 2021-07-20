import React from 'react';
import { makeStyles } from '@material-ui/core';

const defaultAnchor = {
  right: 100
};

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      position: 'relative',
      paddingBottom: 30,
    },
    speechBubble: {
      color: 'black',
      width: (props) => props.width || 'auto',
      height: (props) => props.height || 'auto',
      borderRadius: (props) => `${props.width || 200}px / ${props.height || 75}px`,
      padding: 50,
      backgroundColor: 'white',
      position: 'relative',
      zIndex: 1,
      "&:before": {
        position: 'absolute',
        right: (props) => props.anchor.right,
        left: (props) => props.anchor.left,
        transform: (props) => props.anchor === 'right' ? 'rotate(345deg)' : 'rotate(45deg)',
        bottom: -10,
        boxSizing: 'border-box',
        content: "''",
        borderTop: '0',
        borderBottom: '60px solid transparent',
        borderRight: '60px solid white',
        zIndex: 0
      }
    },
    
  }
});

const SpeechBubble = ({ children, width, height, anchor=defaultAnchor, containerStyle }) => {
  const classes = useStyles({ width, height, anchor });

  return (
    <div style={containerStyle}>
      <div className={classes.wrapper}>
        <div className={classes.speechBubble}>{children}</div>
      </div>
    </div>
  )
}

export default SpeechBubble;
