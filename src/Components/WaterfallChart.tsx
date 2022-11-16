import { Chart, ChartWrapperOptions } from "react-google-charts";

import Pillar from "../Pillar";

interface WaterfallChartProps {
  instance: Pillar;
}

function prepareData({ data }: Pillar) {
  return [
    ["Factor", "", "", "", ""],
    ["A", 0, 0, data.A, data.A],
    ["B", 0, 0, data.B, data.B],
    ["C", 0, 0, data.C, data.C],
    ["X", 0, 0, data.X, data.X],
    ["Y", 0, 0, data.Y, data.Y],
    ["Z", 0, 0, data.Z, data.Z],
  ];
}

export default function WaterfallChart({ instance }: WaterfallChartProps) {

  const data = prepareData(instance);

  const options: ChartWrapperOptions["options"] = {
    legend: "none",
    bar: { groupWidth: "90%" }, // Remove space between bars.
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#0f9d58" }, // red
      risingColor: { strokeWidth: 0, fill: "#a52714" }, // green
    },
    vAxis: {
      title: "Factor contribuyente",
    },
    hAxis: {
      title: "Efecto en la probabilidad de colapso (verde disminuye, rojo aumenta)",
      maxValue: "1",
      minValue: "-1",
    },
    title: "Causas que afectan la probabilidad de colapso",
    orientation: "vertical",
  };

  return (
    <Chart
      chartType="CandlestickChart"
      data={data}
      width="90%"
      height="60rem"
      options={options}
    />
  );
}
