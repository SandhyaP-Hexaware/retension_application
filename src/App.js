import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link,Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import EmployeeDetails from './components/RetentionForm';
import EmployeeDetailsScreen from './components/StatusScreen';
import {
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  AppBar,
  Toolbar,
} from '@mui/material';
function App() {
 return (
  <div>
    <AppBar position="fixed" color="primary" sx={{ paddingLeft: 0, paddingRight: 0 }}>
  <Toolbar>
    <Typography variant="h6">Retention Request</Typography>
    <Button variant="contained" style={{ marginLeft: 'auto', backgroundColor: '#eaf4f7', color: '#454545' }}>
      Raise Request
    </Button>
  </Toolbar>
</AppBar>
  <Router>
    
    <Routes>
    <Route exact path="/" element={<Dashboard />} />
    <Route path="/RetentionForm" element={<EmployeeDetails />} />
    <Route path="/Status" element={<EmployeeDetailsScreen />} />
    </Routes>
      
      
    </Router>
  </div>
    
  );
}

export default App;
