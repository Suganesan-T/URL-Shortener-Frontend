import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const defaultTheme = createTheme();
function Resetpassword() {

    let { randomString } = useParams();
    const [Password, setPassword] = useState('');
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(randomString)
        axios.put(`http://localhost:4000/changePassword/${randomString}`, { Password })
        .then(responce => {
            alert(responce.data.message)
    
            //clear the form
            setPassword("")
    
            //redirect to login page
            setTimeout(() => {
              navigate("/")
            }, 500);
          })
          .catch(error => {
            alert(error.response.data.message);
        })
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Reset Password
                    </Typography>
                    <Box component="form" noValidate sx={{ width: '100%', height: '50px' }} mt={2} onSubmit={handleSubmit} >
                        <Grid container spacing={2}>
                            <Grid item xs={25} sm={25} >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="Password"
                                    label="Password"
                                    type="Password"
                                    id="Password"
                                    autoComplete="current-password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Resetpassword