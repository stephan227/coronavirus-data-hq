// Create Object with summary of totals for each country
const CalculateTableData = (WuhanVirusData) => {
  if (!WuhanVirusData) {
    return {}
  }

  const table_data = WuhanVirusData.reduce((all, item) => {
    if (all[item.country_name]) {
      all[item.country_name] = {
        cases: all[item.country_name].cases + item.cases,
        deaths: all[item.country_name].deaths + item.deaths,
        serious: all[item.country_name].serious + item.serious,
        critical: all[item.country_name].critical + item.critical,
        recovered: all[item.country_name].recovered + item.recovered
      }
    } else {
      all[item.country_name] = {
        cases: item.cases,
        deaths: item.deaths,
        serious: item.serious,
        critical: item.critical,
        recovered: item.recovered
      }
    }
    return all;
  }, {});
  return table_data;
}


const getSumByProperty = (data, property) => {
  return data.reduce((all, item, index) => {
    if (item[property]) {
      all = all + item[property];
    }
    return all;
  }, 0)
}

// Calculate global totals
const CalculateTotals = (WuhanVirusData) => {
  if (!WuhanVirusData) {
    return {};
  }

  const total_cases = getSumByProperty(WuhanVirusData, 'cases');
  const total_deaths = getSumByProperty(WuhanVirusData, 'deaths');
  const total_serious = getSumByProperty(WuhanVirusData, 'serious');
  const total_critical = getSumByProperty(WuhanVirusData, 'critical');
  const total_recovered = getSumByProperty(WuhanVirusData, 'recovered');
  const mortality_rate = Math.floor(total_deaths / (total_recovered + total_deaths) * 100);
  return {total_cases, total_deaths, total_serious, total_critical, total_recovered, mortality_rate}
}

// Perform calculations for map data
const CalculateMapData = (WuhanVirusData) => {
  if (!WuhanVirusData) {
    return []
  }
  const map_data = WuhanVirusData;
  return map_data
}

module.exports = {
  CalculateTableData,
  CalculateTotals,
  CalculateMapData
}