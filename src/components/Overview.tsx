import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";

import useOverview from "./Hooks/useOverview";

const Overview = () => {
  const { answer, error, isLoading } = useOverview();

  return (
    <div className="container" style={{ paddingTop: "14px" }}>
      <div style={{ paddingBottom: "5px" }}>
        <h3 className="text-dark mb-0 d-inline-block">Overview</h3>
        <button
          className="btn btn-primary d-none d-inline-block"
          type="button"
          style={{ padding: "4px" }}
        >
          See more
        </button>
      </div>
      <div className="row">
        <div className="col col-md-4 mb-4" style={{ paddingTop: "13px" }}>
          <div
            className="card shadow border-left-primary py-2"
            style={{ margin: "0px" }}
          >
            <div className="card-body">
              <div className="row align-items-center no-gutters">
                <div className="col mr-2">
                  <div className="text-uppercase text-primary font-weight-bold text-xs mb-1">
                    <span>Start date</span>
                  </div>
                  <div className="text-dark font-weight-bold h5 mb-0">
                    <span>Sep 14 2020</span>
                  </div>
                </div>
                <div className="col col-auto">
                  <Icon.Calendar size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4 mb-4" style={{ paddingTop: "13px" }}>
          <div className="card shadow border-left-primary py-2">
            <div className="card-body">
              <div className="row align-items-center no-gutters">
                <div className="col mr-2">
                  <div className="text-uppercase text-primary font-weight-bold text-xs mb-1">
                    <span>tweets analyzed</span>
                  </div>
                  <div className="text-dark font-weight-bold h5 mb-0">
                    <span>{answer}</span>
                  </div>
                </div>
                <div className="col col-auto">
                  <Icon.ChatText size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4 mb-4" style={{ paddingTop: "13px" }}>
          <div className="card shadow border-left-primary py-2">
            <div className="card-body">
              <div className="row align-items-center no-gutters">
                <div className="col mr-2">
                  <div className="text-uppercase text-primary font-weight-bold text-xs mb-1">
                    <span>total views</span>
                  </div>
                  <div className="text-dark font-weight-bold h5 mb-0">
                    <span>9,000,345</span>
                  </div>
                </div>
                <div className="col col-auto">
                  <Icon.Eye size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
