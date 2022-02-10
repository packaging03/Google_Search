import Head from "next/head";
import React from "react";
import { render } from "react-dom";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../Keys";

const Search = ({ results }) => {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Search Result */}
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
  ).then((response) => response.json());

  // After server render, pass result to the client
  return {
    props: {
      results: data,
    },
  };
}
