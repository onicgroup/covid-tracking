const invalidProvinces = [
	'',
	'Recovered',
	'Diamond Princess',
	'Grand Princess'
];

const isNotValidProvince = province => invalidProvinces.includes(province);

const constants = {
	COUNTRY_NOT_FOUND: "Country not found. Returning all stats. Please use a country name found in the data property."
};

module.exports = { constants, isNotValidProvince };