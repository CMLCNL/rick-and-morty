import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import stars from "../../assets/stars.jpg";
import styles from "./Card.module.scss";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        updateFetchedData(data);
      });
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center  text-light">{name}</h1>
        <div className="w-100 h-25 d-flex justify-content-center align-items-end position-relative">
          <img src={stars} className="w-100 h-100 object-fit-cover" alt="" />
          <img className={`${styles.cardImage}`} src={image} alt="" />
        </div>
        <div className="content p-4 d-flex flex-column gap-4">
          <div className="">
            <span className="fw-bold text-light">Gender : </span>
            <span className="fw-bold text-light">{gender}</span>
          </div>
          <div className="">
            <span className="fw-bold text-light">Location: </span>
            <span className="fw-bold text-light">{location?.name}</span>
          </div>
          <div className="">
            <span className="fw-bold text-light">Origin: </span>
            <span className="fw-bold text-light">{origin?.name}</span>
          </div>
          <div className="">
            <span className="fw-bold text-light">Species: </span>
            <span className="fw-bold text-light">{species}</span>
          </div>
          <div className="">
            <span className="fw-bold text-light" text-light>
              Status: {status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
