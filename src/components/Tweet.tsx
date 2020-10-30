import React from "react";
import { Link } from "react-router-dom";

import useTweet from "./Hooks/useTweet";
import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import data from "../db/data";

const Tweet = () => {
  const { tweet, setTweet } = useTweet();

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  const onVote = async () => {
    const rand = Math.floor(Math.random() * data.length);
    let response = await client.query({
      query: gql`
            {
              getTweet(id: "${data[rand]}") {
                Content
              }
            }
          `,
    });
    setTweet(response.data.getTweet.Content);
  };

  return (
    <div>
      <header className="text-white text-center" style={{ height: "409px" }}>
        <div className="container text-center">
          <h1
            className="font-weight-bold"
            style={{ textAlign: "center", margin: "5%" }}
          >
            {tweet}
          </h1>
          <hr className="star-light" />
        </div>
      </header>
      <div className="container" style={{ paddingTop: "14px" }}>
        <div style={{ paddingBottom: "5px" }}>
          <h3 className="text-dark mb-0 d-inline-block">Vote</h3>
        </div>

        <form>
          <div className="row" style={{ paddingTop: "13px" }}>
            <div className="col-md-4">
              <button className="color-button" type="button" onClick={onVote}>
                Misogino
              </button>
            </div>
            <div className="col-md-4">
              <button className="middle-button" type="button" onClick={onVote}>
                Otro Tweet
              </button>
            </div>
            <div className="col-md-4">
              <button className="last-button" type="button" onClick={onVote}>
                No Misognio
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Tweet;
