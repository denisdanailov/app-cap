import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import useStyles from './styles';
import { TextField } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import fireDb from '../../services/firebaseDatabase'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const initialState = {
    productName: "",
    imageUrl: "",
    price: "",
    description: "",
}

export default function AddDialog() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [add, setAdd] = React.useState('');
    const [state, setState] = React.useState(initialState);
    const [error, setError] = React.useState('');

    const { productName, imageUrl, price, description } = state;

    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setAdd('');
        setError('');
    };

    const onAdd = (event) => {
        event.preventDefault();

        if (productName.length === 0 || imageUrl.length === 0 || description.length === 0 || price.length === 0) {
            setError(<Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">Please fill all fields!</Alert>
            </Stack>)
        } else {

            fireDb.child("products").push(state, (err) => {
                if (err) {
                    setError(<Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="error">{err}</Alert>
                    </Stack>)
                } else {
                    setAdd(
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="success">This Cap added successfully — check it out!</Alert>
                        </Stack>
                    )
                    setTimeout(() => {
                        setOpen(false);
                        setAdd('');
                        navigate('/products');
                    }, 2000);

                }

            })
        }

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });

    };


    return (
        <React.Fragment>
            {currentUser ? <Button variant="outlined" size='small' className={classes.addBtn} onClick={handleClickOpen}>
                Add Cap
            </Button> 
            : <Link to="/login">  <Button variant="outlined" size='small' className={classes.addBtn}  >
                Log in
            </Button>
            </Link> }

            <Dialog
                open={open}
                onClose={handleClose}
                onSubmit={onAdd}
            >
                <DialogTitle>Add Cap</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {add ? add : " Add your Cap-Name, Cap-Image and Price"}
                        {error ? error : null}
                    </DialogContentText>

                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    >
                        {add ? null :
                            <FormControl sx={{ mt: 2, minWidth: 120 }}>
                                <TextField required
                                    id="productName"
                                    name="productName"
                                    label="Cap-Name"
                                    value={productName}
                                    sx={{ mb: 2 }}
                                    onChange={handleInputChange}
                                />
                                <TextField required
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={imageUrl}
                                    label="Image-URL"
                                    style={{ width: 400 }}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    id="description"
                                    label="Description"
                                    name="description"
                                    value={description}
                                    style={{ width: 400 }}
                                    sx={{ mt: 2 }}
                                    onChange={handleInputChange}
                                />
                                <TextField required
                                    id="price"
                                    label="Price"
                                    name="price"
                                    value={price}
                                    style={{ width: 100 }}
                                    sx={{ mt: 2 }}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        }
                    </Box>
                </DialogContent>
                {add ? null :
                    <DialogActions sx={{ justifyContent: "center", mb: 1 }}>
                        <Button variant="outlined" color="inherit" onClick={onAdd}  >Add</Button>
                        <Button variant="outlined" color="inherit" onClick={handleClose}  >Close</Button>
                    </DialogActions>
                }
            </Dialog>
        </React.Fragment>
    );
}