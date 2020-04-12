import React, { Fragment } from "react";
import ApexChart from "react-apexcharts";
import { FormState } from "../Form/Form";
import { EmptyState } from "./EmptyState";
import { UnrealState } from "./UnrealState";
import { Header } from "./Header";
import { getApexChartState } from "./getApexChartState";
import { getData } from "./getData";

type Props = {
  formState: FormState;
};

const UNREAL_SALARY = 1000;
const ANIMATION_SALARY = 9999;

/**
 * Фикс проблемы с тем, что дёргаются графики
 */
function isEnabledAnimations(salary: number) {
  return salary > ANIMATION_SALARY;
}

function isUnrealSalary(salary: number) {
  return salary < UNREAL_SALARY;
}

export function Chart({ formState }: Props) {
  const salary = Number(formState.salary) || undefined;

  if (!salary) {
    return <EmptyState />;
  }

  if (isUnrealSalary(salary)) {
    return <UnrealState />;
  }

  const data = getData(salary);

  return (
    <Fragment>
      <Header salary={data[data.length - 1].y} />
      <ApexChart
        {...getApexChartState({
          data,
          isEnabledAnimations: isEnabledAnimations(salary),
        })}
        type="line"
        height={400}
      />
    </Fragment>
  );
}
