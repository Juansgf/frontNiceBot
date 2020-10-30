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
        let num = await client.query({
          query: gql`
            {
              countTweetsByWord(word: "zorra")
            }
          `,
        });

        console.log("HLA", num);

        setAnswer(num.data.countTweetsByWord);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [answer, error, isLoading]);
  return { answer, error, isLoading };
};

export default useOverview;
