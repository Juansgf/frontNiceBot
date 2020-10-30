import { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import data from "../../db/data";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const useTweet = () => {
  const [tweet, setTweet] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
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
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { tweet, error, isLoading, setTweet };
};

export default useTweet;
