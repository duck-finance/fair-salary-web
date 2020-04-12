import React, { useState, Fragment } from "react";
import { Form, FormState } from "./components/Form/Form";
import { Chart } from "./components/Chart/Chart";
import { Typography } from "@material-ui/core";

function App() {
  const [formState, handleChange] = useState<FormState>({
    date: "",
    salary: "",
  });

  return (
    <Fragment>
      <Typography variant="h1" align="center">
        Справедливая зарплата
      </Typography>
      <Form formState={formState} onChange={handleChange} />
      <Chart formState={formState} />
    </Fragment>
  );
}

export default App;
