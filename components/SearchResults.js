import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={result.link} className="text-sm">
              {result.formattedUrl}
            </a>
            <a href={result.link} className="text-sm">
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                {result.title}
              </h2>
            </a>
          </div>
          <p>{result.snippet}</p>
        </div>
      ))}
      {/* formattedSearchTime: "0.41"
formattedTotalResults: "65,600"
searchTime: 0.409482
totalResults: "65600" */}
    </div>
  );
};

export default SearchResults;
