import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import EmployeeDetails from './components/RetentionForm.js';
import EmployeeDetailsScreen from './components/StatusScreen.js';
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
  Box,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const SidePanel = styled('div')(({ theme }) => ({
  width: '200px',
  backgroundColor: '#fff',
  color: '#888',
  paddingTop: '70px',
  display: 'none',
  '@media (min-width: 600px)': {
    display: 'block',
  },
}));

const SidePanelContent = styled('div')({
  paddingTop: '20px', // Add space at the top
});

const SidePanelItem = styled(NavLink)(({ theme }) => ({
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  color: '#888',
  textDecoration: 'none',
  '&:hover': {
    color: '#000',
  },
  '&.active': {
    color: '#000',
    fontWeight: 'bold',
  },
}));

const SidePanelItemText = styled('span')({
  marginRight: '10px',
});

function App() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('ASDM');
  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  return (
    <Router>
     <AppBar position="fixed" color="primary" sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidePanel}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Retention Request</Typography>
          <Select
            value={dropdownValue}
            onChange={handleDropdownChange}
            sx={{ marginLeft: 'auto', color: '#fff' }}
          >
            <MenuItem value="ASDM">ASDM</MenuItem>
            <MenuItem value="VH/UH/VDH">VH/UH/VDH</MenuItem>
            <MenuItem value="HRBP">HRBP</MenuItem>
            <MenuItem value="HR Geo Head">HR Geo Head</MenuItem>
            <MenuItem value="CPO">CPO</MenuItem>
          </Select>
          <Button
            className="transparent-button"
            style={{ marginLeft: '10px', backgroundColor: 'transparent', color: '#fff' }}
          >
            Raise Request
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex' }}>
        <Box
          component={SidePanel}
          sx={{
            flexShrink: 0,
            p: 2,
            display: isSidePanelOpen ? 'block' : 'none',
          }}
        >
          <SidePanelContent>
            <ul>
              <li>
                <SidePanelItem
                  exact
                  to="/"
                  style={{ textDecoration: 'none' }}
                  activeClassName="active"
                  onClick={() => setSidePanelOpen(false)}
                >
                  <SidePanelItemText>Dashboard</SidePanelItemText>
                </SidePanelItem>
              </li>
              <li>
                <SidePanelItem
                  to="/RetentionForm"
                  style={{ textDecoration: 'none' }}
                  activeClassName="active"
                  onClick={() => setSidePanelOpen(false)}
                >
                  <SidePanelItemText>Approvals</SidePanelItemText>
                </SidePanelItem>
              </li>
              <li>
                <SidePanelItem
                  to="/Status"
                  style={{ textDecoration: 'none' }}
                  activeClassName="active"
                  onClick={() => setSidePanelOpen(false)}
                >
                  <SidePanelItemText>Description</SidePanelItemText>
                </SidePanelItem>
              </li>
            </ul>
          </SidePanelContent>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/RetentionForm" element={<EmployeeDetails />} />
            <Route path="/Status/:employeeId" element={<EmployeeDetailsScreen dropdownValue={dropdownValue}/>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
