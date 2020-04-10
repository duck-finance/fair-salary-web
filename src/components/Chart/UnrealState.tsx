import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: center;
`;

export function UnrealState() {
  return (
    <Container>
      <h2>
        К сожалению мы работаем с суммами от 1000 рублей{" "}
        <span role="img" aria-label="колечко с драгоценным камнем">
          💍
        </span>
      </h2>
    </Container>
  );
}
