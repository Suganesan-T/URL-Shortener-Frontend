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
import { Link } from "react-router-dom";
import { useState } from 'react';
import userService from './services/userInstance';


const defaultTheme = createTheme();

function Forgetpassword() {

  const [email,setEmail] = useState("")

    const handleForgetPassword = (e) => {
        e.preventDefault()
        userService.forgetPassword(email)
        .then(responce => {
            console.log(responce)
            alert(responce.data.message)
            setEmail("")
            // setTimeout(() => {
            //     navigate('/resetPassword/:resetToken')
            // }, 500);
        })
        .catch(error => {
            console.log(error)
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
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ width: '100%', height: '50px' }} mt={2} onSubmit={handleForgetPassword}>
          <Grid container spacing={2}>
            <Grid item xs={25} sm={25} >
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                sx={{ width: '100%', height: '50px' }}
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
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
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/">
                 Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  )
}

export default Forgetpassword