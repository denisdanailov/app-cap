import { AppBar, IconButton, Toolbar, Badge } from '@material-ui/core';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import Person from '@material-ui/icons/Person';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button/Button';
import { useAuth } from '../../contexts/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState, useEffect } from 'react';
import fireDb from '../../services/firebaseDatabase'
import useStyles from './styles';


export default function NavBar() {

  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const { currentUser, logout } = useAuth();

  const classes = useStyles();

  useEffect(() => {
    fireDb.child("ordered-products").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

  }, []);

  const products = Object.keys(data);

  async function handleLogout() {
    setError('')

    try {
      await logout()

    } catch {
      setError('Failed to log out')
    }

  }

  let guestNavigation = (

    <Toolbar  className={classes.appbarWrapper}>
      <Link className={classes.appbarTitle} style={{ color: 'white' }} to="/">
        <h1 className={classes.appbarTitle} >appCap</h1>
      </Link>
      <Link className={classes.products} to="/products"  >
        <Button variant="outlined" size='medium' className={classes.products} >Products</Button>
      </Link>
      <Link className={classes.userIcon} to="/login">
        <IconButton>
          <Person className={classes.userIcon} />
        </IconButton>
      </Link>
    </Toolbar>
  );

  let userNavigation = (
    
    <Toolbar className={classes.appbarWrapper}>
      <Link className={classes.appbarTitle} style={{ color: 'white' }} to="/">
        <h1 className={classes.appbarTitle} >appCap</h1>
      </Link>
      <Link className={classes.products} to="/products" >
        <Button variant="outlined" size='medium' className={classes.products}>Products</Button>
      </Link>
      <Link className={classes.products} to="/checkout"  >
        <IconButton>
          <Badge badgeContent={products.length} color="error">
            <ShoppingCartOutlined className={classes.iconBag} />
          </Badge>
        </IconButton>
      </Link>
      <LogoutIcon sx={{ fontSize: 28 }} className={classes.logoutIcon} onClick={handleLogout} />
    </Toolbar>
  );

  return (
    <AppBar position='absolute'  className={classes.appbar} elevation={0}  >

      {currentUser
        ? userNavigation
        : guestNavigation}

    </AppBar>

  );
}