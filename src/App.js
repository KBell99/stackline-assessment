import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProduct } from "./reducers/products";
import Navbar from "./components/Navbar";
import ProductPanel from "./components/ProductPanel";
import SalesTable from "./components/SalesTable";
import "./index.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("fetched product");
    dispatch(fetchProduct("B007TIE0GQ"));
  }, []);

  return (
    <div className="body">
      <Navbar />
      <div className="content">
        <ProductPanel />
        <SalesTable />
      </div>
    </div>
  );
}

export default App;
