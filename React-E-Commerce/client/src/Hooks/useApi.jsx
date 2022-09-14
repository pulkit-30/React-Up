import { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import ErrorContext from "../Context/ErrorContext";
const Base_Url = "http://localhost/";
function useApi() {
  const Context = useContext(AuthContext);
  const Error_Context = useContext(ErrorContext);
  const [Data, updateData] = useState([]);
  const [User, updateUser] = useState({});
  const [Loading, updateLoading] = useState(false);
  const PostData = async (target, data) => {
    updateLoading(true);
    Error_Context.Remove();
    const url = Base_Url + target;
    try {
      await axios.post(url, data).then((data) => {
        if (data.statusText === "OK") {
          console.log("Success");
        } else {
          Error_Context.Error("Invalid Data");
        }
      });
    } catch (error) {
      Error_Context.Error("Something Went Wrong");
    }
    updateLoading(false);
  };
  const Auth = async (target, data) => {
    updateLoading(true);
    Error_Context.Remove();

    const url = Base_Url + target;
    try {
      await axios.post(url, data).then((data) => {
        if (data.statusText === "OK") {
          updateUser(data.data);
          Context.Auth(data.data);
        } else {
          Context.Error("Invalid Credentials");
        }
      });
    } catch (error) {
      Context.Error("👮‍♀️ Invalid Credentials 🤭 , try Again 🤞");
    }
    updateLoading(false);
  };

  //
  const FetchData = async (target) => {
    // Error_Context.Remove();
    updateLoading(true);
    const url = Base_Url + target;

    try {
      await axios.get(url).then((data) => {
        if (data.statusText === "OK") {
          updateData(data.data);
        } else {
          Error_Context.Error("Something went Wrong");
        }
      });
    } catch (error) {}
    updateLoading(false);
  };
  const FakeStoreData = async (url) => {
    // Error_Context.Remove();
    updateLoading(true);
    try {
      await axios.get(url).then((data) => {
        if (data.statusText === "OK") {
          updateData(data.data);
        } else {
          Error_Context.Error("Something went Wrong");
        }
      });
    } catch (error) {}
    updateLoading(false);
  };
  const Update = async (url, data) => {
    updateLoading(true);
    Error_Context.Remove();
    try {
      await axios.put(Base_Url + url, data).then((data) => {
        localStorage.removeItem("User");
        localStorage.removeItem("UserCart");
        localStorage.setItem("User", JSON.stringify(data.data));
        localStorage.setItem("UserCart", JSON.stringify(data.data.UserCart));
      });
    } catch (error) {
      console.log(error.message);
    }
    updateLoading(false);
  };
  const DeleteData = async (target) => {
    updateLoading(true);
    await axios
      .delete(Base_Url + target)
      .then((data) => {
        updateData(data.data);
      })
      .catch((error) => {
        Error_Context.Error("Something Went Wrong");
      });
    updateLoading(false);
  };
  return {
    User,
    Data,
    Loading,
    Auth,
    FetchData,
    FakeStoreData,
    Update,
    PostData,
    DeleteData,
  };
}

export default useApi;
