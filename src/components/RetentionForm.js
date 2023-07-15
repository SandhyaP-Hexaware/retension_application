import React, { useState } from "react"
import { styled, createTheme, ThemeProvider } from "@mui/material/styles"
import { useNavigate } from "react-router-dom";
import { Grid, TextField, RadioGroup, FormControlLabel, Radio, Card, Button, Stepper, Step, StepLabel } from "@mui/material"
import {data }from "../data";

const theme = createTheme({
  // Your theme configuration
})

const RootContainer = styled("div")({
  backgroundColor: "#eaf4f7",
  padding: "20px",
  paddingTop: "90px"
})

const cardStyle = {
  padding: "16px",
  borderRadius: "8px",
  height: "100%"
}

const FormTitle = styled("h1")({
  fontSize: "24px",
  marginBottom: "24px",
  textAlign: "center",
  color: "#454545",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
})

const StyledButton = styled(Button)({
  marginTop: "24px",
  width: "100%",
  padding: "12px 24px",
  fontSize: "16px",
  borderRadius: "4px",
  textTransform: "uppercase",
  fontWeight: "bold"
})

const steps = ["Step 1", "Step 2", "Step 3"] // Define the steps of the stepper

const EmployeeDetails = () => {
  const [activeStep, setActiveStep] = useState(0)// Track the active step
  const [employeeId, setEmployeeId] = useState("");
  const [empName, setEmpName] = useState(""); 
  const [status, setStatus] = useState(""); 
  const [tenure, setTenure] = useState(""); 
  const [location, setLocation] = useState(""); 
  const [project, setProject] = useState("");
  const [grade, setGrade] = useState(""); 
  const [tsr, setTsr] = useState(""); 
  const [pr, setPr] = useState(""); 
  const [billType, setBillType] = useState(""); 
  const [error, setError] = useState("");

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const handleGetDetails = () => {
    if (employeeId.trim() === "") {
      // Employee ID is not entered, show an error or perform any required action
      setError("Please enter an Employee ID");
      return;
    }
  
    const employee = data.find((emp) => emp.employeeId === employeeId);
  
    if (employee) {
      setEmpName(employee.empName);
      setStatus(employee.status);
      setTenure(employee.tenure);
      setLocation(employee.location);
      setGrade(employee.grade);
      setProject(employee.projectName)
      setTsr(employee.tsr);
      setPr(employee.performanceRating);
      setBillType(employee.billingType)
      console.log(employee.empName, "employee name")
    } else {
      setEmpName("");
      setError("Employee not found");
    }
  
    handleNext();
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    // Handle form submission logic here
    navigate('/')

  }
  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <Card sx={cardStyle}>
          <FormTitle>Employee Details Form</FormTitle>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Grid container spacing={2}>
            {activeStep === 0 && (
              <Grid item xs={12} md={2} mt={3} ml={15} marginBottom={35}>
                {/* Step 1: Employee ID, Get Details Button */}
                <TextField
                  id="employeeId"
                  label="Employee ID"
                  variant="standard"
                  fullWidth
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}

                <Grid mt={2}>
                  <Button variant="contained" color="primary" fullWidth onClick={handleGetDetails}>
                    Get Details
                  </Button>
                </Grid>
              </Grid>
            )}
            {activeStep === 1 && (
              <Grid container justifyContent="center" alignItems="center">
                {activeStep === 1 && (
                  <Grid item xs={12} md={8}>
                    <Grid container spacing={2} marginTop={6} marginBottom={10} justifyContent="center">
                      <Grid item xs={12} sm={4}>
                        <TextField id="empName" label="EMP Name" fullWidth variant="standard" value={empName} />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField id="status" label="Status" fullWidth variant="standard" value={status}/>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField id="location" label="Location" fullWidth variant="standard" value={location}/>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField id="tenure" label="Tenure" fullWidth variant="standard" value={tenure}/>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField id="grade" label="Grade" fullWidth variant="standard" value={grade}/>
                      </Grid>
                      <Grid item xs={12} sm={7}>
                        <TextField id="projectName" label="Project Name" fullWidth variant="standard" value={project}/>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField id="TSR" label="TSR" fullWidth variant="standard" value={tsr}/>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <TextField id="performanceRating" label="Performance Rating" fullWidth variant="standard" value={pr}/>
                      </Grid>
                      <Grid item xs={12} sm={6} marginRight={57}>
                        <TextField id="billingType" label="Billing Type" fullWidth variant="standard" value={billType}/>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Button color="primary" onClick={handleBack} variant="contained">
                          Back
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                          Next
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            )}
            {activeStep === 2 && (
              <Grid item xs={12} md={8} margin="0 auto">
                <Grid container spacing={2} marginTop={3} marginBottom={4}>
                  <Grid item xs={12} sm={12}>
                    <TextField id="experience" label="Experience" multiline rows={3} fullWidth variant="standard" />
                  </Grid>
                  <Grid item xs={12} sm={4} mt={2}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <label htmlFor="inHandOfferLetterValidated">In-Hand Offer Letter Validated</label>
                      </Grid>
                      <Grid item>
                        <RadioGroup name="inHandOfferLetterValidated" row>
                          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={4} mt={2}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <label htmlFor="attachment">Attachment</label>
                      </Grid>
                      <Grid item>
                        <div style={{ marginTop: "8px" }}>
                          <input type="file" id="attachment" />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={4} mt={2}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <label htmlFor="retentionType">Retention Type</label>
                      </Grid>
                      <Grid item>
                        <RadioGroup name="retentionType" row>
                          <FormControlLabel value="proactive" control={<Radio />} label="Proactive" />
                          <FormControlLabel value="reactive" control={<Radio />} label="Reactive" />
                        </RadioGroup>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6} mt={2} marginRight={57}>
                    <TextField
                      id="lastDate"
                      label="Last Date of Employee"
                      type="date"
                      fullWidth
                      InputLabelProps={{
                        shrink: true
                      }}
                      InputProps={{
                        placeholder: "Select date"
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Button color="primary" onClick={handleBack} variant="contained">
                      Back
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {activeStep === 3 && (
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} md={8}>
                  <Grid container spacing={2} marginTop={6} marginBottom={10} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                      <TextField id="currentBillRate" label="Current Bill Rate" fullWidth variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField id="currentMargin" label="Current Margin" fullWidth variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField id="newBillRate" label="New Bill Rate" fullWidth variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField id="newMargin" label="New Margin" fullWidth variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6} marginRight={57}>
                      <TextField id="newCost" label="New Cost" fullWidth variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={12} marginRight={57}>
                      <TextField id="businessJustification" label="Business Justification" multiline rows={3} fullWidth variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={12} marginRight={57}>
                      <TextField id="risk" label="Risk" fullWidth variant="standard" />
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Button color="primary" onClick={handleBack} variant="contained">
                        Back
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Card>
      </RootContainer>
    </ThemeProvider>
  )
}

export default EmployeeDetails
