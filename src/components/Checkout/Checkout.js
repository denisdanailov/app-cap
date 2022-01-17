import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import fireDb from '../../services/firebaseDatabase'
import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button/Button';
import DialogActions from '@mui/material/DialogActions';
import useStyles from './styles';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';


const theme = createTheme();

export default function Checkout() {

    const classes = useStyles();

    const [data, setData] = useState({});
    const [order, setOrder] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fireDb.child("ordered-products").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() });
            } else {
                setData({});
            }
        });

    }, []);

    const products = Object.values(data);

    let totalSum = 0;
    products.map((product) => {
        totalSum += Number(product.price)
    });

    const onOrder = (event) => {
        event.preventDefault();

        fireDb.child('ordered-products').remove((err) => {
            if (err) {
                console.log(err);
            } 
        })

        if (products.length > 0) {

            setOrder(
                <Box className={classes.root}>
                    <Container component="main" maxWidth="lg" sx={{ mb: 25 }}  >
                        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                            <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
                                Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                                Your order number is #2001539. We have emailed your order
                                confirmation, and will send you an update when your order has
                                shipped.
                            </Typography>
                        </Paper>
                    </Container>
                </Box>
            )
        } else {
            setError(

                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">Your Bag is empty</Alert>
                    <Link to="/products"  >
                        <DialogActions sx={{ justifyContent: "center", mb: 1 }}>
                            <Button variant="outlined" color="inherit"  >GO SHOPPING</Button>
                        </DialogActions>
                    </Link>
                </Stack>
                )}}


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {order ? order :
                <Box className={classes.root}>
                    <Container component="main" maxWidth="lg" sx={{ mb: 25 }}  >
                        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                            <Typography component="h1" variant="h4" align="center"  >
                                Checkout
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Order summary
                            </Typography>
                            <List disablePadding>
                                {products.map((product) => (
                                    <ListItem key={product.productName} sx={{ py: 1, px: 0 }}>
                                        {/* <img src={product.imageUrl} alt="Girl in a jacket" width="150" height="200" /> */}
                                        <ListItemText primary={product.productName} secondary={product.desc} />
                                        <Typography variant="body2">{product.price} $</Typography>
                                    </ListItem>
                                ))}
                                <ListItem sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="Total" />
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                        {totalSum.toFixed(2)} $
                                    </Typography>
                                </ListItem>
                            </List>
                            {error ? error :
                                <DialogActions sx={{ justifyContent: "center", mb: 1 }}>
                                    <Button variant="outlined" color="inherit" onClick={onOrder} >Place order</Button>
                                </DialogActions>}
                        </Paper>
                    </Container>
                </Box>}
        </ThemeProvider>
    );
}