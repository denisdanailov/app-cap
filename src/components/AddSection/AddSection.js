import useStyles from './styles';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Create from '../Create/Create'


export default function AddSection() {

  const classes = useStyles();
  
  return (

    <div className={classes.root} >
      <Box
        sx={{
          bgcolor: '#262626',
          pt: 2,
          pb: 6,

        }}
      >
        <Container maxWidth="lg" className={classes.addCap}>
          <Typography 
          component="h2"
          variant="h2"
          color="#fff"
          fontSize={'4rem'}
          fontWeight={600}
          letterSpacing={"1px"}
          sx={{
           mt: 5
            
          }}
          >
          Got a great Cap?
          </Typography>

          <Typography maxWidth="md"
            component="h3"
            variant="h3"
            color="#fff"
            fontSize={'1.5rem'}
            fontWeight={200}
            
            letterSpacing={"1px"}
            
            sx={{
              mb:10,
              mr: 10,
            }}>
              <h4>That you want to sell?</h4> Log in and upload your Cap quickly and easily to our customer Cap platform.

          </Typography>
          <Box
            component="img"
            sx={{
              height: 450,
              width: 650,
              marginLeft: 79,
              marginTop: -145,
              marginBottom: 5
            }}
            alt="Cap"
            src="https://i.ibb.co/kXjKNf3/appCap.png"
          />
          <Create />
        </Container>
      </Box>
    </div>
  );
}
