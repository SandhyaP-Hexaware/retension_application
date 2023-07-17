import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Step,
  StepLabel,
  Stepper,
  Box,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
} from "@mui/icons-material";
import { data, updateDataByEmployeeId } from "../data";
import EmployeeDetails from "./RetentionForm";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

const RootContainer = styled("div")({
  backgroundColor: "#eaf4f7",
  padding: "16px",
  paddingTop: "70px",
});

const StepperContainer = styled(Stepper)({
  backgroundColor: "transparent",
  padding: "16px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StepperStep = styled(Step)({
  width: "100%",
  marginBottom: "16px",
});

const ScreenContainer = styled("div")({
  backgroundColor: "#fff",
  padding: "16px",
  borderRadius: "8px",
});

const GreenTickIcon = styled(CheckCircleIcon)({
  color: "green",
});

const PendingApprovalContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
});

const GreyText = styled(Typography)({
  color: "grey",
});

const EmployeeDetailsScreen = ({ dropdownValue }) => {
  const navigate=useNavigate();
  const { employeeId } = useParams();
  const id = parseInt(employeeId);
  console.log(id);
  console.log(data);
  // Pre-filled employee details
  const employeeDetailsData = data.find(
    (employee) => employee.employeeId === id
  );

  console.log(employeeDetailsData);
  // const [employeeDetails, setEmployeeDetails] = useState(employeeDetailsData || {});

  const [employeeDetails, setEmployeeDetails] = useState({
    employeeID: employeeId,
    retentionType: employeeDetailsData.retentionType,
    empName: employeeDetailsData.empName,
    lastDate: employeeDetailsData.lastDate,
    tenure: employeeDetailsData.tenure,
    currentBillRate: employeeDetailsData.currentBillRate,
    projectName: employeeDetailsData.projectName,
    newBillRate: employeeDetailsData.newBillRate,
    status: employeeDetailsData.status,
    newCost: employeeDetailsData.newCost,
    tsr: employeeDetailsData.tsr,
    offerLetterValidated: employeeDetailsData.offerLetterValidated,
    location: employeeDetailsData.location,
    attachment1: null,
    billingType: employeeDetailsData.billingType,
    attachment2: null,
    grade: employeeDetailsData.grade,
    performanceRating: employeeDetailsData.performanceRating,
    experince: employeeDetailsData.experince,
    businessJustification: employeeDetailsData.businessJustification,
    risk: employeeDetailsData.risk,
    VHUHVDHApprovedRetentionRequest:
      employeeDetailsData.VHUHVDHApprovedRetentionRequest,
    VHUHVDHComments: employeeDetailsData.VHUHVDHComments,
    VHUHVDHRejectionReason: employeeDetailsData.VHUHVDHRejectionReason,
    HRBPsApprovedRetentionRequest:
      employeeDetailsData.HRBPsApprovedRetentionRequest,
    HRBPComments: employeeDetailsData.HRBPComments,
    HRBPRejectionReason: employeeDetailsData.HRBPRejectionReason,
    HRGeoHeadsApprovedRetentionRequest:
      employeeDetailsData.HRGeoHeadsApprovedRetentionRequest,
    HRGeoHeadsComments: employeeDetailsData.HRGeoHeadsComments,
    HRGeoHeadsRejectionReason: employeeDetailsData.HRGeoHeadsRejectionReason,
    AwaitingHRGeoHeadApproval: employeeDetailsData.AwaitingHRGeoHeadApproval,
    CpoComments: employeeDetailsData.CpoComments,
    CpoRejectionReason: employeeDetailsData.CpoRejectionReason,
  });
  let steps;

  if (
    employeeDetails.VHUHVDHApprovedRetentionRequest === false &&
    employeeDetails.VHUHVDHRejectionReason === null
  ) {
    steps = ["Employee Details", "VH/UH/VDH Approval"]; // Show only the first step for ASDM
  } else if (
    employeeDetails.VHUHVDHApprovedRetentionRequest === true &&
    employeeDetails.HRBPsApprovedRetentionRequest === false &&
    employeeDetails.HRBPRejectionReason === null
  ) {
    steps = ["Employee Details", "VH/UH/VDH Approval", "HRBP Approval"]; // Show first two steps for VH/UH/VDH
  } else if (
    employeeDetails.VHUHVDHApprovedRetentionRequest === true &&
    employeeDetails.HRBPsApprovedRetentionRequest === true &&
    employeeDetails.HRGeoHeadsApprovedRetentionRequest === false &&
    employeeDetails.HRGeoHeadsRejectionReason === null
  ) {
    steps = [
      "Employee Details",
      "VH/UH/VDH Approval",
      "HRBP Approval",
      "HR Geo Head Approval",
    ]; // Show first three steps for HRBP
  } else if (
    employeeDetails.VHUHVDHApprovedRetentionRequest === true &&
    employeeDetails.HRBPsApprovedRetentionRequest === true &&
    employeeDetails.HRGeoHeadsApprovedRetentionRequest === false &&
    employeeDetails.CpoApprovedRetentionRequest === false &&
    employeeDetails.CpoRejectionReason === null
  ) {
    steps = [
      "Employee Details",
      "VH/UH/VDH Approval",
      "HRBP Approval",
      "HR Geo Head Approval",
      "CPO Approval",
    ]; // Show first four steps for HR Geo Head
  } else {
    steps = [
      "Employee Details",
      "VH/UH/VDH Approval",
      "HRBP Approval",
      "HR Geo Head Approval",
      "CPO Approval",
    ];
  }

  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  const handleEmployeeDetailsChange = (event) => {
    const { name, value } = event.target;
    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // const steps = ['Employee Details', 'VH/UH/VDH Approval', 'HRBP Approval', 'HR Geo Head Approval', 'CPO Approval'];
  const statusIcons = [
    <CheckCircleIcon fontSize="small" />,
    <PendingIcon fontSize="small" />,
  ];

  const handleChangeVHcomments = (event) => {
    const newValue = event.target.value;
    // Call the onChange callback with the new value
    console.log(newValue);
    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      [employeeDetails.VHUHVDHComments]: newValue,
    }));
    console.log(employeeDetails.VHUHVDHComments);
    employeeDetails.VHUHVDHComments = newValue;
  };
  const handleChangeVHRejection = (event) => {
    const newValue = event.target.value;
    // Call the onChange callback with the new value
    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      [employeeDetails.VHUHVDHRejectionReason]: newValue,
    }));
  };
  const handleVhSubmit = () => {
    if (
      employeeDetails.VHUHVDHRejectionReason === "" ||
      employeeDetails.VHUHVDHRejectionReason === null
    ) {
      console.log("update called");
      setEmployeeDetails((prevDetails) => ({
        ...prevDetails,
        [employeeDetails.VHUHVDHApprovedRetentionRequest]: true,
      }));
    }
    employeeDetails.VHUHVDHApprovedRetentionRequest = true;
    updateDataByEmployeeId(employeeDetails.employeeID, employeeDetails);
    console.log("update called");
    navigate('/');
  };

  const handleChangehrbpcomments = (event) => {
    const newValue = event.target.value;
    // Call the onChange callback with the new value
    console.log(newValue);
    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      [employeeDetails.HRBPComments]: newValue,
    }));
    employeeDetails.HRBPComments = newValue;
  };
  const handleChangehrbpRejection = (event) => {
    const newValue = event.target.value;
    // Call the onChange callback with the new value
    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      [employeeDetails.HRBPRejectionReason]: newValue,
    }));
  };
  const handlehrbpSubmit = () => {
    if (
      employeeDetails.HRBPRejectionReason === "" ||
      employeeDetails.HRBPRejectionReason === null
    ) {
      setEmployeeDetails((prevDetails) => ({
        ...prevDetails,
        [employeeDetails.HRBPsApprovedRetentionRequest]: true,
      }));

      employeeDetails.HRBPsApprovedRetentionRequest = true;
    }
    updateDataByEmployeeId(employeeDetails.employeeID, employeeDetails);
    navigate('/');
  };

  const handleChangehrgeocomments = (event) => {
    const newValue = event.target.value;
    // Call the onChange callback with the new value
    console.log(newValue);
    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      [employeeDetails.HRGeoHeadsComments]: newValue,
    }));
    employeeDetails.HRGeoHeadsComments = newValue;
  };
  const handleChangehrgeoRejection = (event) => {
    const newValue = event.target.value;
    // Call the onChange callback with the new value
    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      [employeeDetails.HRGeoHeadsRejectionReason]: newValue,
    }));
  };
  const handlehrgeoSubmit = () => {
    if (
      employeeDetails.HRGeoHeadsRejectionReason === "" ||
      employeeDetails.HRGeoHeadsRejectionReason === null
    ) {
      setEmployeeDetails((prevDetails) => ({
        ...prevDetails,
        [employeeDetails.HRGeoHeadsApprovedRetentionRequest]: true,
      }));

      employeeDetails.HRGeoHeadsApprovedRetentionRequest = true;
    }
    updateDataByEmployeeId(employeeDetails.employeeID, employeeDetails);
    navigate('/');
  };

  const handleChangeCpocomments = (event) => {
    const newValue = event.target.value;
    // Call the onChange callback with the new value
    console.log(newValue);
    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      [employeeDetails.CpoComments]: newValue,
    }));
    employeeDetails.CpoComments = newValue;
  };
  const handleChangeCpoRejection = (event) => {
    const newValue = event.target.value;
    // Call the onChange callback with the new value
    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      [employeeDetails.CpoRejectionReason]: newValue,
    }));
  };
  const handleCpoSubmit = () => {
    if (
      employeeDetails.CpoRejectionReason === "" ||
      employeeDetails.CpoRejectionReason === null
    ) {
      setEmployeeDetails((prevDetails) => ({
        ...prevDetails,
        [employeeDetails.CpoApprovedRetentionRequest]: true,
        [employeeDetails.status]: 'closed',
      }));
      employeeDetails.status = "closed";
      employeeDetails.CpoApprovedRetentionRequest = true;
    }
    updateDataByEmployeeId(employeeDetails.employeeID, employeeDetails);
    navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <StepperContainer activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <StepperStep key={label}>
                  <Button onClick={() => handleStepClick(index)}>
                    <StepLabel>{label}</StepLabel>
                  </Button>
                </StepperStep>
              ))}
            </StepperContainer>
          </Grid>
          <Grid item xs={12} sm={9}>
            <ScreenContainer>
              {activeStep === 0 && (
                <>
                  <Typography variant="h6">
                    Manager has raised a request
                  </Typography>
                  <Box mt={2}>
                    <Grid container spacing={1}>
                      <Grid item xs={4}>
                        {/* <Box mt={1}> */}
                        <Typography>Employee ID:</Typography>
                        {/* </Box> */}
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{employeeDetails.employeeID}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>Retention Type:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{employeeDetails.retentionType}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>EMP Name:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{employeeDetails.empName}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>Last Date of Employee:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{employeeDetails.lastDate}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>Tenure:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{employeeDetails.tenure}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>Current Bill Rate:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>
                          {employeeDetails.currentBillRate}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>Project Name:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{employeeDetails.projectName}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>New Bill Rate:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{employeeDetails.newBillRate}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>Status:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{employeeDetails.status}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>New Cost:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{employeeDetails.newCost}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>TSR:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{employeeDetails.tsr}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>In-Hand Offer Letter Validated:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>
                          {employeeDetails.offerLetterValidated}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>Location:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{employeeDetails.location}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>Billing Type:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{employeeDetails.billingType}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>Grade:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{employeeDetails.grade}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>Performance Rating:</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>
                          {employeeDetails.performanceRating}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </>
              )}

              {activeStep === 1 &&
                (dropdownValue === "ASDM" ||
                  dropdownValue === "HRBP" ||
                  dropdownValue === "HR Geo Head" ||
                  dropdownValue === "CPO") && (
                  <>
                    {!employeeDetails.VHUHVDHApprovedRetentionRequest &&
                      employeeDetails.VHUHVDHRejectionReason === null && (
                        <Typography variant="h6">
                          Waiting for VH/UH/VDH Approval
                        </Typography>
                      )}
                  </>
                )}
              {activeStep === 1 &&
                dropdownValue === "VH/UH/VDH" &&
                employeeDetails.VHUHVDHApprovedRetentionRequest === false && (
                  <>
                    <Typography variant="h6">VH/UH/VDH Approval</Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography>VH/UH/VDH Comments:</Typography>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          value={employeeDetails.hrComments}
                          onChange={handleChangeVHcomments}
                          name="hrComments"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Rejection Reason:</Typography>
                        <TextField
                          fullWidth
                          value={employeeDetails.rejectionReason}
                          onChange={handleChangeVHRejection}
                          name="rejectionReason"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleVhSubmit}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          style={{ marginLeft: "8px" }}
                          onClick={handleVhSubmit}
                        >
                          Reject
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                )}
              {activeStep === 1 &&
                employeeDetails.VHUHVDHApprovedRetentionRequest && (
                  <>
                    <Typography variant="h6">VH/UH/VDH Approval</Typography>
                    <Grid container spacing={1}>
                      
                        <Grid item xs={4}>
                          <Typography>VH/UH/VDH Comments:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography>
                            {employeeDetails.VHUHVDHComments}
                          </Typography>
                        </Grid>
                      
                      <Grid item xs={12}>
                        {(employeeDetails.VHUHVDHRejectionReason !== null && employeeDetails.VHUHVDHRejectionReason !== '') && (
                          <>
                          <Grid item xs={4}>
                          <Typography>Rejection Reason:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography>
                          {employeeDetails.VHUHVDHRejectionReason}
                          </Typography>
                        </Grid>
                            
                          </>
                        )}
                      </Grid>
                    </Grid>
                  </>
                )}
              {activeStep === 2 &&
                (dropdownValue === "ASDM" ||
                  dropdownValue === "VH/UH/VDH" ||
                  dropdownValue === "HR Geo Head" ||
                  dropdownValue === "CPO") && (
                  <>
                    {!employeeDetails.HRBPsApprovedRetentionRequest &&
                      employeeDetails.HRBPRejectionReason === null && (
                        <Typography variant="h6">
                          Waiting for HRBPs Approval
                        </Typography>
                      )}
                  </>
                )}
              {activeStep === 2 &&
                dropdownValue === "HRBP" &&
                !employeeDetails.HRBPsApprovedRetentionRequest && (
                  <>
                    <Typography variant="h6">HRBP Approval</Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography>HRBP Comments:</Typography>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          value={employeeDetails.hrComments}
                          onChange={handleChangehrbpcomments}
                          name="hrComments"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Rejection Reason:</Typography>
                        <TextField
                          fullWidth
                          value={employeeDetails.rejectionReason}
                          onChange={handleChangehrbpRejection}
                          name="rejectionReason"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handlehrbpSubmit}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          style={{ marginLeft: "8px" }}
                        >
                          Reject
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                )}
              {activeStep === 2 &&
                employeeDetails.HRBPsApprovedRetentionRequest && (
                  <>
                    <Typography variant="h6">HRBP Approval</Typography>
                    <Grid container spacing={1}>
                    <Grid item xs={4}>
                          <Typography>HRBP Comments:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography>
                            {employeeDetails.HRBPComments}
                          </Typography>
                        </Grid>
                      <Grid item xs={12}>
                        {employeeDetails.HRBPRejectionReason !== null && (
                          <>
                          <Grid item xs={4}>
                          <Typography>Rejection Reason:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography>
                          {employeeDetails.HRBPRejectionReason}
                          </Typography>
                        </Grid>
                           
                          </>
                        )}
                      </Grid>
                    </Grid>
                  </>
                )}

              {activeStep === 3 &&
                (dropdownValue === "ASDM" ||
                  dropdownValue === "VH/UH/VDH" ||
                  dropdownValue === "HRBP" ||
                  dropdownValue === "CPO") && (
                  <>
                    {!employeeDetails.HRGeoHeadsApprovedRetentionRequest &&
                      employeeDetails.HRGeoHeadsRejectionReason === null && (
                        <Typography variant="h6">
                          Waiting for HR Geo Heads Approval
                        </Typography>
                      )}
                  </>
                )}
              {activeStep === 3 &&
                dropdownValue === "HR Geo Head" &&
                !employeeDetails.HRGeoHeadsApprovedRetentionRequest && (
                  <>
                    <Typography variant="h6">HR Geo Head Approval</Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography>HR Geo Head Comments:</Typography>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          value={employeeDetails.hrComments}
                          onChange={handleChangehrgeocomments}
                          name="hrComments"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Rejection Reason:</Typography>
                        <TextField
                          fullWidth
                          value={employeeDetails.rejectionReason}
                          onChange={handleChangehrgeoRejection}
                          name="rejectionReason"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handlehrgeoSubmit}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          style={{ marginLeft: "8px" }}
                        >
                          Reject
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                )}
              {activeStep === 3 &&
                employeeDetails.HRGeoHeadsApprovedRetentionRequest && (
                  <>
                    <Typography variant="h6">HR Geo Heads Approval</Typography>
                    <Grid container spacing={1}>
                    <Grid item xs={4}>
                          <Typography>HR Geo Heads Comments:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography>
                          {employeeDetails.HRGeoHeadsComments}
                          </Typography>
                        </Grid>
                      <Grid item xs={12}>
                        {employeeDetails.HRGeoHeadsRejectionReason !== null && (
                          <>
                          <Grid item xs={4}>
                          <Typography>Rejection Reason:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography>
                          {employeeDetails.HRGeoHeadsRejectionReason}
                          </Typography>
                        </Grid>
                            
                          </>
                        )}
                      </Grid>
                    </Grid>
                  </>
                )}
              {activeStep === 4 &&
                (dropdownValue === "ASDM" ||
                  dropdownValue === "VH/UH/VDH" ||
                  dropdownValue === "HRBP" ||
                  dropdownValue === "HR Geo Head") && (
                  <>
                    {!employeeDetails.CpoApprovedRetentionRequest &&
                      employeeDetails.CpoRejectionReason === null && (
                        <Typography variant="h6">
                          Waiting for HR Geo Heads Approval
                        </Typography>
                      )}
                  </>
                )}
              {activeStep === 4 &&
                dropdownValue === "CPO" &&
                !employeeDetails.CpoApprovedRetentionRequest && (
                  <>
                    <Typography variant="h6">CPO Approval</Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography>CPO Comments:</Typography>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          value={employeeDetails.hrComments}
                          onChange={handleChangeCpocomments}
                          name="hrComments"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Rejection Reason:</Typography>
                        <TextField
                          fullWidth
                          value={employeeDetails.rejectionReason}
                          onChange={handleChangeCpoRejection}
                          name="rejectionReason"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleCpoSubmit}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          style={{ marginLeft: "8px" }}
                        >
                          Reject
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                )}
              {activeStep === 4 &&
                employeeDetails.CpoApprovedRetentionRequest && (
                  <>
                    <Typography variant="h6">CPO Approval</Typography>
                    <Grid container spacing={1}>
                    <Grid item xs={4}>
                          <Typography>CPO Comments:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography>
                          {employeeDetails.CpoComments}
                          </Typography>
                        </Grid>
                      
                      <Grid item xs={12}>
                        {employeeDetails.CpoRejectionReason !== null && (
                          <>
                          <Grid item xs={4}>
                          <Typography>Rejection Reason:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography>
                          {employeeDetails.CpoRejectionReason}
                          </Typography>
                        </Grid>
                            
                          </>
                        )}
                      </Grid>
                    </Grid>
                  </>
                )}
            </ScreenContainer>
          </Grid>
        </Grid>
      </RootContainer>
    </ThemeProvider>
  );
};

export default EmployeeDetailsScreen;
