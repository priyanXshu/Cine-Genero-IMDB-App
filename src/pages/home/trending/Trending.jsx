import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const [endpoint, setEndpoint] = useState();
  const { data, loading } = useFetch(`/trending/all/week`);

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle trending">Trending</span>
      </ContentWrapper>
      
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
