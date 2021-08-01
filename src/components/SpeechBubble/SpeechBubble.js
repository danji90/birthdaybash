import React from 'react';
import { makeStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const defaultAnchor = {
  right: 138,
  bottom: -11,
  transform: 'rotate(183deg)',
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
      borderRadius: (props) =>
        `${props.width || 200}px / ${props.height || 75}px`,
      padding: (props) => props.padding || 50,
      backgroundColor: 'white',
      position: 'relative',
      zIndex: 3,
      border: (props) => (props.border ? '4px solid #e0e0e0' : 0),
      boxSizing: 'border-box',
    },
    anchor: {
      position: 'absolute',
      transform: (props) => props.anchor.transform,
      right: (props) => props.anchor.right,
      left: (props) => props.anchor.left,
      bottom: (props) => props.anchor.bottom,
      top: (props) => props.anchor.top,
      zIndex: 4,
    },
    anchorFill: {
      position: 'absolute',
      clipPath: 'polygon(80% 0, 100% 100%, 0 100%)',
      backgroundColor: 'white',
      width: 40,
      height: 40,
      top: 10,
      left: 1,
      zIndex: 3,
    },
    anchorBorder: {
      visibility: (props) => (props.border ? 'visible' : 'hidden'),
      position: 'absolute',
      clipPath: 'polygon(80% 0, 100% 100%, 0 100%)',
      backgroundColor: '#e0e0e0',
      width: 45,
      height: 45,
      zIndex: 1,
    },
  };
});

const SpeechBubble = ({
  children,
  width,
  height,
  anchor = defaultAnchor,
  containerStyle,
  border,
  padding,
}) => {
  const classes = useStyles({ width, height, anchor, border, padding });

  return (
    <div style={containerStyle}>
      <div className={classes.wrapper}>
        <div className={classes.speechBubble}>{children}</div>
        <div className={classes.anchor}>
          <div style={{ position: 'relative' }}>
            <div className={classes.anchorBorder} />
            <div className={classes.anchorFill} />
          </div>
        </div>
      </div>
    </div>
  );
};

SpeechBubble.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
  height: PropTypes.number,
  anchor: PropTypes.object,
  containerStyle: PropTypes.object,
  border: PropTypes.number,
  padding: PropTypes.number,
};

SpeechBubble.defaultProps = {
  children: undefined,
  width: undefined,
  height: undefined,
  anchor: undefined,
  containerStyle: undefined,
  border: undefined,
  padding: undefined,
};

export default SpeechBubble;
