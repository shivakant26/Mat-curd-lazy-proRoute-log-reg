import React from "react";

const Profile = () =>{
    const data = JSON.parse(localStorage.getItem("currentUser"));
    console.log("123",data)
    return(
        <>
        <div className="profile-section">
            <div className="profile-card">
                <div className="profile-email">
                <p>Email :<span className="dt-right">{data[0].email}</span></p>
                </div>
                <div className="profile-email">
                <p>Password :<span className="dt-right">{data[0].password}</span></p>
                </div>
                <div className="profile-email">
                <p>role :<span className="dt-right">{data[0].role}</span></p>
                </div>
                <div className="profile-btn">
                    <button className="change-pr">Change Profile</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;