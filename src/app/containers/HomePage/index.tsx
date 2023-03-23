import React, { useEffect } from "react";
import { Dispatch } from "redux";
import styled from "styled-components";
import AnimeService from "../../services/animeService";
import { GetAnimePage } from "../../services/animeService/__generated__/GetAnimePage";
import { setAnimePage } from "./HomePageSlice";
import { useAppDispatch } from "../../hooks";
import HotAnime from "./hotAnime";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IHomePageProps {}

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page)),
});

function HomePage(props: IHomePageProps) {
  const { setAnimePage } = actionDispatch(useAppDispatch());

  const fetchAnimePage = async () => {
    const animePage = await AnimeService.getAnimePage(0, 20).catch((error) => {
      console.log("Error:", error);
    });

    console.log("ANIME PAGE:", animePage);
    if (animePage) setAnimePage(animePage);
  };

  useEffect(() => {
    fetchAnimePage();
  }, []);

  return (
    <Container>
      <h1>Hot Anime</h1>
      <HotAnime />
    </Container>
  );
}

export default HomePage;
