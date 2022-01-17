import useStyles from './styles';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CssBaseline } from '@material-ui/core';
import fireDb from '../../services/firebaseDatabase'
import { useState, useEffect } from 'react'
import CardProduct from '../CardProduct/CardProduct';


export default function Products() {

  const classes = useStyles();

  const [data, setData] = useState({});

  useEffect(() => {
      fireDb.child("products").on("value", (snapshot) => {
          if (snapshot.val() !== null) {
              setData({ ...snapshot.val() });
          } else {
              setData({});
          }
      });
  }, []);

  return (
    <div className={classes.root} id="products">
         <CssBaseline />
      <div className='header'>
        <Box
          sx={{
            pt: 20,
            pb: 6,
            borderBottom: 2, borderColor: '#0D0D0D',
          }}
        >
          <Container maxWidth="sm" >
            <Typography 
              sx={{ letterSpacing: 25, textTransform: 'uppercase', fontSize: '4rem' }}
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
              fontWeight={600}
            >
              Products 
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
               Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
          </Container>
        </Box>
      </div>
      <CardProduct />
    </div>
  );
}
