import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({

    root:{
        minHeight: '100vh',
        
        '@media (max-width:490px)': { 
          display: 'none',
          
        }
      },
     
      productsBtn: {
        color: '#fff',
        borderColor: '#fff',
        fontSize: '30px',
        marginTop: '20px',
        marginLeft: '120px',
      },
    
      products: {
        fontStyle: 'normal',
        textDecoration: 'none'
      },
    
      aboutProducts: {
        display: 'flex',
        alignItems: 'center',
        
      },
    
      
}))

