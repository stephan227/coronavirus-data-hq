
const setEchartAxisColor = (echartData, themeColor) => {

  // Set text label colors
  let color = 'black';
  if (themeColor === 'dark') {
    color = 'white'
  }

  if (!echartData) {
    return {}
  }
  if (echartData.legend) {
    if (echartData.legend.textStyle) {
      echartData.legend.textStyle.color = color;
    } else {
      echartData.legend = {textStyle: {color: color}}
    }  
  } else {
    echartData.legend = {textStyle: {color: color}}
  }

  if (echartData.yAxis) {
    echartData.yAxis.axisLabel = {color};
  } else {
    echartData.yAxis = {axisLabel: {color}}
  }
  if (echartData.xAxis) {
    echartData.xAxis.axisLabel = {color};
  } else {
    echartData.xAxis = {axisLabel: {color}}
  }
  return echartData;
}

module.exports = { setEchartAxisColor };