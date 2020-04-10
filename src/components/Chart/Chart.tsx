import React, { Fragment } from "react";
import ApexChart from "react-apexcharts";
import { FormState } from "../Form/Form";
import { EmptyState } from "./EmptyState";
import { UnrealState } from "./UnrealState";
import { Header } from "./Header";

type Props = {
  formState: FormState;
};

// const MONTH = [
//   "Янв",
//   "Фев",
//   "Мар",
//   "Апр",
//   "Май",
//   "Июн",
//   "Июл",
//   "Авг",
//   "Сен",
//   "Окт",
//   "Ноя",
//   "Дек",
// ];

const nextMonth = (_: any, index: number, allItems: any[]) => {
  const currentMonth = allItems.length - index;
  const currentDate = new Date();
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - currentMonth
  ).getTime();
};

const nextValue = (salary: number) => (_: any, index: number) =>
  Math.round(salary + salary * ((index / 1000) * Math.random()));

const nextPoint = (salary: number) => (
  item: any,
  index: number,
  allItems: any[]
) => ({
  x: nextMonth(item, index, allItems),
  y: nextValue(salary)(item, index),
});

const getData = (salary: number) => {
  return new Array(15).fill(0).map(nextPoint(salary));
};

function getApexChartState(data: any) {
  return {
    options: {
      chart: {
        id: "chart",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: "datetime",
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
              color: "#FF0",
              opacity: 1,
            },
            {
              offset: 100,
              color: "#D0D",
              opacity: 1,
            },
          ],
        },
      },
    },
    series: [
      {
        name: "Реальная зарплата",
        data,
      },
    ],
    annotations: {
      xaxis: [
        {
          x: "Фев",
          borderColor: "#775DD0",
          label: {
            style: {
              color: "#fff",
            },
            text: "X-axis annotation - 22 Nov",
          },
        },
      ],
    },
  };
}

export function Chart({ formState }: Props) {
  const salary = Number(formState.salary) || undefined;

  if (!salary) {
    return <EmptyState />;
  }

  if (salary < 1000) {
    return <UnrealState />;
  }

  const data = getData(salary);

  return (
    <Fragment>
      <Header salary={data[data.length - 1].y} />
      <ApexChart {...getApexChartState(data)} type="line" height={400} />
    </Fragment>
  );
}
