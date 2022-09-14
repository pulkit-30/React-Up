import React, { useContext, useEffect } from "react";
import Flex from "../../Ui/Flex/Flex";
import Classes from "./Profile.module.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import useApi from "../../Hooks/useApi";
import Loader from "../Loader/Loader";
// import Item from "../ProductItems/Item";
import Box from "../../Ui/Box/Box";
import Item from "./Item";
function UserProducts() {
  const Context = useContext(AuthContext);
  const { User, Data, Loading, Auth, FetchData, Update, PostData, DeleteData } =
    useApi();

  useEffect(() => {
    FetchData(`Product?UserId=${Context.User._id}`);
  }, []);
  return (
    <Flex className={Classes.Profile_Product_Box}>
      {Loading && <Loader />}
      {!Loading &&
        Data.length !== 0 &&
        Data.map((item, index) => {
          return (
            <Item data={item} key={index}>
              <Flex className={Classes.ProductBottom}>
                <br />
                <br />
                <Button
                  style={{ width: "80%" }}
                  className={Classes.btn}
                  variant="contained"
                  color="secondary"
                  onClick={() =>
                    DeleteData(`Product/${item._id}?UserId=${Context.User._id}`)
                  }
                >
                  Delete &nbsp; <i className="fas fa-trash-alt"></i>
                </Button>
              </Flex>
            </Item>
          );
        })}
      <Link
        to={`/Profile/${Context.User._id}/AddProduct`}
        className={Classes.AddBtn + " link"}
      >
        ➕
      </Link>
    </Flex>
  );
}

export default UserProducts;
