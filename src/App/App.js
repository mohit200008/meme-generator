import React from 'react';
import { Route, Switch } from 'react-router';
import { Meme } from '../Meme/Meme';
import {MemeGenerated } from '../MemeGenerated/MemeGenerated';
// import styles from './styles.module.css';


export const App=()=> {
  return (
    <Switch>
      <Route exact path='/'>
       <Meme />
      </Route>
      <Route path='/generated'>
       <MemeGenerated />
      </Route>


    </Switch> 
  );
    
}

export default App;
