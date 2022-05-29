import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import styles from "./Card.module.scss";

const Card = ({ page, results }) => {
  return (
    <>
      {results &&
        results?.map((data) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`${page}${data.id}`}
            key={data.id}
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
          >
            <div
              className={`${styles.card} d-flex flex-column justify-content-center`}
            >
              <img className={`${styles.img} img-fluid`} src={data.image} />
              <div className={`${styles.content}`}>
                <div className="fs-5 fw-bold">{data.name}</div>
                <div>
                  <div className="fs-6 fw-normal">Last Location</div>
                  <div className="fs-5">{data.location?.name}</div>
                </div>
              </div>
            </div>

            {data?.status === "Dead" && (
              <div
                className={`${styles.badge} position-absolute badge bg-danger`}
              >
                {data?.status}
              </div>
            )}
            {data?.status === "Alive" && (
              <div
                className={`${styles.badge} position-absolute badge bg-success`}
              >
                {data?.status}
              </div>
            )}
            {data?.status !== "Alive" && data.status !== "Dead" && (
              <div
                className={`${styles.badge} position-absolute badge bg-secondary`}
              >
                {data?.status}
              </div>
            )}
          </Link>
        ))}
      {!results && <NotFound />}
    </>
  );
};

export default Card;
