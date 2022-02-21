import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  
  addCap: {
    display: 'flex',
   
  },

  productsBtn: {
    color: '#fff',
    borderColor: '#fff',
    fontSize: '25px',
    marginTop: '-90px'
  },

  logoCap: {
    '@media (max-width:490px)': { 
      display: 'none',
      
    }
  }

}));