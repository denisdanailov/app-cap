import {  Collapse, IconButton } from '@material-ui/core';
import useStyles from './styles';
import React, { useState, useEffect } from 'react';
import { KeyboardArrowDown } from '@material-ui/icons';
import { Link as Scroll} from 'react-scroll'


export default function Header() {

  const [checked, setChecked] = useState(false);
  
  useEffect(() => {
    setChecked(true);
  }, [])

  const classes = useStyles();
  
  return (
   
    <div className={classes.root}>
      <Collapse 
      in={checked} 
      {...(checked ? {timeout: 1000} : {})}
      collapsedHeight={50}
      >
      <div className={classes.container}>
        <h1 className={classes.title}>
          Welcome to 
          <span className={classes.colorText} > appCap </span><br />  the amazing online shop  <br />of the World
        </h1>
        <Scroll to="about" smooth={true}>
        <IconButton>
          <KeyboardArrowDown className={classes.goDown} />
        </IconButton>
        </Scroll>
      </div>
      </Collapse>
    </div>
  );
}
