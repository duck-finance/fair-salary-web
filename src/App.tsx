import React, { useState, Fragment } from "react";
import { Form, FormState } from "./components/Form/Form";
import { Chart } from "./components/Chart/Chart";

function App() {
  const [formState, handleChange] = useState<FormState>({
    date: "",
    salary: "",
  });

  return (
    <Fragment>
      <Form formState={formState} onChange={handleChange} />
      <Chart formState={formState} />
    </Fragment>
  );
}

export default App;
