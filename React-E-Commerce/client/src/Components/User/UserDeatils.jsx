import React from "react";
import Classes from "./Profile.module.css";
function UserDeatils(props) {
  const User = props.User;
  return (
    <div>
      <h2>{User.UserName}</h2>
      {User.BrandName && (
        <h3>
          {User.BrandName} <i className="fas fa-crown"></i>
        </h3>
      )}
      <h3 className={Classes.Email}>{User.Email}</h3>
      <p>{User.About}</p>
    </div>
  );
}

export default UserDeatils;
