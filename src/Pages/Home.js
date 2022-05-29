import { useState, useEffect } from "react";
import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";
import Filter from "../components/Filter/Filter";

const Home = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        updateFetchedData(data);
      });
  }, [api]);

  return (
    <div className="App">
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default Home;
