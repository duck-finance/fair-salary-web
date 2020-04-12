import styled from "styled-components";
import React, { Fragment } from "react";
import BackgroundUrl from "./background.jpg";

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: no-repeat url("${BackgroundUrl}");
  background-size: contain;
`;

const BackgroundContainerShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: black;
  opacity: 0.9;
`;

const CreditsContainer = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
`;

export function Background() {
  return (
    <Fragment>
      <BackgroundContainer>
        <CreditsContainer>
          Photo by{" "}
          <a
            href="https://unsplash.com/photos/HJckKnwCXxQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gabrielle Henderson
          </a>{" "}
          on Unsplash
        </CreditsContainer>
      </BackgroundContainer>
      <BackgroundContainerShadow />
    </Fragment>
  );
}
