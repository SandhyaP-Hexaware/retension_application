import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Grid,
  Typography,
  TextField,
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
  IconButton,
} from '@mui/material';
import { CheckCircle as CheckCircleIcon, Pending as PendingIcon } from '@mui/icons-material';

const theme = createTheme();

const RootContainer = styled('div')({
  backgroundColor: '#eaf4f7',
  padding: '16px',
  paddingTop: '70px', // Added top padding to offset the app bar
});

const ScreenContainer = styled('div')({
  backgroundColor: '#fff',
  padding: '16px',
  borderRadius: '8px',
});

const GreenTickIcon = styled(CheckCircleIcon)({
  color: 'green',
});

const PendingApprovalContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

const EmployeeDetailsScreen = () => {
  // Pre-filled employee details
  const employeeDetails = {
    employeeId: '1234',
    retentionType: 'Proactive',
    empName: 'Bhavya Ukkalam',
    lastDate: '2023-08-31',
    tenure: '1.5 years',
    currentBillRate: '',
    projectName: 'XYZ',
    newBillRate: '',
    status: 'Open',
    newCost: '',
    tsr: 'Lead- Business Analyst- STEP',
    offerLetterValidated: '',
    location: 'Chennai',
    attachment1: null,
    billingType: 'Billable',
    attachment2: null,
    grade: 'G5',
    attachment3: null,
    performanceRating: '5',
  };

  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <ScreenContainer>
          <Typography variant="h6">Manager Comments</Typography>
          <PendingApprovalContainer>
            <GreenTickIcon />
            <Typography>Manager has raised a request</Typography>
          </PendingApprovalContainer>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography>Employee ID:</Typography>
                  <TextField value={employeeDetails.employeeId} readOnly fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Retention Type:</Typography>
                  <TextField value={employeeDetails.retentionType} readOnly fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography>EMP Name:</Typography>
                  <TextField value={employeeDetails.empName} readOnly fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Last Date of Employee:</Typography>
                  <TextField
                    type="date"
                    id="lastDate"
                    value={employeeDetails.lastDate}
                    readOnly
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Tenure:</Typography>
                  <TextField value={employeeDetails.tenure} readOnly fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Current Bill Rate:</Typography>
                  <TextField
                    value={employeeDetails.currentBillRate}
                    fullWidth
                    // Add onChange handler
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Project Name:</Typography>
                  <TextField value={employeeDetails.projectName} readOnly fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography>New Bill Rate:</Typography>
                  <TextField
                    value={employeeDetails.newBillRate}
                    fullWidth
                    // Add onChange handler
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Status:</Typography>
                  <TextField value={employeeDetails.status} readOnly fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography>New Cost:</Typography>
                  <TextField
                    value={employeeDetails.newCost}
                    fullWidth
                    // Add onChange handler
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>TSR:</Typography>
                  <TextField value={employeeDetails.tsr} readOnly fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography>In-Hand Offer Letter Validated:</Typography>
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="offerLetterValidated"
                        value="yes"
                        checked={employeeDetails.offerLetterValidated === 'yes'}
                        // Add onChange handler
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="offerLetterValidated"
                        value="no"
                        checked={employeeDetails.offerLetterValidated === 'no'}
                        // Add onChange handler
                      />
                      No
                    </label>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Location:</Typography>
                  <TextField value={employeeDetails.location} readOnly fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Attachment:</Typography>
                  <input type="file" />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Billing Type:</Typography>
                  <TextField value={employeeDetails.billingType} readOnly fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Attachment:</Typography>
                  <input type="file" />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Grade:</Typography>
                  <TextField value={employeeDetails.grade} readOnly fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Attachment:</Typography>
                  <input type="file" />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Performance Rating:</Typography>
                  <TextField value={employeeDetails.performanceRating} readOnly fullWidth />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* HR Approval */}
              <Typography variant="h6">HR Approval</Typography>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography>Hr Comments:</Typography>
                  <TextField fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Rejection Reason:</Typography>
                  <TextField fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary">
                    Approve
                  </Button>
                  <Button variant="contained" color="error" style={{ marginLeft: '8px' }}>
                    Reject
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ScreenContainer>
      </RootContainer>
    </ThemeProvider>
  );
};

export default EmployeeDetailsScreen;
