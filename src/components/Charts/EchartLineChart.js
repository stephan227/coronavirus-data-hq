import React from 'react';
import ReactEcharts from 'echarts-for-react';  // or var ReactEcharts = require('echarts-for-react');

function EchartLineChart ({option}) {
  return (
    <ReactEcharts
      option={option}
      notMerge={true}
      lazyUpdate={true}
      theme={"theme_name"}
      style={{
        height: '300px', 
      width: '100%',
      
      justifyContent: 'center',
      display: 'flex'
    }}
      // onChartReady={this.onChartReadyCallback}
      // onEvents={EventsDict}
      // opts={} 
      />
  )
}

export default EchartLineChart;