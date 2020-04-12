import { FormState } from "../Form/Form";
import { getData } from "./getData";
import { getApexChartState } from "./getApexChartState";

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

export function useChart(formState: FormState) {
  const salary = Number(formState.salary) || undefined;
  const data = (salary && getData(salary)) || undefined;
  const resultSalary = (data && data[data.length - 1].y) || undefined;
  const apexChartProps = getApexChartState({
    data,
    isEnabledAnimations: !!salary && isEnabledAnimations(salary),
  });
  const isEmptySalary = !salary;

  return {
    apexChartProps,
    resultSalary,
    isUnrealSalary: salary && isUnrealSalary(salary),
    isEmptySalary,
  };
}
