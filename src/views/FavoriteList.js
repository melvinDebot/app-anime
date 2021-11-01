import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

// Import component
import Card from "../components/Card";

const FavoriteList = () => {
  const history = useHistory();
  const [isFavorite, setIsfavorite] = useState(true);
  const localStorageFavorite = localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];
  const [favorites, setFavorites] = useState(localStorageFavorite);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const goBack = () => {
    history.push("/list");
  };

  const removeItem = (id) => {
    const newFavorite = favorites.filter((fav) => fav.id !== Number(id));
    localStorage.setItem("favorites", JSON.stringify(newFavorite));
    setFavorites(newFavorite);
    setIsfavorite(false);
    console.log("clicked", newFavorite);
  };
  return (
    <StyledContainer>
      <StyledContainerText>
        <StyledIcon
          onClick={goBack}
          src="https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-03-512.png"
        ></StyledIcon>
        <StyledH1>Ma Liste</StyledH1>
      </StyledContainerText>
      <StyledContainerList>
        {favorites.map((item) => (
          <Card
            key={item.id}
            text={item.name}
            background={item.backgroundColor}
            description={item.description}
            img={item.img}
            onClick={() => {
              removeItem(item);
            }}
            textButton={isFavorite}
          />
        ))}
      </StyledContainerList>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 20px;
`;

const StyledContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
`;

const StyledH1 = styled.h1`
  left: -3.5em;
  position: relative;
  color: black;
`;

const StyledContainerList = styled.div`
  width: 100%;
  height: 100%;
  overlfow: scoll;
`;

const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export default FavoriteList;
