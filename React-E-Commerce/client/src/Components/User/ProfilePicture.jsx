import React, { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import useApi from "../../Hooks/useApi";
import Flex from "../../Ui/Flex/Flex";
import Classes from "./Profile.module.css";
function ProfilePicture() {
  const Public_folder = "http://localhost/images/";

  const { PostData, Update } = useApi();
  const Context = useContext(AuthContext);
  const [wanna_change, updateChange] = useState(false);
  const [file, updateFile] = useState(null);
  const handelChange = (event) => {
    updateFile(event.target.files[0]);
  };
  const HandelClick = (event) => {
    if (wanna_change) {
      updateChange(false);
    } else {
      updateChange(true);
    }
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    let FileName;
    const data = new FormData();
    FileName = Date.now() + file.name;
    console.log(FileName);
    data.append("FileName", FileName);
    data.append("file", file);
    PostData("Upload", data);
    Update(`User/${Context.User._id}`, {
      UserId: Context.User._id,
      ProfilePicture: FileName,
    });

    updateChange(false);
    updateFile(null);
  };
  return (
    <Flex className={Classes.ProfilePicture_box}>
      {!file && (
        <div>
          {Context.User.ProfilePicture ? (
            <div className={Classes.ProfilePic}>
              <img
                src={Public_folder + Context.User.ProfilePicture}
                alt="UserProfilePicture"
              />
            </div>
          ) : (
            <div className={Classes.ProfilePic}>
              <img
                src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"
                alt="UserProfilePicture"
              />
            </div>
          )}
        </div>
      )}
      {file && (
        <div className={Classes.ProfilePic}>
          <img src={URL.createObjectURL(file)} alt="uploadImage" />
        </div>
      )}
      {!wanna_change && (
        <div onClick={HandelClick}>
          <i className="fas fa-pen"></i>
        </div>
      )}

      {wanna_change && (
        <form onSubmit={handelSubmit}>
          {!file && (
            <label htmlFor="profile" className={Classes.Upload}>
              Upload
            </label>
          )}
          <input
            type="file"
            id="profile"
            className={Classes.file}
            onChange={handelChange}
          />
          {file && (
            <button type="submit" className={Classes.Upload}>
              Save
            </button>
          )}
        </form>
      )}
    </Flex>
  );
}

export default ProfilePicture;
