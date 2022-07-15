import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../Services/Redux/Action/userAction";
const Dashboard = () => {
const dispatch = useDispatch();
const user = JSON.parse(localStorage.getItem("currentUser"))
console.log(125436,user.role);
const Logout = () =>{
    dispatch(LogOut())
}
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                {
                    user[0].role === "admin" ?
                    <AppBar position="static" className="admin-bar">
                    <Toolbar>
                        <Typography className="dashboard" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Dashboard | <span className="role">Role :: <strong>{user[0]?.role}</strong></span>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button color="inherit" onClick={Logout}>logout</Button>
                        </Typography>
                    </Toolbar>
                    </AppBar>  
                    : 
                    <AppBar position="static" className="user-bar">
                    <Toolbar>
                        <Typography className="dashboard" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Dashboard | <span className="role">Role :: <strong>{user[0]?.role}</strong></span>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button color="inherit" onClick={Logout}>logout</Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
                }
                
                <div className="box-container">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={9}>
                        <Outlet />
                    </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    )
}


export default Dashboard;