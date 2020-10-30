import { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const useOverview = () => {
  const [answer, setAnswer] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response = await client.query({
          query: gql`
            {
              countTweets
            }
          `,
        });

        setAnswer(response.data.countTweets);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { answer, error, isLoading };
};

export default useOverview;
