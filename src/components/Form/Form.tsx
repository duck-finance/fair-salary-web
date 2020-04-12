import React from "react";
import styled from "styled-components";
import { TextField, InputAdornment } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

export type FormState = {
  salary: string;
  date?: Date | null;
};

type Props = {
  onChange: (form: FormState) => void;
  formState: FormState;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InputContainer = styled.div`
  width: 300px;
`;

const InputAlign = styled.div`
  margin-bottom: 20px;
`;

export function Form({ formState, onChange }: Props) {
  function handleChangeSalary({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    onChange({ ...formState, salary: value });
  }

  function handleDateChange(date: Date | null) {
    onChange({ ...formState, date });
  }

  return (
    <Container>
      <InputContainer>
        <InputAlign>
          <TextField
            label="Моя зарплата"
            variant="filled"
            placeholder="20000"
            InputProps={{
              endAdornment: <InputAdornment position="end">₽</InputAdornment>,
            }}
            onChange={handleChangeSalary}
            value={formState.salary}
            fullWidth
          />
        </InputAlign>
        <KeyboardDatePicker
          label="Последний раз менялась"
          variant="inline"
          inputVariant="filled"
          placeholder="31/01/2020"
          format="dd/MM/yyyy"
          value={formState.date}
          onChange={handleDateChange}
          fullWidth
          invalidDateMessage="Упс, неправильная дата"
        />
      </InputContainer>
    </Container>
  );
}
