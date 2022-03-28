import React from 'react';
import './style.css';
import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  AppBar,
  Card,
  CardActions,
  CardContent,
  Grid,
  // Accordion,
  // AccordionSummary,
  // AccordionDetails,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, FilledInput, InputAdornment } from '@mui/material/';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Link to="/"> Dashboard </Link> &nbsp;
        <Link to="/contactus"> Contact Us </Link> &nbsp;
        <Link to="/user/3/course/10?sort=asc&filter=true"> User </Link> &nbsp;
        <Link to="/aboutus"> About Us </Link> &nbsp; */}
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/StudentLogin" element={<StudentLogin />}></Route>
          <Route path="/AdminLogin" element={<AdminLogin />}></Route>
        </Routes>
      </BrowserRouter>



    </>

  );
}

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2px', margin: '1px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Guvi
            </Typography>
            <Button onClick={() => navigate('/Login')} color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            XYZ Organization,
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            India
          </Typography>
          <Typography variant="body2">
            Learning is the key to success
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => navigate('/ContactUs')} size="small">CONTACT US</Button>
        </CardActions>
      </Card>
      <br />
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={() => navigate('/AdminLogin')}>Admin Login</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => navigate('/StudentLogin')}>Student Login</Button>
        </Grid>
      </Grid>

    </div>
  );
}

function ContactUs() {
  const navigate = useNavigate();
  return (
    <>
      <div className='contact'>
        <h3> ContactUs Component </h3>
        <h4>email : xyzqwer@hfjghty.com</h4>
        <h5>call : 123456789</h5>
        <Button variant="contained" onClick={() => navigate(-1)}>Go Back</Button>
      </div>

    </>
  );
}

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <TextField id="demo-helper-text-misaligned-no-helper" label="Email" />&nbsp;&nbsp;
      <MyPassword /><br /><br />
      <Button variant="contained" onClick={() => navigate(-1)}>Go Back</Button>&nbsp;&nbsp;&nbsp;
      <Button variant="contained">Submit</Button>
    </>
  );
}

function StudentLogin() {
  const navigate = useNavigate();
  return (
    <>
      <TextField id="demo-helper-text-misaligned-no-helper" label="Student ID" />&nbsp;&nbsp;
      <MyPassword /><br /><br />
      <Button variant="contained" onClick={() => navigate(-1)}>Go Back</Button>&nbsp;&nbsp;&nbsp;
      <Button variant="contained">Submit</Button>
      
    </>
  );
}

function AdminLogin() {
  const navigate = useNavigate();
  

  return (
    <>
      <TextField id="demo-helper-text-misaligned-no-helper" label="Admin ID" />&nbsp;&nbsp;
      <MyPassword /><br /><br />
      <Button variant="contained" onClick={() => navigate(-1)}>Go Back</Button>&nbsp;&nbsp;&nbsp;
      <Button variant="contained">Submit</Button>

    </>


  );
}

function MyPassword() {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ width: '25ch' }} variant="filled">
      <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
      <FilledInput
        id="filled-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
