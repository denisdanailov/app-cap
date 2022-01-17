import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({

  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/products-image.jpg"})`,
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
  }

}));