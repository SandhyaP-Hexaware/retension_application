import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
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

const theme = createTheme();

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

const EmployeeDetails = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <div>
          <div className="row">
            <div className="column">
              <label htmlFor="employeeId">Employee ID</label>
              <input type="text" id="employeeId" />
              <button>Get Details</button>
            </div>
            <div className="column">
              <label htmlFor="empName">EMP Name</label>
              <input type="text" id="empName" value="John Doe" readOnly />
            </div>
            <div className="column">
              <label htmlFor="status">Status</label>
              <input type="text" id="status" value="Active" readOnly />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="billingType">Billing Type</label>
              <input type="text" id="billingType" value="Hourly" readOnly />
            </div>
            <div className="column">
              <label htmlFor="tenure">Tenure</label>
              <input type="text" id="tenure" value="2 years" readOnly />
            </div>
            <div className="column">
              <label htmlFor="tsr">TSR</label>
              <input type="text" id="tsr" value="1234" readOnly />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="grade">Grade</label>
              <input type="text" id="grade" value="A" readOnly />
            </div>
            <div className="column">
              <label htmlFor="projectName">Project Name</label>
              <input type="text" id="projectName" value="Project A" readOnly />
            </div>
            <div className="column">
              <label htmlFor="location">Location</label>
              <input type="text" id="location" value="New York" readOnly />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="performanceRating">Performance Rating</label>
              <input type="text" id="performanceRating" value="5" readOnly />
            </div>
            <div className="column">
              <label htmlFor="attachment1">Attachment</label>
              <input type="file" id="attachment1" />
            </div>
            <div className="column">
              <label htmlFor="retentionType">Retention Type</label>
              <div>
                <label>
                  <input type="radio" name="retentionType" value="proactive" />
                  Proactive
                </label>
                <label>
                  <input type="radio" name="retentionType" value="reactive" />
                  Reactive
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="attachment2">Attachment</label>
              <input type="file" id="attachment2" />
            </div>
            <div className="column">
              <label htmlFor="lastDate">Last Date of Employee</label>
              <input type="date" id="lastDate" />
            </div>
            <div className="column">
              <label htmlFor="attachment3">Attachment</label>
              <input type="file" id="attachment3" />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="currentBillRate">Current Bill Rate</label>
              <input type="text" id="currentBillRate" />
            </div>
            <div className="column">
              <label htmlFor="newBillRate">New Bill Rate</label>
              <input type="text" id="newBillRate" />
            </div>
            <div className="column">
              <label htmlFor="newCost">New Cost</label>
              <input type="text" id="newCost" />
            </div>
          </div>
          <div className="row">
            <div className="full-width">
              <label htmlFor="businessJustification">Business Justification</label>
              <textarea id="businessJustification" rows="4"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="full-width">
              <label htmlFor="risk">Risk</label>
              <textarea id="risk" rows="4"></textarea>
            </div>
          </div>
          <br />
          <div className="scrollable">
            <h2>Replacement Details of Potential Candidates</h2>
            <div className="row">
              <div className="column">
                <label htmlFor="replacementOfferRaised">Replacement Offer Raised</label>
                <div>
                  <label>
                    <input type="radio" name="replacementOfferRaised" value="yes" />
                    Yes
                  </label>
                  <label>
                    <input type="radio" name="replacementOfferRaised" value="no" />
                    No
                  </label>
                </div>
              </div>
              <div className="column">
                <label htmlFor="replacementOffered">Replacement Offered</label>
                <div>
                  <label>
                    <input type="radio" name="replacementOffered" value="internal" />
                    Internal
                  </label>
                  <label>
                    <input type="radio" name="replacementOffered" value="external" />
                    External
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RootContainer>
    </ThemeProvider>
  );
};

export default EmployeeDetails;
