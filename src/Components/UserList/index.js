import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { DeleteUser, editUser, updateUser } from "../../Services/Redux/Action/userAction";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserList = () => {
  const {
    register,
    handleSubmit,
    setValue, 
    formState: { errors },
  } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state?.userReaducer);
  let id = allUser?.id;
  console.log("data", allUser);
  // edit user action
  const edit_User = (id) => {
    dispatch(editUser(id))
    setOpen(true)
    if(allUser?.message){
      alert(`${allUser?.message}`);
      setOpen(false);
    }
    
  };
  // delete function
  const deleteUser = (id) => {
    var result = window.confirm("Want to delete?");
    if (result == true) {
      dispatch(DeleteUser(id));
    } else {
      return false;
    }
  };

  // update function
  const onSubmit = (data) => {
    dispatch(updateUser(data,id))
  }
  // for cancel button
  const cancel = () =>{
    setOpen(false);
  }
  useEffect(()=>{
    if(allUser?.isEdit){
      console.log("value",allUser?.isEdit)
      setValue('name', allUser?.isEdit?.name)
      setValue('email', allUser?.isEdit?.email)
      setValue('password', allUser?.isEdit?.password)
      setValue('phone', allUser?.isEdit?.phone)
    }
  },[allUser?.isEdit])
  return (
    <>
      <Box>
        <div className="user_list">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Password</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allUser?.register_User?.map((item, index) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={index}
                  >
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.password}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell className="buttons">
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => edit_User(index)}
                      >
                        <EditLocationAltIcon />
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => deleteUser(index)}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {/* model here.... */}
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="modal-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-field">
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    {...register('name')}
                  />
                </div>
                <div className="form-field">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    {...register('email')}
                  />
                </div>
                <div className="form-field">
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    {...register('password')}
                  />
                </div>
                <div className="form-field">
                  <TextField
                    id="outlined-basic"
                    label="phone"
                    variant="outlined"
                    {...register('phone')}
                  />
                </div>
                <div className="form-field mo-btn-grp">
                  <Button variant="contained" type="submit">
                    Update
                  </Button>
                  <Button variant="contained" color="secondary" onClick={cancel}>
                    Cancel
                  </Button>
                </div>
              </form>
              </div>
            </Box>
          </Modal>
        </div>
      </Box>
    </>
  );
};
export default UserList;
