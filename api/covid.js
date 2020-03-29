export const getCountriesApi = async data => {
	const res = await fetch(`${process.env.BASE_URL}/api/countries`);
	const resJson = await res.json();

	const date = new Date(resJson.statistic_taken_at);
	const updateDateTime = date.setHours(date.getHours() - 4);
	const updatedDate = new Date(updateDateTime);
	const dateList = updatedDate.toString().split(' ');
	const takenAt = `${dateList[1]} ${dateList[2]}, ${dateList[4]}`

	return { countries: resJson.countries_stat, takenAt };
};

export const getProvincesByCountryApi = async country => {
	const res = await fetch(`${process.env.BASE_URL}/api/provinces?country=${country}`);
	const resJson = await res.json();
	const provinces = resJson.data.covid19Stats;
	return provinces;
};