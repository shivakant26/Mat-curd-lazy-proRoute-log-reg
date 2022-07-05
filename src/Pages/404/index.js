import React from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageNotFound = () =>{
    const navigate = useNavigate();
    const back = () =>{
        navigate("/")
    }
    return(
        <>
        <Box className="page-not-found">
            <h2>404</h2>
            <h5>Not Found!</h5>
            <p>Sorry we can't find What you're looking for.</p>
            <Button onClick={back}>Go Back Home</Button>
        </Box>
        </>
    )
}


export default PageNotFound;