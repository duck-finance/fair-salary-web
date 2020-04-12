import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

function units(num: number, cases: any) {
  num = Math.abs(num);

  var word = "";

  if (num.toString().indexOf(".") > -1) {
    word = cases.gen;
  } else {
    word =
      num % 10 === 1 && num % 100 !== 11
        ? cases.nom
        : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
        ? cases.gen
        : cases.plu;
  }

  return word;
}

export function Header({ salary }: any) {
  return (
    <Container>
      <Typography variant="h3">
        Ваша реальная зарплата на сегодня {salary}{" "}
        {units(salary, { nom: "рубль", gen: "рубля", plu: "рублей" })}
      </Typography>
    </Container>
  );
}
