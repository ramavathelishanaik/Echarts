import React, { useEffect, useState } from 'react';
import ECharts, { EChartsReactProps } from 'echarts-for-react';
import * as echarts from 'echarts';

const Chart = () => {
  echarts.registerTheme('myTheme', {
    backgroundColor: '#27293d',
    title: {
      textStyle: {
        color: '#ffffff',
      },
    },
    legend: {
      textStyle: {
        color: '#ffffff',
      },
    },
    dataZoom: {
      textStyle: {
        color: '#ffffff',
      },
      borderColor: '#37394a',
    },
  });

  const [options, setOptions] = useState({
    tooltip: {},
    legend: {},
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'bar',
      },
    ],
  });

  return (
    <ECharts
      option={options}
      theme='myTheme'
      opts={{ renderer: 'svg', width: 'auto', height: 'auto' }}
    />
  );
};

export default Chart;
