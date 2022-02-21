import { makeStyles } from '@material-ui/core';
import { textAlign } from '@mui/system';


export default makeStyles(() => ({

  root: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/header-img.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
   
  },

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
    fontSize: '2rem',

  },

  icon: {
    color: '#fff',
    fontSize: '2rem',
  },

  container: {
    marginLeft: '120px',
    fontFamily: 'DM Serif Display',

  },
  colorText: {
    color: '#fff',
    fontFamily: 'Oooh Baby',
    fontSize: '5rem',
    '@media (max-width:490px)': { 
      fontSize: '3rem',
      
    }
  },

  title: {
    color: 'black',
    fontSize: '3.3rem',
    '@media (max-width:490px)': { 
      fontSize: '2.3rem',
      marginLeft: '-70px',
      textAlign: 'left'
    }
  },

  goDown: {
    color: '#fff',
    fontSize: '3em',
    
  }


}));

