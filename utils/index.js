export const packageCountryData = country => {
	const { country_name, cases, active_cases, deaths, total_recovered } = country;
	return {
		title: country_name,
		cases,
		active: active_cases,
		deaths,
		recovered: total_recovered
	};
};

export const packageProvinceData = province => {
	const { province: name, confirmed, deaths, recovered } = province;
	return {
		title: name,
		cases: confirmed,
		active: confirmed - deaths - recovered,
		deaths,
		recovered
	}
}