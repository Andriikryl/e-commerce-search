import React from "react";
import "./Recommended.css";

export default function Recommended() {
  return (
    <>
      <div>
        <h1 className="recommended-title ">Recommended</h1>
        <div className="recommended-flex">
          <button className="btns">All products</button>
          <button className="btns">nike</button>
          <button className="btns">adidas</button>
          <button className="btns">puma</button>
          <button className="btns">Vans</button>
        </div>
      </div>
    </>
  );
}
