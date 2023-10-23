import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../redux/slice/user";
import { deleteUserSlice } from "../redux/slice/users";
import Button from "@mui/material/Button";
import { DELETE_USER_BY_ID, GET_USERS } from "../redux/types";
import { Link } from "react-router-dom";

export default function MyTable() {
  const rows = useSelector((state) => state.users);
  const dispatch = useDispatch();
  React.useEffect(() => dispatch({ type: GET_USERS }), []);
  return (
    <>
      <div position="fixed">
        <div className="d-flex align-items-center ">
          <input
            className="form-control mt-3 w-75 mb-4 m-lg-5"
            placeholder="Search..."
          />

          <Link to={"/myform"}>
            <button className="btn btn-primary ">Add</button>
          </Link>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 1150 }} aria-label="simple table" align="center">
          <TableHead>
            <TableRow>
              <TableCell>FirstName</TableCell>
              <TableCell align="right">LastName</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">
                  <Link to={"myform"}>
                    <button
                      onClick={() => dispatch(setUserSlice(row))}
                      className="btn btn-warning w-100"
                    >
                      Edit
                    </button>
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <button
                    onClick={() =>
                      dispatch({ type: DELETE_USER_BY_ID, id: row.id })
                    }
                    // fullWidth
                    className="btn btn-danger  w-100 "
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
