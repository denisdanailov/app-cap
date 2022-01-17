import { Container, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fireDb from '../../services/firebaseDatabase'
import Box from '@mui/material/Box';
import { CssBaseline } from '@material-ui/core';
import useStyles from './styles';
import { Grid } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import Card from '@mui/material/Card';
import StarRateIcon from '@mui/icons-material/StarRate';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


export default function View() {

    const classes = useStyles();

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        fireDb
            .child(`products/${id}`)
            .get()
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProduct({ ...snapshot.val() })
                } else {
                    setProduct({});
                }
            })
        setLoading(false);
    }, [id]);

    function onAdd(e) {
        e.preventDefault();
        fireDb.child("ordered-products").push(product);
    }


    return (
        <div className={classes.root}>
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
                        <Typography className={classes.headerTitle}
                            sx={{ letterSpacing: 25, textTransform: 'uppercase', fontSize: '4rem' }}
                            component="h1"
                            variant="h2"
                            align="center"
                            color="white"
                            gutterBottom
                            fontWeight={600}
                        >
                            {product.productName}
                        </Typography>
                        <Typography variant="h5" align="center" color="white" paragraph className={classes.headerText}>
                            It`s a good choice! This is a very nice Cap!
                        </Typography>
                    </Container>
                </Box>
            </div>
            <div id="product" >
                {loading ?
                    <Grid container component="main" className={classes.product} justifyContent="center" alignItems="center" >
                        <Box sx={{ display: 'flex' }} justifyContent="center" alignItems="center" minHeight={400} >
                            <CircularProgress />
                        </Box>
                    </Grid>
                    : <Grid container component="main" className={classes.product} >
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', ml: 15, mb: 15, mt: 15 }} >
                            <CardMedia
                                component="img"
                                height="500"
                                image={product.imageUrl}
                                alt="cap-1"
                                title="Contemplative Reptile"
                            />
                        </Card>
                        <Box sx={{
                            mt: 15,
                            ml: 35,
                            maxWidth: 400
                        }} >
                            <Typography
                                className={classes.name} Î
                                variant="h3"
                                align="left"
                                fontWeight={600}

                            > {product.productName}
                            </Typography>
                            <Typography
                                className={classes.rating} Î
                                variant="h5"
                                align="left"
                                fontWeight={600}
                            > Rating 6.0 <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
                            </Typography>
                            <Typography className={classes.description}
                                variant="h5"
                                align="left"
                            > {product.description}
                            </Typography>
                            <Typography className={classes.price}
                                variant="h5"
                                align="left"
                            > {product.price}
                            </Typography>
                            <Button variant="outlined" size='large' className={classes.addBtn} color="inherit" sx={{ mr: 2 }} onClick={onAdd} >Add To Card</Button>
                            <Link to={'/checkout'} style={{ textDecoration: 'none' }} >
                                <Button variant="outlined" size='large' color="inherit" sx={{ mr: 1 }} >Go To Card</Button>
                            </Link>
                            <Link to={'/products/'} >
                                <Button size='large' color="inherit" ><ArrowBackIosNewIcon /></Button>
                            </Link>
                        </Box>
                    </Grid>}
            </div>
        </div>
    );
}