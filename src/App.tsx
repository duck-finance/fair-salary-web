import React, { useState, Fragment } from "react";
import { Form, FormState } from "./components/Form/Form";
import { Chart } from "./components/Chart/Chart";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const AlignContainer = styled.div`
  margin-top: 40px;
`;

function App() {
  const [formState, handleChange] = useState<FormState>({
    salary: "",
  });

  return (
    <Fragment>
      <Typography variant="h1" align="center">
        Справедливая зарплата
      </Typography>
      <AlignContainer>
        <Form formState={formState} onChange={handleChange} />
      </AlignContainer>
      <AlignContainer>
        <Chart formState={formState} />
      </AlignContainer>
    </Fragment>
  );
}

export default App;
