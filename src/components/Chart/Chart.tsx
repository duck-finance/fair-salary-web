import React from "react";
import ApexChart from "react-apexcharts";
import { FormState } from "../Form/Form";

type Props = {
  formState: FormState;
};

const MONTH = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
];

function generateCategories(initialDate: string) {
  const today = new Date();
  const result = [];
  let date = new Date(initialDate);

  while (
    date.getMonth() <= today.getMonth() ||
    date.getFullYear() <= today.getFullYear()
  ) {
    result.push(MONTH[date.getMonth()]);
    date = new Date(date.getFullYear(), date.getMonth() + 1);
  }

  return result;
}

console.log(generateCategories("2009.01.01"));

function getApexChartState() {
  const categories = generateCategories("2009.01.01");
  return {
    options: {
      chart: {
        id: "chart",
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        categories,
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          gradientToColors: undefined,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [
            {
              offset: 0,
              color: "blue",
              opacity: 1,
            },
            {
              offset: 100,
              color: "red",
              opacity: 1,
            },
          ],
        },
      },
    },
    series: [
      {
        name: "Ваша реальная зарплата",
        data: categories.map(() => Math.round(Math.random() * 100)),
      },
    ],
  };
}

export function Chart({ formState }: Props) {
  return <ApexChart {...getApexChartState()} type="line" height={400} />;
}
