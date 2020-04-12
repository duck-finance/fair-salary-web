import React from "react";
import styled from "styled-components";

export type FormState = {
  salary: string;
  date: string;
};

type Props = {
  onChange: (form: FormState) => void;
  formState: FormState;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
`;

export function Form({ formState, onChange }: Props) {
  function handleChangeSalary({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    onChange({ ...formState, salary: value });
  }

  function handleChangeDate({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    onChange({ ...formState, date: value });
  }

  return (
    <Container>
      <p>Я получаю</p>
      <input
        placeholder="20 000 руб."
        onChange={handleChangeSalary}
        value={formState.salary}
      />
      <p>Последний раз менялась</p>
      <input
        type="date"
        placeholder="Когда последний раз повышалась?"
        value={formState.date}
        onChange={handleChangeDate}
      />
    </Container>
  );
}
