import React, { useState, useEffect } from "react";
import { auth, database } from "../../global/firebaseCofig";
import { useSelector } from "react-redux";
import {
  createTheme,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Box,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
function LoanBalance() {
  const [applications, setApplications] = useState([]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
    },
  }));

  const user = useSelector((state) => state.user.user);

  console.log(user);

  const getApplications = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        database.collection("Applications").onSnapshot((snapshot) => {
          const newAplications = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setApplications(newAplications);
        });
      }
    });
  };

  useEffect(() => {
    getApplications();
  }, []);

  console.log(applications);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TableContainer
        component={Paper}
        sx={{ marginTop: "1rem", width: "70%" }}
      >
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Usage</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications
              .filter((application) => application.userId === user)
              .map((filteredApplications) => (
                <TableRow
                  key={filteredApplications.filteredApplicationsId}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    minHeight: "2rem",
                  }}
                >
                  <TableCell>{filteredApplications.email}</TableCell>
                  <TableCell component="th" scope="row">
                    {filteredApplications.usage}
                  </TableCell>

                  <TableCell>{filteredApplications.Status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default LoanBalance;
