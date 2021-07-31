import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, makeStyles } from '@material-ui/core';
import { GiCow } from 'react-icons/gi'

import CowModal from '../CowModal/CowModal.js';

const useStyles = makeStyles((theme) => {
  return {
    landing: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      height: '100vh',
      margin: '0 20px'
    },
    list: {
      display: 'flex',
      padding: '10px 0',
      '& .MuiListItemIcon-alignItemsFlexStart': {
        marginRight: 8,
        marginTop: 5,
        minWidth: 20,
        minHeight: 20,
        '& svg': {
          height: '100%',
          width: '100%',
        }
      }
    }
  }
});

function Outro() {
  const classes = useStyles();
  const [next, setNext] = useState(false);

  return (
    <div id="outro" className={classes.landing}>
      {next !== 'end' && (
        <CowModal onClick={() => {
            if (!next) setNext('list');
            if (next === 'list') setNext('congratulate');
            if (next === 'congratulate') setNext('end');
          }}
          bubbleStyle={{ maxWidth: '50%', minWidth: 250, padding: 20 }} rotation={-30} isModal={false}
          bubblePadding={30}
        >
          {!next && (
            <>
              <p>Der digitale Teil des Geburtstagsbashs ist vorbei! Back to reality!</p>
              <p>Am Samstag den <strong>07.08.2021</strong> geht es weiter mit:</p>
            </>
          )}
          {next === 'list' && (
          <List >
            <ListItem className={classes.list} alignItems='flex-start'>
              <ListItemIcon><GiCow /></ListItemIcon>
              <ListItemText primary="Frühstück ans Bett!"/>
            </ListItem>
            <ListItem className={classes.list} alignItems='flex-start'>
              <ListItemIcon><GiCow /></ListItemIcon>
              <ListItemText primary="Friedensverinnerlichung mit Kaffee und Kuchen"/>
            </ListItem>
            <ListItem className={classes.list} alignItems='flex-start'>
              <ListItemIcon><GiCow /></ListItemIcon>
              <ListItemText primary="Überraschung in freier Natur"/>
            </ListItem>
          </List>
          )}
          {next === 'congratulate' && (
            <h2>Happy Birthday!</h2>
          )}
        </CowModal>
      )}
      {next === 'end' &&
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/WzQf5aJ7f0E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      }
    </div>
  )
}

export default Outro;
