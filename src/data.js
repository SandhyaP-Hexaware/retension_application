export var data = [
    {
    employeeId:1234,
    retentionType: 'Proactive',
    empName: 'Bhavya Ukkalam',
    lastDate: '2023-08-31',
    tenure: '1.5 years',
    currentBillRate: '90',
    projectName: 'XYZ',
    newBillRate: '100',
    CurrentMargin:'25%',
    NewMargin:'999',
    status: 'Open',
    newCost: '400',
    tsr: 'Lead- Business Analyst- STEP',
    offerLetterValidated: 'Yes',
    location: 'Chennai',
    attachment1: null,
    billingType: 'Billable',
    attachment2: null,
    grade: 'G5',
    attachment3: null,
    performanceRating: '5',
    experince:'Worked as software engineer in ABC company on .Net technology for 2 years,currently working as a team leader in XYZ company',
    businessJustification:'Employee is a key resource for the project and has been performing well in the project',
    risk: 'we may lost the key resource person for the project',
    VHUHVDHApprovedRetentionRequest: true,
    VHUHVDHComments:'Approved',
    VHUHVDHRejectionReason :null,
    HRBPsApprovedRetentionRequest:false,
    HRBPComments:null,
    HRBPRejectionReason :null,
    HRGeoHeadsApprovedRetentionRequest:false,
    HRGeoHeadsComments :null,
    HRGeoHeadsRejectionReason : null,
    AwaitingHRGeoHeadApproval: false,
    CpoComments :null,
    CpoApprovedRetentionRequest:false,
    CpoRejectionReason :null
    },
    
    {
      employeeId: 1000075797,
      tsr: 'TSR2',
      billingType: 'Type2',
      raisedBy: 'Jane Smith',
      raisedById: '789',
      status: 'Awaiting Approval',
    },
    {
      employeeId: 1000075799,
      tsr: 'TSR1',
      billingType: 'Type1',
      raisedBy: 'Steve Roggers',
      raisedById: '456',
      status: 'Open',
    },
    {
      employeeId: 1000075798,
      tsr: 'TSR2',
      billingType: 'Type2',
      raisedBy: 'Jaqueline Adam',
      raisedById: '789',
      status: 'Awaiting Approval',
    },
    {
      employeeId: 1000075710,
      tsr: 'TSR1',
      billingType: 'Type1',
      raisedBy: 'John cena',
      raisedById: '456',
      status: 'Open',
    },
    {
      employeeId: 1000075712,
      tsr: 'TSR2',
      billingType: 'Type2',
      raisedBy: 'David Warner',
      raisedById: '789',
      status: 'Awaiting Approval',
    },
    // Add more dummy data here
  ];

  export const updateDataByEmployeeId = (employeeId, updatedEmployeeDetails) => {
    // console.log('employeeId', parseInt(employeeId)==);
    data.forEach((employee) => {
      if (parseInt(employee.employeeId) === parseInt(employeeId)) {
        console.log('employee found for data updation', employee)
        Object.assign(employee, updatedEmployeeDetails);
      }
    });
  };
  