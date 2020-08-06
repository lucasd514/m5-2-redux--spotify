import React, { Component } from "react";
import { useSelector } from "react-redux";

const ArtistRoute = () => {
  const accessToken = useSelector((state) => {
    console.log(state);

    return state.auth.token;
  });

  return accessToken;
};

export default ArtistRoute;
