import axios from "axios";

async function fetchDataSet(query) {  
  const fetchQuery =`${query}`

  const fetchResult = await axios(fetchQuery).then(result => {
    return result.data;
  }).catch(err => {
    return {err: err}
  })
  return fetchResult;
}

export default fetchDataSet;