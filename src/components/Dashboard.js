import React, { useState } from "react";
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
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { data } from "../data";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const RootContainer = styled("div")({
  backgroundColor: "#eaf4f7",
  minHeight: "100vh",
  padding: "16px",
  paddingTop: "70px",
});

const SearchSection = styled("div")({
  marginBottom: "16px",
});

const GridContainer = styled("div")({
  backgroundColor: "#fff",
  padding: "16px",
  borderRadius: "8px",
});

const TableContainerStyled = styled(TableContainer)({
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

const TableStyled = styled(Table)({
  borderRadius: "8px",
});

const TableHeadCellStyled = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  color: "black",
}));

const ViewButtonStyled = styled(Button)({
  backgroundColor: "#2196f3",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#1976d2",
  },
});

const SearchContainer = styled(Grid)({
  borderRadius: "8px",
  backgroundColor: "#fff",
  padding: "4px",
  display: "flex",
  alignItems: "center",
});

const SearchInput = styled(TextField)({
  marginLeft: "8px",
  flex: 1,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});

const TableRowStyled = styled(TableRow)({
  "& > *": {
    borderBottom: "none",
  },
});

const AvatarCell = styled(TableCell)({
  display: "flex",
  alignItems: "center",
});

const AvatarStyled = styled(Avatar)({
  marginRight: "8px",
});

const Dashboard = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    employeeId: "",
    billingType: "",
    status: "",
  });

  const navigate = useNavigate();

  const handleSearchCriteriaChange = (event) => {
    setSearchCriteria({
      ...searchCriteria,
      [event.target.name]: event.target.value,
    });
  };

  const filterData = (item) => {
    const { employeeId, billingType, status } = searchCriteria;

    return (
      (!employeeId || item.employeeId.includes(employeeId)) &&
      (!billingType || item.billingType === billingType) &&
      (!status || item.status === status)
    );
  };

  const filteredData = data.filter(filterData);

  const handleViewRequest = (employeeId) => {
    navigate(`/Status/${employeeId}`);
  };

  return (
    <RootContainer>
      <Grid container spacing={2} component={SearchSection}>
        <Grid item xs={12} sm={4}>
          <SearchContainer>
            <SearchIcon />
            <SearchInput
              value={searchCriteria.employeeId}
              onChange={handleSearchCriteriaChange}
              name="employeeId"
              fullWidth
              variant="outlined"
              placeholder="Search by Employee ID"
              size="small"
            />
          </SearchContainer>
        </Grid>
      </Grid>
      <TableContainerStyled component={Paper}>
        <TableStyled>
          <TableHead>
            <TableRow>
              <TableHeadCellStyled>Employee</TableHeadCellStyled>
              <TableHeadCellStyled>TSR</TableHeadCellStyled>
              <TableHeadCellStyled>Billing Type</TableHeadCellStyled>
              <TableHeadCellStyled>Status</TableHeadCellStyled>
              <TableHeadCellStyled>View Request</TableHeadCellStyled>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item) => (
              <TableRowStyled key={item.employeeId}>
                <AvatarCell>
                  <AvatarStyled alt={item.empName} src={item.avatarUrl} />
                  <div>
                    <Typography variant="subtitle2" style={{ marginBottom: "4px" , fontWeight: "bold"}}>
                      {item.empName}
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: "4px" }}>
                      Emp Id: {item.employeeId}
                    </Typography>
                  </div>
                </AvatarCell>
                <TableCell>{item.tsr}</TableCell>
                <TableCell>{item.billingType}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  <ViewButtonStyled variant="contained" onClick={() => handleViewRequest(item.employeeId)}>
                    View
                  </ViewButtonStyled>
                </TableCell>
              </TableRowStyled>
            ))}
          </TableBody>
        </TableStyled>
      </TableContainerStyled>
    </RootContainer>
  );
};

export default Dashboard;
