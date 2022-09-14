import { Button } from "@material-ui/core";
import React, { useContext, useRef, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import useApi from "../../Hooks/useApi";
import Flex from "../../Ui/Flex/Flex";
import Classes from "./Profile.module.css";
import { useHistory } from "react-router";
import Loader from "../Loader/Loader";
import ErrorContext from "../../Context/ErrorContext";

function NewProductPage() {
  const Error_context = useContext(ErrorContext);
  const history = useHistory();
  const { PostData, Loading } = useApi();
  const Context = useContext(AuthContext);
  const Category = useRef();
  const Name = useRef();
  const Desc = useRef();
  const Price = useRef();
  const offer = useRef();
  const Stars = useRef();
  const Stocks = useRef();
  const [file, updateFile] = useState(null);
  const handelUpload = (event) => {
    updateFile(event.target.files[0]);
  };
  const handelSubmit = (event) => {
    event.preventDefault();

    //
    let FileName;
    const data = new FormData();
    FileName = Date.now() + file.name;
    console.log(FileName);
    data.append("FileName", FileName);
    data.append("file", file);
    PostData("Upload", data);
    //
    const ProductData = {
      UserId: Context.User._id,
      ProductImage: FileName,
      ProductCategory: Category.current.value,
      ProductName: Name.current.value,
      ProductDescription: Desc.current.value,
      Price: Price.current.value,
      Offer: offer.current.value,
      Stars: Stars.current.value,
      Stocks: Stocks.current.value,
    };
    PostData(`Product/AddProduct/${Context.User._id}`, ProductData);
    history.push(`/Profile/${Context.User._id}`);
  };
  return (
    <form onSubmit={handelSubmit}>
      <Flex className={Classes.Update}>
        <h2>Add New Product </h2>
        <h3>Under Brand Name</h3>
        {Error_context.isError && (
          <h1 className="error">{Error_context.ErrorMessage}</h1>
        )}
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="ImagePreview"
            className={Classes.PreviewImage}
          />
        )}
        <label htmlFor="ProductImage">
          {!file && <div className={Classes.FileLabel}> Upload An Image</div>}
          {file && <div className={Classes.FileLabel}> Change Image</div>}
        </label>
        <input
          type="file"
          name="Image"
          className={Classes.file}
          id="ProductImage"
          onChange={handelUpload}
          required
        />
        <input
          type="text"
          placeholder="Brand Name"
          value={Context.User.BrandName}
          required
          readOnly
        />
        <input type="text" placeholder="Category" ref={Category} required />
        <input type="text" placeholder="Product Name" ref={Name} required />
        <input
          type="text"
          placeholder="ProductDescription"
          ref={Desc}
          required
        />
        <input type="number" placeholder="Price" ref={Price} required />
        <input type="number" placeholder="Offer" ref={offer} required />
        <input type="number" placeholder="Stars" ref={Stars} required />
        <input type="number" placeholder="Stocks" ref={Stocks} required />

        {Loading && <Loader />}
        {!Loading && (
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={() => {
              !file && Error_context.Error("Please upload product Image");
            }}
          >
            Add New Product
          </Button>
        )}
      </Flex>
    </form>
  );
}

export default NewProductPage;
