import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/Category/InputGroup";

const Episodes = () => {
  const [results, setResults] = React.useState([]);
  const [info, setInfo] = useState([]);
  const { air_date, name } = info;
  const [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    fetch(api).then((res) => {
      res.json().then((data) => {
        setInfo(data);
        Promise.all(
          data.characters.map(async (x) => {
            return fetch(x).then((res) => res.json());
          })
        ).then((res) => {
          setResults(res);
        });
      });
    });
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3 text-light">
          Episode name :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center text-light">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-9 col-9">
          <div className="col-lg-12 col-9 mb-4 text-light">
            <h4 className="text-center mb-4">Pick Episode</h4>
            <InputGroup name="Episode" changeID={setID} total={51} />
          </div>
          <div className="row">
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
