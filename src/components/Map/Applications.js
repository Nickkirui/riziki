
import  React, {useRef} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { database, auth } from '../../global/firebaseCofig'
import toast from 'react-hot-toast';


const theme = createTheme();

export default function AddLoan() {

  const loanRef = useRef()
  const interestRef = useRef()
  const durationRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    auth.onAuthStateChanged(user => {
      if(user){
        database.collection('LoanProducts').add({
          Loan: loanRef.current.value,
          interest : interestRef.current.value,
          duration : durationRef.current.value,
          
        }).then(()=> {
          
      toast.success('Loan added')
        }).catch(err => console.log(err.message))
      }
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
           Add Loan Product 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Loan"
              label="Loan Amount"
              name="loan"
              autoComplete="amount"
              autoFocus
              inputRef={loanRef}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="interest"
              label="Interest Rate"
              type="text"
              id="interest "
              autoComplete="interest"
              inputRef={interestRef}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="duration"
              label="Duration"
              type="text"
              id="duration "
              autoComplete="duration"
              inputRef={durationRef}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ADD
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}