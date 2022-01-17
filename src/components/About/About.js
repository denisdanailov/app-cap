import React from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@material-ui/core/Button/Button';
import { Link } from 'react-router-dom'
import useStyles from './styles';


export default function About() {
 
  const classes = useStyles();

  return (
   
    <div className={classes.root} id="about">
      <Box
          sx={{
            bgcolor: 'white',
            pt: 10,
            pb: 6,
            borderTop: 2,
            borderColor: 'black',
            borderBottom: 2
          }}
        >
          <Container maxWidth="sm">
            <Typography 
              component="h1"
              variant="h1"
              align="center"
              color="text.primary"
              gutterBottom
              fontWeight={600}
              fontFamily="Oooh Baby"
            >
              App Capp
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Welcome to my first React app. Content is an online store selling Caps. There is a user platform, Products Catalog, Login and Register.
            </Typography>
          </Container>
        </Box>
      <Grid container component="main" sx={{ height: '135vh',  borderBottom: 2 ,borderColor: 'white' }} >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "assets/about-image.jpg"})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%'
            
          }}
        />
         <Box
          sx={{
            bgcolor: '#404040',
            pt: 4,
            pb: 4,
            width: '50%' 
           
          }}
        >
          <Container maxWidth="sm" className={classes.aboutProducts}>
           
            <Typography
             component="h1"
             variant="h3"
             color="#fff"
             fontSize={'3.5rem'}
             gutterBottom
             fontWeight={600}
             paragraph
             sx={{
              mt:25    
            }}>
            We sells fashion hats that are all about style and honors the classic hat designs that will never go out of style!
            </Typography>
            <Link className={classes.products} to="/products"  >
            <Button variant="outlined" size='small' className={classes.productsBtn} >Products</Button>
            </Link>
          </Container>
        </Box>
         </Grid> 
    </div>
  );
}
