import * as React from 'react';
import useStyles from './styles';
import { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import fireDb from '../../services/firebaseDatabase'
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function ProductCard() {

  const classes = useStyles();
  const { currentUser } = useAuth();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});


  useEffect(() => {
    fireDb.child("products").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      
      } else {
        setData({});
      }
    });
    setLoading(false);
  }, []);

  return (
    <div className={classes.root} >
      <NavBar />
      <Container sx={{ py: 15 }} >
        {loading
          ? <Box sx={{ display: 'flex' }} justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
          : <Grid container spacing={4}>
            {Object.keys(data).map((id) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    height="500"
                    image={data[id].imageUrl}
                    alt="cap-1"
                    title="Contemplative Reptile"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography sx={{ mb: 2 }} variant="h4" align='center' >

                      {data[id].productName}

                    </Typography>
                    <Typography gutterBottom variant="h5" fontWeight="bold" fontSize="2rem" align='center' >

                      {data[id].price} $

                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }} >

                    {currentUser ?

                      <Link to={`/products/${id}`}  >
                        <Button
                          variant="outlined"
                          size='large'
                          color="inherit"
                          sx={{ mb: 2 }}
                          className={classes.buyBtn}
                        >Buy Now</Button>
                      </Link>
                      
                      : <Button
                        sx={{ mb: 2 }}
                        variant="contained"
                        color="inherit"
                        size='large'
                        disabled={true}
                        className={classes.buyBtn}
                      >Buy Now</Button>}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>}
      </Container>
    </div>
  );
}