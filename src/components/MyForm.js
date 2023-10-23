import Input from "@mui/material/Input";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../redux/slice/user";
import { addUserSlice, editUserSlice } from "../redux/slice/users";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/types";
import { useNavigate } from "react-router-dom";
const MyForm = () => {
  // const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (prop) => (event) => {
    dispatch(setUserSlice({ ...user, [prop]: event.target.value }));
  };
  const handleSubmit = () => {
    user.id === 0
      ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } })
      : dispatch({ type: UPDATE_USER_BY_ID, user });

    dispatch(
      setUserSlice({
        firstName: "",
        lastName: "",
        phone: "",
      })
    );
  };

  return (
    <>
      <form
        style={{ marginTop: "100px" }}
        className="d-flex flex-column w-100 w justify-content-center gap-5"
      >
        <Input
          style={{ margin: "10px" }}
          onChange={handleChange("firstName")}
          placeholder="Enter firstName"
          value={user.firstName}
          //   fullWidth
        />
        <Input
          style={{ margin: "10px" }}
          onChange={handleChange("lastName")}
          placeholder="Enter lastName"
          value={user.lastName}
        />
        <Input
          style={{ margin: "10px" }}
          onChange={handleChange("phone")}
          placeholder="Enter phone"
          value={user.phone}
        />
        <button
          style={{ margin: "10px" }}
          onClick={() => handleSubmit()}
          className="btn btn-primary"
          
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default MyForm;
