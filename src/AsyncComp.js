import React, { useState, useEffect } from "react";
const AsyncComp = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);
  useEffect(() => {
    async function find() {
      try {
        const list = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}`
        ).then((data) => data.json());
        console.log(list.items[0].volumeInfo);
        setResult(list.items[1].volumeInfo);
        // console.log(result);
        // setSuccess(true);
        if (list.items.length > 0) {
          setError(false);
        }
      } catch (error) {
        console.log("error");
        setError(true);
        // setSuccess(false);
      }
    }
    find();
  }, [query]);
  return (
    <div>
      <h5>Async trial</h5>
      <p>Asynchronously fetch data using api</p>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <p>Search Resuts on {query}</p>
      {error && query && <h5>unable to find {query}</h5>}
      {!error && query ? (
        <div>
          {" "}
          <h6> {result.title}</h6>
          {/* {result.authors[0] !== "undefined" && <h6>~{result.authors[0]}</h6>} */}
          {result.description == null ? (
            <p>No description available</p>
          ) : (
            <code>{result.description}</code>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default AsyncComp;
