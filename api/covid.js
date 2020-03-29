export const getMostAffectedCountries = async data => {
	const res = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	  method: 'GET',
	  headers: new Headers({
	    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
	    "x-rapidapi-key": process.env.COUNTRY_COUNT_API_KEY
	  })
	});
	const resJson = await res.json();
	const date = new Date(resJson.statistic_taken_at);
	const updateDateTime = date.setHours(date.getHours() - 4);
	const updatedDate = new Date(updateDateTime);
	const dateList = updatedDate.toString().split(' ');
	const takenAt = `${dateList[1]} ${dateList[2]}, ${dateList[4]}`
	return { countries: resJson.countries_stat, takenAt };
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
	const provinces = resJson.data.covid19Stats;
	let filteredProvinces;
	if (country !== 'USA') {
		filteredProvinces = provinces.filter(province => province.country === country && province.province !== country);
	} else {
		filteredProvinces = provinces;
	}
	return filteredProvinces;
};