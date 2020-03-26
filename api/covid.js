export const getMostAffectedCountries = async data => {
	const res = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	  method: 'GET',
	  headers: new Headers({
	    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
	    "x-rapidapi-key": process.env.COUNTRY_COUNT_API_KEY
	  })
	});
	const resJson = await res.json();
	return resJson;
};

export const getProvinceCount = async country => {
	const res = await fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${country}`, {
	  method: 'GET',
	  headers: new Headers({
			"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
			"x-rapidapi-key": process.env.PROVINCE_COUNT_API_KEY
	  })
	});
	const resJson = await res.json();
	return resJson.data.covid19Stats;
};