import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({

  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/products-image.jpg"})`,
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

  },

  headerTitle: {
    fontWeight: '600',
    color: 'white',

  },

  headerText: {
    color: 'white'
  },

  product: {
    backgroundColor: "white"
  },

  name: {
    fontWeight: '800',
    marginBottom: 15
  },

  price: {
    fontSize: '40px',
    fontWeight: '600',
    marginTop: 25,
    marginBottom: 20
  },

  rating: {
    fontWeight: '600',
    marginBottom: 20
  },


}));