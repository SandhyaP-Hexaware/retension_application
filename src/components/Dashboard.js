import React, { useState } from 'react';
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
import { styled } from '@mui/material/styles';

const RootContainer = styled('div')({
    backgroundColor: '#eaf4f7',
    padding: '16px',
    paddingTop: '70px', // Added top padding to offset the app bar
  });
  

const SearchSection = styled('div')({
  marginBottom: '16px',
});

const GridContainer = styled('div')({
  backgroundColor: '#fff',
  padding: '16px',
  borderRadius: '8px',
});

const Dashboard = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    employeeId: '',
    billingType: '',
    status: '',
  });

  const handleSearchCriteriaChange = (event) => {
    setSearchCriteria({
      ...searchCriteria,
      [event.target.name]: event.target.value,
    });
  };

  // Dummy data
  const data = [
    {
      employeeId: '1234',
      tsr: 'TSR1',
      billingType: 'Type1',
      raisedBy: 'John Doe',
      raisedById: '456',
      status: 'Open',
    },
    {
      employeeId: '5678',
      tsr: 'TSR2',
      billingType: 'Type2',
      raisedBy: 'Jane Smith',
      raisedById: '789',
      status: 'Awaiting Approval',
    },
    // Add more dummy data here
  ];

  const filterData = (item) => {
    const { employeeId, billingType, status } = searchCriteria;

    return (
      (!employeeId || item.employeeId.includes(employeeId)) &&
      (!billingType || item.billingType === billingType) &&
      (!status || item.status === status)
    );
  };

  const filteredData = data.filter(filterData);

  return (
    <RootContainer>
      <AppBar position="fixed" color="primary" sx={{ paddingLeft: 0, paddingRight: 0 }}>
  <Toolbar>
    <Typography variant="h6">Retention Request</Typography>
    <Button variant="contained" color="secondary" style={{ marginLeft: 'auto' }}>
      Raise Request
    </Button>
  </Toolbar>
</AppBar>

      <Grid container spacing={2} component={SearchSection}>
        <Grid item xs={12} sm={4}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography>Employee ID:</Typography>
            </Grid>
            <Grid item>
              <TextField
                value={searchCriteria.employeeId}
                onChange={handleSearchCriteriaChange}
                name="employeeId"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography>Billing Type:</Typography>
            </Grid>
            <Grid item>
              <Select
                value={searchCriteria.billingType || ''}
                onChange={handleSearchCriteriaChange}
                name="billingType"
                fullWidth
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Type1">Type1</MenuItem>
                <MenuItem value="Type2">Type2</MenuItem>
                {/* Add more options if needed */}
              </Select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography>Status:</Typography>
            </Grid>
            <Grid item>
              <Select
                value={searchCriteria.status || ''}
                onChange={handleSearchCriteriaChange}
                name="status"
                fullWidth
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Open">Open</MenuItem>
                <MenuItem value="Awaiting Approval">Awaiting Approval</MenuItem>
                <MenuItem value="Approved">Approved</MenuItem>
                {/* Add more options if needed */}
              </Select>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <GridContainer>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee ID</TableCell>
                <TableCell>TSR</TableCell>
                <TableCell>Billing Type</TableCell>
                <TableCell>Raised By</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>View Request</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.employeeId}>
                  <TableCell>{item.employeeId}</TableCell>
                  <TableCell>{item.tsr}</TableCell>
                  <TableCell>{item.billingType}</TableCell>
                  <TableCell>{item.raisedBy} ({item.raisedById})</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </GridContainer>
    </RootContainer>
  );
};

export default Dashboard;
