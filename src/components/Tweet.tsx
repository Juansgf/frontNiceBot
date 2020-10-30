import React from "react";
import Navbar from "./Navbar";
import { Component, FC } from "react";

const Tweet = () => {
  return (
    <>
      <div>
        <header className="text-white text-center" style={{ height: "409px" }}>
          <div className="container text-center">
            <h1
              className="font-weight-bold"
              style={{ textAlign: "center", margin: "5%" }}
            >
              hola
            </h1>
            <hr className="star-light" />
          </div>
        </header>
        <div className="container" style={{ paddingTop: "14px" }}>
          <div style={{ paddingBottom: "5px" }}>
            <h3 className="text-dark mb-0 d-inline-block">Vote</h3>
          </div>
          <div className="row" style={{ paddingTop: "13px" }}>
            <div className="col-md-4">
              <button className="color-button" type="button">
                Misogino
              </button>
            </div>
            <div className="col-md-4">
              <button className="middle-button" type="button">
                Otro Tweet
              </button>
            </div>
            <div className="col-md-4">
              <button className="last-button" type="button">
                No Misognio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tweet;
