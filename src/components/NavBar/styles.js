import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({

  appbar: {
    background: 'none',
    fontFamily: 'Oooh Baby',

  },

  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },

  appbarTitle: {
    flexGrow: '1',
    fontSize: '2.5rem',
    textDecoration: 'none',
    '@media (max-width:490px)': { 
      marginLeft: '-10px',
      marginRight: '10px'
      
    }
  },

  iconBag: {
    color: 'white',
    fontSize: '1.8rem',
  },

  userIcon: {
    color: 'white',
    fontSize: '2rem',
  },

  products: {

    fontSize: '1rem',
    color: '#fff',
    textTransform: 'uppercase',
    fontStyle: 'normal',
    textDecoration: 'none',
  },

  logoutIcon: {
    cursor: 'pointer',
    
  }

}));
