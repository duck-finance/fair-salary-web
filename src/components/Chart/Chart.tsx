import React, { Fragment } from "react";
import ApexChart from "react-apexcharts";
import { FormState } from "../Form/Form";
import { EmptyState } from "./EmptyState";
import { UnrealState } from "./UnrealState";
import { Header } from "./Header";
import { useChart } from "./useChartData";

type Props = {
  formState: FormState;
};

export function Chart({ formState }: Props) {
  const {
    isEmptySalary,
    isUnrealSalary,
    apexChartProps,
    resultSalary,
  } = useChart(formState);

  if (isEmptySalary) {
    return <EmptyState />;
  }

  if (isUnrealSalary) {
    return <UnrealState />;
  }

  return (
    <Fragment>
      <Header salary={resultSalary} />
      <ApexChart {...apexChartProps} type="line" height={400} />
    </Fragment>
  );
}
