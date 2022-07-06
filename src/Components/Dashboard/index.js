import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from "../Sidebar";
import { useDispatch } from "react-redux";
import { LogOut } from "../../Services/Redux/Action/userAction";
const Dashboard = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const Logout = () =>{
    dispatch(LogOut())
}
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography className="dashboard" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Dashboard
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button color="inherit" onClick={Logout}>logout</Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
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