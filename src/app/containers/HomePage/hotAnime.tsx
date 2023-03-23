import React from "react";
import { createSelector } from "reselect";
import { makeSelectAnimePage } from "./selectors";
import { useAppSelector } from '../../hooks';
import styled from "styled-components";

const HotAnimeContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const AnimeItemContainer = styled.div`
    width: 14em;
    height: 19em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AnimeCover = styled.div`
    width: auto;
    height: 14em;

    img {
        width: auto;
        height: 100%
    }
`;

const AnimeTitle = styled.h6`
    font-size: 15px;
    color: #000;
    font-weight: 600;
    margin-top: 10px;
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage,
}));

const HotAnime = () => {
  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimePage = !animePage || !animePage.media || animePage.media.length === 0;

  if(isEmptyAnimePage) return null;

  return (
    <HotAnimeContainer>
        {animePage && animePage.media && animePage.media.map((anime) => (
            <AnimeItemContainer key={anime?.id}>
                <AnimeCover>
                    <img src={anime?.coverImage?.large || ""} alt="" />
                </AnimeCover>
                <AnimeTitle>{ anime?.title?.english}</AnimeTitle>
            </AnimeItemContainer>
        ))}
    </HotAnimeContainer>
  )
};

export default HotAnime;
