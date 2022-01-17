import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({

  root: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/checkout-image.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

},

}));