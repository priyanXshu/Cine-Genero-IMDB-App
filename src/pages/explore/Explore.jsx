import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./style.scss";

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import CustomPagination from "../../components/pagination/CustomPagination";

const TMDB_API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;

const Explore = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { mediaType } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(
      `/discover/${mediaType}?api_key=TMDB_API_KEY&page=${pageNum}`
    ).then((res) => {
      setData(res);
      // setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchInitialData();
    setData(null);
  }, [mediaType, pageNum]);

  return (
    <div className="explorePage">
      <ContentWrapper>
        <div className="pageHeader">
          <div className="pageTitle">
            {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
          </div>
        </div>
        {loading && <Spinner initial={true} />}
        {!loading && (
          <>
            {data?.results?.length > 0 ? (
              <div className="content">
                {data?.results?.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} mediaType={mediaType} />
                  );
                })}
                <CustomPagination pageNum={pageNum} setPageNum={setPageNum} />
              </div>
            ) : (
              <span className="resultNotFound">Sorry, Results not found!</span>
            )}
          </>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Explore;
