import React from "react";
import ReactEcharts from "echarts-for-react";
import './Chart.css'

const getLineChart = () => {
  const options = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: "white"
        }
      },
      axisLabel: {
        color: "white"
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "white"
      }
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        color: "#0082f0"
      }
    ]
  };
  return options;
};

const getBarChart = () => {
  const options = {
    color: ["#0082f0"],
    // grid: {
    //   left: "3%",
    //   right: "4%",
    //   bottom: "3%",
    //   containLabel: true
    // },
    xAxis: [
      {
        type: "category",

        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true,
          lineStyle: {
            color: "white"
          }
        },
        axisLabel: {
          color: "white"
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false
        },
        axisTick: {
          alignWithLabel: true,
          lineStyle: {
            color: "white"
          }
        },
        axisLabel: {
          color: "white"
        }
      }
    ],
    series: [
      {
        type: "bar",
        barWidth: "30%",
        data: [10, 52, 200, 334, 390, 330, 220],
        label: {
          normal: {
            show: true,
            position: "top"
          }
        }
      }
    ]
  };
  return options;
};

const getPieChart = () => {
  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b} <br> {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      top: "center",
      left: 200,
      itemGap: 20,
      textStyle:{
       color: 'white'
      },
      data: ["Mon", "Tue", "wed", "Thur", "Fri", "Sat", "Sun"]
    },
    series: [
      {
        type: "pie",
        radius: "65%",
        center: ["50%", "50%"],
        selectedMode: "single",
        data: [
          { value: 5, name: "Mon" },
          { value: 10, name: "Tue" },
          { value: 15, name: "wed" },
          { value: 20, name: "Thur" },
          { value: 7, name: "Fri" },
          { value: 2, name: "Sat" },
          { value: 30, name: "Sun" }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
  return option;
};

const setChart = chart => {
  switch (chart) {
    case 1:
      return getLineChart();
    case 2:
      return getBarChart();
    case 3:
      return getPieChart();
  }
};

function Chart({ tabNumber }) {
  console.log("Chart -> tab", tabNumber);
  return (
    <div className = 'container'>
      {tabNumber > 0 && (
        <ReactEcharts option={setChart(tabNumber)}></ReactEcharts>
      )}
    </div>
  );
}

export default Chart;
