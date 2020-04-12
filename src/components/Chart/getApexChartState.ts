type ApexChartState = {
  data: any;
  isEnabledAnimations: boolean;
};

export function getApexChartState({
  data,
  isEnabledAnimations,
}: ApexChartState) {
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
        animations: {
          enabled: isEnabledAnimations,
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
