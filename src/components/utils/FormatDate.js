const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function checkZero(data){
  data = `${data}`
  if(data.length === 1){
    data = "0" + data;
  }
  return data;
}

function checkAMorPM(hours) {
    var mid='AM';
    if (hours>12) {
      mid = 'PM';
    }
    return mid;
}

const ConvertDateToReadableFormat = (dateVal) => {
  const now = new Date(dateVal);
  let hours = now.getHours()
  let amOrPM = checkAMorPM(hours)
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  return (
    // `${days[now.getDay()]}, 
    `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()} ${hours}:${checkZero(now.getMinutes())}:${checkZero(now.getSeconds())} ${amOrPM}`
  )
}

module.exports = {
  ConvertDateToReadableFormat
}