
import { Container, Typography } from "@material-ui/core"
import useStyles from './styles';
import Gird from '@material-ui/core/Grid/Grid';
import Box from '@material-ui/core/Box/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Breadcrumbs } from "@material-ui/core";
import { Link } from 'react-router-dom';


const noPointer = { cursor: 'pointer' };

export default function Footer() {
  const classes = useStyles();

  return (
    <footer >
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 3, sm: 5 }}
        bgcolor="textSecondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Gird container spacing={5}>
            <Gird item xs={12} sm={4}>
              <Box borderBottom={1} className={classes.logo} >appCap </Box>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,</p>

              <FacebookIcon fontSize={"large"} onClick={() => window.open("https://www.facebook.com")} style={noPointer} />
              <TwitterIcon fontSize={"large"} onClick={() => window.open("https://www.twitter.com")} style={noPointer} />
              <LinkedInIcon fontSize={"large"} onClick={() => window.open("https://www.Linkedin.com")} style={noPointer} />
              <GitHubIcon fontSize={"large"} onClick={() => window.open("https://www.github.com")} style={noPointer} />

            </Gird>
            <Gird item xs={12} sm={4} justify="center" >
              <Box className={classes.contact} sx={{ mt: 3, mb: 2 }} >Contact</Box>
              <Typography variant="h6" align="center" >
                <LocationOnIcon sx={{ mr: 2 }} />
                Frankfurt, Germany
              </Typography>
              <Typography variant="h6" align="center"  >
                <LocalPhoneIcon sx={{ mr: 5 }} />
                +49 01 01 01 01
              </Typography>
              <Typography variant="h6"  align="center" >
                <EmailIcon sx={{ mr: 4 }} />
                capp@email.com
              </Typography>

            </Gird>
            <Gird item xs={12} sm={4} >
              <Box className={classes.links} sx={{ mt: 3, mb: 2 }} >Links</Box>
                <Breadcrumbs aria-label="breadcrumb" color="white" >
                   <Link to={'/'} style={{ color: 'white', fontSize: '2rem', textDecoration: 'none'}} >
                  <Typography>
                       Home
                  </Typography>
                  </Link>
                  <Link to={'/products'} style={{ color: 'white', fontSize: '2rem', textDecoration: 'none'}} >
                  <Typography>
                       Products
                  </Typography>
                  </Link>
                  <Link to={'/checkout'} style={{ color: 'white', fontSize: '2rem', textDecoration: 'none'}} >
                  <Typography >
                       Checkout
                  </Typography>
                  </Link>
                </Breadcrumbs>
            </Gird>
          </Gird>
          <Box textAlign={"center"} pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Copyrigtht appCap &reg; 2022
          </Box>
        </Container>
      </Box>
    </footer>
  )
}