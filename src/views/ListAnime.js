import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Fade from "react-reveal/Fade";

// Import components
import Card from "../components/Card/index";

const ListAnime = () => {
  const history = useHistory();
  const [listAnimee, setListAnimee] = useState([]);
  const [filter, setFilter] = useState("");
  const [favoritesList, setFavoritesList] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  useEffect(() => {}, [listAnimee]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    axios({
      method: "GET",
      url: "http://localhost:3000/anime",
    })
      .then((res) => {
        setListAnimee([...listAnimee, ...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //FUNCTIONS
  const addFavorite = (item) => {
    console.log("addd favorite", item);
    const newArray = [...favoritesList, item];
    localStorage.setItem("favorites", JSON.stringify(newArray));
    setFavoritesList(newArray);
    item.like = !item.like;
  };

  const searchAnime = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const removeFavorite = (id, list) => {
    const newFavorite = favoritesList.filter((fav) => fav.id !== Number(id));
    localStorage.setItem("favorites", JSON.stringify(newFavorite));
    setFavoritesList(newFavorite);
    list.like = !list.like;
  };

  const handleFavorites = (item) => {
    console.log("List local storage", item.like);
    item.like ? removeFavorite(item.id, item) : addFavorite(item);
  };

  const pathFavorites = () => {
    history.push("/favorites");
  };

  return (
    <StyledContainer>
      <StyledContainerText>
        <StyledH1>Les Animées</StyledH1>
        <StyledIcon
          onClick={pathFavorites}
          src="https://icon-library.com/images/wishlist-icon/wishlist-icon-24.jpg"
        ></StyledIcon>
      </StyledContainerText>
      <SearchBar
        type="text"
        placeholder="search"
        onChange={(event) => searchAnime(event)}
      />
      <StyledListCard>
        {listAnimee.map((item) => {
          return (
            <>
              {filter === "" || item.name.toLowerCase().includes(filter) ? (
                <Fade bottom>
                  <Card
                    key={item.id}
                    text={item.name}
                    background={item.backgroundColor}
                    description={item.description}
                    img={item.img}
                    onClick={() => {
                      handleFavorites(item);
                    }}
                    textButton={item.like}
                  />
                </Fade>
              ) : null}
            </>
          );
        })}
      </StyledListCard>
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
  justify-content: space-around;
  width: 100%;
  height: auto;
`;

const StyledH1 = styled.h1`
  text-align: center;
`;

const SearchBar = styled.input`
  width: 98%;
  height: 40px;
  margin-top: 1em;
  border-radius: 5px;
`;

const StyledListCard = styled.div`
  width: 100%;
  height: 89%;
  margin-top: 20px;
  overflow: scroll;
  position: relative;
`;

const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export default ListAnime;
